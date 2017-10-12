import chai, { util, expect } from 'chai'
import chailint from 'chai-lint'
import feathers from 'feathers'
import path from 'path'
import moment from 'moment'
import store from 'fs-blob-store'
import plugin, { stores } from '../src'

describe('krawler:tasks', () => {
  let app, server, storage, tasksService

  before(() => {
    chailint(chai, util)
    app = feathers()
    app.configure(plugin)
    server = app.listen(3030)
  })

  it('registers the storage', () => {
    storage = store(path.join(__dirname, './data'))
    stores.registerStore('fs', storage)
    expect(stores.getStore('fs')).toExist()
  })

  it('creates the tasks service', () => {
    app.use('tasks', plugin.tasks())
    tasksService = app.service('tasks')
    expect(tasksService).toExist()
  })

  it('creates a WCS task', (done) => {
    let datetime = moment.utc()
    datetime.startOf('day')
    tasksService.create({
      id: 'request.tif',
      store: 'fs',
      type: 'wcs',
      options: {
        url: 'https://geoservices.meteofrance.fr/services/MF-NWP-GLOBAL-ARPEGE-05-GLOBE-WCS?SERVICE=WCS&version=2.0.1',
        token: '__qEMDoIC2ogPRlSoRQLGUBOomaxJyxdEd__',
        coverageid: 'TEMPERATURE__SPECIFIC_HEIGHT_LEVEL_ABOVE_GROUND' + '___' + datetime.format(),
        subsets: {
          height: 2,
          time: datetime.format()
        }
      }
    })
    .then(task => {
      storage.exists('request.tif', error => done(error))
    })
  })
  // Let enough time to download
  .timeout(10000)

  // Cleanup
  after(() => {
    if (server) server.close()
  })
})
