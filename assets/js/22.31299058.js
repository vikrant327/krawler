(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{235:function(t,s,e){"use strict";e.r(s);var a=e(19),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"services"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#services"}},[t._v("#")]),t._v(" Services")]),t._v(" "),e("h2",{attrs:{id:"stores"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stores"}},[t._v("#")]),t._v(" Stores")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("stores")]),t._v(" "),e("a",{attrs:{href:"https://docs.feathersjs.com/api/services.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("service"),e("OutboundLink")],1),t._v(" allow to manage in-memory data stores with the following operations:")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("create(data)")]),t._v(": create a store based on provided data object properties\n"),e("ul",[e("li",[e("strong",[t._v("id")]),t._v(": unique store ID")]),t._v(" "),e("li",[e("strong",[t._v("type")]),t._v(": store type (e.g. "),e("code",[t._v("fs")]),t._v(")")]),t._v(" "),e("li",[e("strong",[t._v("options")]),t._v(": specific store implementation options")])])]),t._v(" "),e("li",[e("strong",[t._v("remove(id)")]),t._v(": remove the store with given ID")]),t._v(" "),e("li",[e("strong",[t._v("get(id)")]),t._v(": retrieve the store with givnen ID")])]),t._v(" "),e("p",[t._v("The returned store objects comply the "),e("a",{attrs:{href:"https://github.com/maxogden/abstract-blob-store",target:"_blank",rel:"noopener noreferrer"}},[t._v("abstract-blob-store"),e("OutboundLink")],1),t._v(" interface. Available store types are the following:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/mafintosh/fs-blob-store",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("fs")]),e("OutboundLink")],1),t._v(" for local file system")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/jb55/s3-blob-store",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("s3")]),e("OutboundLink")],1),t._v(" for AWS S3")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/retrohacker/memory-blob-store",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("memory")]),e("OutboundLink")],1),t._v(" for in-memory data buffers")])]),t._v(" "),e("h2",{attrs:{id:"tasks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tasks"}},[t._v("#")]),t._v(" Tasks")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("tasks")]),t._v(" "),e("a",{attrs:{href:"https://docs.feathersjs.com/api/services.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("service"),e("OutboundLink")],1),t._v(" allow to manage individual task execution with the following operations:")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("create(data)")]),t._v(": create a task based on provided data object properties\n"),e("ul",[e("li",[e("strong",[t._v("id")]),t._v(": unique task ID")]),t._v(" "),e("li",[e("strong",[t._v("type")]),t._v(": task type (e.g. "),e("code",[t._v("http")]),t._v(")")]),t._v(" "),e("li",[e("strong",[t._v("attemptsLimit")]),t._v(": if specified the task will be run again until this number of times before being declared as failed")]),t._v(" "),e("li",[e("strong",[t._v("attemptsOptions")]),t._v(": if specified each retried task will be run by merging the associated options for each retry given in this array")]),t._v(" "),e("li",[e("strong",[t._v("faultTolerant")]),t._v(": will catch any error raised by the task execution so that the hook chain be stopped but the job will continue anyway")]),t._v(" "),e("li",[e("strong",[t._v("options")]),t._v(": specific task implementation options plus\n"),e("ul",[e("li",[e("strong",[t._v("outputType")]),t._v(": the type of output produced by this task, defaults to "),e("code",[t._v("intermediate")])])])])])]),t._v(" "),e("li",[e("strong",[t._v("remove(id)")]),t._v(": remove the task with given ID, this will actually remove the produced output from the store given as a (query) parameters")])]),t._v(" "),e("p",[t._v("The returned task objects will contain an additional property for each output types holding an array of produced output files. This is used by the "),e("RouterLink",{attrs:{to:"/reference/hooks.html#clearoutputsoptions"}},[t._v("clearOutputs")]),t._v(" hook to perform cleanup.")],1),t._v(" "),e("p",[t._v("By default a task implementation return a "),e("a",{attrs:{href:"https://nodejs.org/api/stream.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("stream"),e("OutboundLink")],1),t._v(" to extract data from that is piped to the target store. Available task types are the following:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/request/request",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("http")]),e("OutboundLink")],1),t._v(" for HTTP requests, available options")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Web_Map_Service",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("wms")]),e("OutboundLink")],1),t._v(" for HTTP requests targeting WMS services")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Web_Coverage_Service",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("wcs")]),e("OutboundLink")],1),t._v(" for HTTP requests targeting WCS services")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Web_Feature_Service",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("wfs")]),e("OutboundLink")],1),t._v(" for HTTP requests targeting WFS services")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://wiki.openstreetmap.org/wiki/Overpass_API",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("overpass")]),e("OutboundLink")],1),t._v(" for HTTP requests to query OpenStreetMap data")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/maxogden/abstract-blob-store",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("store")]),e("OutboundLink")],1),t._v(" to read input data from a store")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://en.wikipedia.org/wiki/NOP",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("noop")]),e("OutboundLink")],1),t._v(" when you don't need to read anything, the purpose is just to launch the hooks, returns an "),e("code",[t._v("undefined")]),t._v(" stream")])]),t._v(" "),e("p",[t._v("If the task type is written "),e("code",[t._v("type-stream")]),t._v(" then the stream is not piped directly to the store but returned in a "),e("code",[t._v("stream")]),t._v(" property for further usage by hooks.")]),t._v(" "),e("h2",{attrs:{id:"jobs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jobs"}},[t._v("#")]),t._v(" Jobs")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("jobs")]),t._v(" "),e("a",{attrs:{href:"https://docs.feathersjs.com/api/services.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("service"),e("OutboundLink")],1),t._v(" allow to manage job execution with the following operations:")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("create(data)")]),t._v(": create a job based on provided data object properties\n"),e("ul",[e("li",[e("strong",[t._v("id")]),t._v(": unique job ID")]),t._v(" "),e("li",[e("strong",[t._v("type")]),t._v(": job type (e.g. "),e("code",[t._v("async")]),t._v(")")]),t._v(" "),e("li",[e("strong",[t._v("options")]),t._v(": specific job implementation options")])])]),t._v(" "),e("li",[e("strong",[t._v("remove(id)")]),t._v(": remove the job with given ID, this will actually remove the produced output from the store given as a (query) parameters")])]),t._v(" "),e("p",[t._v("The returned job object is a "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",target:"_blank",rel:"noopener noreferrer"}},[t._v("promise"),e("OutboundLink")],1),t._v(" resolved or rejected when the job is finished or has failed.")]),t._v(" "),e("p",[t._v("Available common job options are the following:")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("workersLimit")]),t._v(": the maximum number of tasks to be run in parallel by the job")]),t._v(" "),e("li",[e("strong",[t._v("attemptsLimit")]),t._v(": if specified each task will be run again until this number of times before being declared as failed")]),t._v(" "),e("li",[e("strong",[t._v("faultTolerant")]),t._v(": will catch erroneous tasks so that the job will continue anyway, the hook chain will be stopped on the faulty tasks however")]),t._v(" "),e("li",[e("strong",[t._v("timeout")]),t._v(": will stop the job and flag it as erroneous after the given timeout (ms), will wait until currently processed tasks are ran however")])]),t._v(" "),e("p",[t._v("Available job types are the following:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("async")]),t._v(" to run tasks in parallel by batch")]),t._v(" "),e("li",[e("code",[t._v("kue")]),t._v(" to run tasks by the "),e("a",{attrs:{href:"https://github.com/Automattic/kue",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kue job sequencer"),e("OutboundLink")],1),t._v(", available specific options are\n"),e("ul",[e("li",[e("strong",[t._v("attemptsLimit")]),t._v(": the maximum number of attempts for a task before being declared as failed by Kue")])])])]),t._v(" "),e("h2",{attrs:{id:"task-templates"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#task-templates"}},[t._v("#")]),t._v(" Task templates")]),t._v(" "),e("p",[t._v("When creating a job if a "),e("code",[t._v("taskTemplate")]),t._v(" object is provided it will be automatically merged in all job tasks so that you can use it to store options common to all your tasks. It also provides task ID "),e("a",{attrs:{href:"https://lodash.com/docs/4.17.4#template",target:"_blank",rel:"noopener noreferrer"}},[t._v("templating"),e("OutboundLink")],1),t._v(" based on "),e("code",[t._v("jobId")]),t._v(" and "),e("code",[t._v("taskId")]),t._v(" injected variables. So if you provide the following task template:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("id: 'job',\ntaskTemplate: {\n  store: 'job-store',\n  id: '<%= jobId %>-<%= taskId %>',\n  type: 'http',\n  options: {\n    url: 'xxx',\n    parameter1: xxx\n  }\n}\n")])])]),e("p",[t._v("And submit the following task to your job:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("{\n  id: 'task',\n  options: {\n    parameter2: xxx\n  }\n}\n")])])]),e("p",[t._v("The final task to be executed will be:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("{\n  store: 'job-store',\n  id: 'job-task',\n  type: 'http',\n  options: {\n    url: 'xxx',\n    parameter1: xxx,\n    parameter2: xxx\n  }\n}\n")])])]),e("h2",{attrs:{id:"complete-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#complete-example"}},[t._v("#")]),t._v(" Complete Example")]),t._v(" "),e("p",[t._v("Here's an example of a Feathers server that uses the complete set of krawler services:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" feathers "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'feathers'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" rest "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'feathers-rest'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hooks "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'feathers-hooks'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" bodyParser "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'body-parser'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" errorHandler "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'feathers-errors/handler'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" plugin "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'krawler'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Initialize the application")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("feathers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("configure")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rest")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("configure")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("hooks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("configure")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("plugins")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Initialize your feathers plugin services")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/stores'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" plugin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("stores")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/tasks'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" plugin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("tasks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/jobs'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" plugin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("jobs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("errorHandler")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Define the required hooks for your app")]),t._v("\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jobs'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("hooks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tasks'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("hooks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3030")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Feathers app started on 127.0.0.1:3030'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// You can now call services in REST or programmatically")]),t._v("\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jobs'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("tasks")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Job terminated, '")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" tasks"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("' tasks ran'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);