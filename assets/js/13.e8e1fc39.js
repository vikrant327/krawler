(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{170:function(t,e,s){"use strict";s.r(e);var n=s(0),a=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("The problem with hooks is that they are configured at application setup time and usually fixed during the whole application lifecycle. It means you would have a to create an application instance for each pipeline you’d like to have, not so simple. This is the reason why krawler is mainly used as a command-line utility (CLI), where each execution setup a new application with a hooks pipeline according to the job to be done.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("You can add your custom data in the healthcheck structure using the "),s("router-link",{attrs:{to:"./../reference/hooks.html#healthcheck-options"}},[s("code",[t._v("healthcheck")])]),t._v(" hook.")],1)]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),s("ul",[t._m(7),t._v(" "),s("li",[s("strong",[t._v("options")]),t._v(":\n"),s("ul",[s("li",[s("strong",[t._v("cron")]),t._v(": a "),s("a",{attrs:{href:"https://github.com/kelektiv/node-cron",target:"_blank",rel:"noopener noreferrer"}},[t._v("CRON pattern"),s("OutboundLink")],1),t._v(" to schedule the job at regular intervals, e.g. "),s("code",[t._v("*/5 * * * * *")]),t._v(" will run it every 5 seconds, if not provided it will be run only once")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),s("li",[s("strong",[t._v("sync")]),t._v(": activate "),s("a",{attrs:{href:"https://github.com/feathersjs-ecosystem/feathers-sync",target:"_blank",rel:"noopener noreferrer"}},[t._v("sync module"),s("OutboundLink")],1),t._v(" with given connection URI so that internal events can be listened externally")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15)])])]),t._v(" "),s("p",[t._v("This function is responsible of parsing the job definition including all the required parameters to call the underlying services with the relevant hooks configured (see below).")]),t._v(" "),t._m(16),t._v(" "),s("p",[t._v("The jobfile is the sole mandatory argument of the CLI and options are read from the CLI arguments with the same names as in the internal API or using shortcuts like this:")]),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._m(20)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"using-krawler-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-krawler-api","aria-hidden":"true"}},[this._v("#")]),this._v(" Using Krawler API")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("However, using the CLI, you can also launch it as standard wep application/API. You can then POST job or task requests to the exposed services, e.g. on "),e("code",[this._v("localhost:3030/api/jobs")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("When running the krawler as a web API or cron job note that it provides a healthcheck endpoint e.g. on "),e("code",[this._v("localhost:3030/api/healthcheck")]),this._v(". The following JSON structure is returned:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("isRunning: boolean indicating if the cron job is currently running")]),t._v(" "),s("li",[t._v("nbSkippedJobs: number of times the scheduled job has been skipped due to an on-going one")]),t._v(" "),s("li",[t._v("error: error object whenever the cron job has erroned\nThe returned HTTP code is "),s("code",[t._v("500")]),t._v(" whenever an error has occured in the last run, "),s("code",[t._v("200")]),t._v(" otherwise.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"command-line-interface"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#command-line-interface","aria-hidden":"true"}},[this._v("#")]),this._v(" Command-Line Interface")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"internal-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#internal-api","aria-hidden":"true"}},[this._v("#")]),this._v(" Internal API")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The underlying implementation is managed by the global "),e("strong",[this._v("run(jobfile, options)")]),this._v(" function:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("jobfile")]),this._v(": a path to a local job file or a jobfile JSON object")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("proxy")]),this._v(": proxy URL to be used for HTTP requests")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("proxy-https")]),this._v(": proxy URL to be used for HTTPS requests")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("user")]),this._v(": user name to be used for proxy")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("password")]),this._v(": user password to be used for proxy")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("debug")]),this._v(": output debug messages")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("port")]),this._v(": port to be used by the krawler (defaults to 3030)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("api")]),this._v(": launch the krawler as a web service/API")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("api-prefix")]),this._v(": api prefix to be used when launching the krawler as a web service/API (defaults to "),e("code",[this._v("/api")]),this._v(")")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"external-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#external-api","aria-hidden":"true"}},[this._v("#")]),this._v(" External API")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("krawler --user user_name -p password -P proxy_url --cron "),e("span",{pre:!0,attrs:{class:"token string"}},[this._v('"*/5 * * * * *"')]),this._v(" path_to_jobfile.json\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("A jobfile could be a JSON or JS file (it will be "),e("code",[this._v("require()")]),this._v(") and its structure is the following:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" job "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Options for job executor")]),t._v("\n  options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    workersLimit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    faultTolerant"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Store to be used for job output")]),t._v("\n  store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'job-store'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Common options for all generated tasks")]),t._v("\n  taskTemplate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Store to be used for task output")]),t._v("\n    store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'job-store'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<%= jobId %>-<%= taskId %>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Hooks setup")]),t._v("\n  hooks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Tasks service hooks")]),t._v("\n    tasks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Hooks to be run after task creation")]),t._v("\n      after"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Each entry is a hook name and associated options object")]),t._v("\n        computeSomething"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          hookOption"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Jobs service hooks")]),t._v("\n    jobs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Hooks to be run before job creation")]),t._v("\n      before"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        generateTasks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          hookOption"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Hooks to be run after job creation")]),t._v("\n      after"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        generateOutput"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          hookOption"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The list of tasks to run if not generated by hooks")]),t._v("\n  tasks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),e("p",[this._v("When running the krawler as a web API note that only the hooks pipeline is mandatory in the job file. Indeed, job and task objects will be then sent by requesting the exposed web services.")])])}],!1,null,null,null);e.default=a.exports}}]);