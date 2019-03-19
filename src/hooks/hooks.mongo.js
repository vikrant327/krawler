import _ from 'lodash'
import { MongoClient, MongoError, GridFSBucket } from 'mongodb'
import makeDebug from 'debug'
import { getItems } from 'feathers-hooks-common'
import { template, templateObject, templateQueryObject, transformJsonObject, getStoreFromHook } from '../utils'

const debug = makeDebug('krawler:hooks:mongo')

// Connect to the mongo database
export function connectMongo (options = {}) {
  return async function (hook) {
    let item = getItems(hook)
    let client = _.get(item, options.clientPath || 'client')
    if (client) {
      debug('Already connected to MongoDB for ' + item.id)
      return hook
    }
    debug('Connecting to MongoDB for ' + item.id)
    client = await MongoClient.connect(options.url, _.merge(_.omit(options, ['url', 'dbName', 'clientPath']), { useNewUrlParser: true }))
    let dbName = options.dbName
    if (!dbName) {
      // Extract database name.  Need to remove the connections options if any
      let indexOfDBName = options.url.lastIndexOf('/') + 1
      let indexOfOptions = options.url.indexOf('?')
      if (indexOfOptions === -1) dbName = options.url.substring(indexOfDBName)
      else dbName = options.url.substring(indexOfDBName, indexOfOptions)
    }
    client.db = client.db(dbName)
    _.set(item, options.clientPath || 'client', client)
    debug('Connected to MongoDB for ' + item.id)
    return hook
  }
}

// Disconnect from the database
export function disconnectMongo (options = {}) {
  return async function (hook) {
    let item = getItems(hook)
    let client = _.get(item, options.clientPath || 'client')
    if (_.isNil(client)) {
      throw new Error(`You must be connected to MongoDB before using the 'disconnectMongo' hook`)
    }

    debug('Disconnecting from MongoDB for ' + item.id)
    await client.close()
    _.unset(item, options.clientPath || 'client')
    debug('Disconnected from MongoDB for ' + item.id)
    return hook
  }
}

// Drop a collection
export function dropMongoCollection (options = {}) {
  return async function (hook) {
    let item = getItems(hook)
    let client = _.get(item, options.clientPath || 'client')
    if (_.isNil(client)) {
      throw new Error(`You must be connected to MongoDB before using the 'dropMongoCollection' hook`)
    }

    // Drop the collection
    let collection = template(item, _.get(options, 'collection', _.snakeCase(item.id)))
    debug('Droping the ' + collection + ' collection')
    try {
      await client.db.dropCollection(collection)
    } catch (error) {
      // If collection does not exist we do not raise
      if (error instanceof MongoError && error.code === 26) {
        debug(collection + ' collection does not exist, skipping drop')
        return hook
      } else {
        // Rethrow
        throw error
      }
    }
    return hook
  }
}

// Create a collection
export function createMongoCollection (options = {}) {
  return async function (hook) {
    let item = getItems(hook)
    let client = _.get(item, options.clientPath || 'client')
    if (_.isNil(client)) {
      throw new Error(`You must be connected to MongoDB before using the 'createMongoCollection' hook`)
    }

    const collectionName = template(item, _.get(options, 'collection', _.snakeCase(item.id)))
    // Check if already exist
    let collection
    try {
      collection = await client.db.collection(collectionName, { strict: true })
    } catch (error) {
      // If it does not exist we will create it
    }
    // Create the collection if required
    if (!collection) {
      debug('Creating the ' + collection + ' collection')
      collection = await client.db.createCollection(collectionName)
    }
    // Add index if required
    if (options.index) {
      // As arguments or single object ?
      if (Array.isArray(options.index)) collection.createIndex(...options.index)
      else collection.createIndex(options.index)
    } else if (options.indices) { // Or multiple indices
      // As arguments or single object ?
      options.indices.forEach(index => {
        // As arguments or single object ?
        if (Array.isArray(index)) collection.createIndex(...index)
        else collection.createIndex(index)
      })
    }
    return hook
  }
}

// Retrieve JSON documents from a collection
export function readMongoCollection (options = {}) {
  return async function (hook) {
    let item = getItems(hook)
    let client = _.get(item, options.clientPath || 'client')
    if (_.isNil(client)) {
      throw new Error(`You must be connected to MongoDB before using the 'readMongoCollection' hook`)
    }

    const collectionName = template(item, _.get(options, 'collection', _.snakeCase(item.id)))
    let collection = client.db.collection(collectionName)
    const templatedQuery = templateQueryObject(item, options.query || {})
    let query = collection.find(templatedQuery)
    if (options.project) query.project(options.project)
    if (options.sort) query.sort(options.sort)
    if (options.limit) query.limit(options.limit)
    if (options.skip) query.skip(options.skip)
    debug(`Querying collection ${collectionName} with`, templatedQuery)
    let json = await query.toArray()
    // Allow transform after read
    if (options.transform) {
      const templatedTransform = templateObject(item, options.transform)
      json = transformJsonObject(json, templatedTransform)
    }

    _.set(hook, options.dataPath || 'result.data', json)
    return hook
  }
}

// Insert JSON document(s) in a collection
export function writeMongoCollection (options = {}) {
  return async function (hook) {
    let item = getItems(hook)
    let client = _.get(item, options.clientPath || 'client')
    if (_.isNil(client)) {
      throw new Error(`You must be connected to MongoDB before using the 'writeMongoCollection' hook`)
    }

    const collectionName = template(item, _.get(options, 'collection', _.snakeCase(item.id)))
    let collection = client.db.collection(collectionName)
    // Defines the chunks
    let json = _.get(hook, options.dataPath || 'result.data', {})
    // Allow transform before write
    if (options.transform) {
      const templatedTransform = templateObject(item, options.transform)
      json = transformJsonObject(json, templatedTransform)
    }
    let chunks = []
    // Handle specific case of GeoJson
    if (json.type === 'FeatureCollection') {
      chunks = _.chunk(json.features, _.get(options, 'chunkSize', 100))
    } else if (json.type === 'Feature') {
      chunks.push([json])
    } else if (Array.isArray(json)) {
      chunks = _.chunk(json, _.get(options, 'chunkSize', 100))
    } else {
      chunks.push([json])
    }

    // Write the chunks
    for (let i = 0; i < chunks.length; ++i) {
      debug(`Inserting ${chunks.length} JSON document in the ${collectionName} collection `)
      await collection.bulkWrite(chunks[i].map(chunk => {
        return { insertOne: { document: chunk } }
      }))
    }
    return hook
  }
}

// Delete documents in a collection
export function deleteMongoCollection (options = {}) {
  return async function (hook) {
    let item = getItems(hook)
    let client = _.get(item, options.clientPath || 'client')
    if (_.isNil(client)) {
      throw new Error(`You must be connected to MongoDB before using the 'deleteMongoCollection' hook`)
    }

    const collectionName = template(item, _.get(options, 'collection', _.snakeCase(item.id)))
    let collection = client.db.collection(collectionName)
    const templatedQuery = templateQueryObject(item, options.filter || {})
    debug(`Deleting documents in collection ${collectionName} with`, templatedQuery)
    await collection.deleteMany(templatedQuery)
    return hook
  }
}

// Create a GridFS bucket
export function createMongoBucket (options = {}) {
  return async function (hook) {
    let item = getItems(hook)
    let client = _.get(item, options.clientPath || 'client')
    if (_.isNil(client)) {
      throw new Error(`You must be connected to MongoDB before using the 'createMongoCollection' hook`)
    }

    const bucketName = template(item, _.get(options, 'bucket', _.snakeCase(item.id)))
    // Check if already exist
    let bucket
    try {
      bucket = await client.db.collection(bucketName + '.files', { strict: true })
    } catch (error) {
      // If it does not exist we will create it
    }
    if (!bucket) {
      debug('Creating the ' + bucketName + ' bucket')
      bucket = new GridFSBucket(client.db, Object.assign({
        chunkSizeBytes: 8 * 1024 * 1024,
        bucketName
      }, options))
      _.set(client, `buckets.${bucketName}`, bucket)
    }
    return hook
  }
}

// Read file from a bucket
export function readMongoBucket (options = {}) {
  return async function (hook) {
    let item = getItems(hook)
    let client = _.get(item, options.clientPath || 'client')
    if (_.isNil(client)) {
      throw new Error(`You must be connected to MongoDB before using the 'readMongoBucket' hook`)
    }

    const bucketName = template(item, _.get(options, 'bucket', _.snakeCase(item.id)))
    let bucket = _.get(client, `buckets.${bucketName}`)
    const filePath = template(item, options.key || item.id)
    const store = await getStoreFromHook(hook, 'writeMongoBucket', options)
    debug(`Extracting ${filePath} from the ${bucketName} bucket `)
    return new Promise((resolve, reject) => {
      bucket.openDownloadStreamByName(filePath)
      .pipe(store.createWriteStream(filePath))
      .on('error', reject)
      .on('finish', _ => resolve(hook))
    })
  }
}

// Insert file in a bucket
export function writeMongoBucket (options = {}) {
  return async function (hook) {
    let item = getItems(hook)
    let client = _.get(item, options.clientPath || 'client')
    if (_.isNil(client)) {
      throw new Error(`You must be connected to MongoDB before using the 'writeMongoBucket' hook`)
    }

    const bucketName = template(item, _.get(options, 'bucket', _.snakeCase(item.id)))
    let bucket = _.get(client, `buckets.${bucketName}`)
    const filePath = template(item, options.key || item.id)
    const store = await getStoreFromHook(hook, 'writeMongoBucket', options)
    debug(`Inserting ${filePath} in the ${bucketName} bucket `)
    return new Promise((resolve, reject) => {
      store.createReadStream(filePath)
      .pipe(bucket.openUploadStream(filePath))
      .on('error', reject)
      .on('finish', _ => resolve(hook))
    })
  }
}

// Delete file in a bucket
export function deleteMongoBucket (options = {}) {
  return async function (hook) {
    let item = getItems(hook)
    let client = _.get(item, options.clientPath || 'client')
    if (_.isNil(client)) {
      throw new Error(`You must be connected to MongoDB before using the 'deleteMongoBucket' hook`)
    }

    const bucketName = template(item, _.get(options, 'bucket', _.snakeCase(item.id)))
    let bucket = _.get(client, `buckets.${bucketName}`)
    const filePath = template(item, options.key || item.id)

    let results = await bucket.find({ filename: filePath }).toArray()
    if (results.length > 0) {
      debug(`Deleting ${filePath} in the ${bucketName} bucket `)
      await bucket.delete(results[0]._id)
    } else throw Error(`Cannot delete ${filePath} in the ${bucketName} bucket`)
    return hook
  }
}

// Drop a bucket
export function dropMongoBucket (options = {}) {
  return async function (hook) {
    let item = getItems(hook)
    let client = _.get(item, options.clientPath || 'client')
    if (_.isNil(client)) {
      throw new Error(`You must be connected to MongoDB before using the 'readMongoBucket' hook`)
    }

    const bucketName = template(item, _.get(options, 'bucket', _.snakeCase(item.id)))
    let bucket = _.get(client, `buckets.${bucketName}`)
    await bucket.drop()
    debug(`Dropping the ${bucketName} bucket `)
    return hook
  }
}
