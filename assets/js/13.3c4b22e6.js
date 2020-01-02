(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{170:function(t,e,s){"use strict";s.r(e);var n=s(0),a=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("The problem with hooks is that they are configured at application setup time and usually fixed during the whole application lifecycle. It means you would have a to create an application instance for each pipeline you’d like to have, not so simple. This is the reason why krawler is mainly used as a command-line utility (CLI), where each execution setup a new application with a hooks pipeline according to the job to be done.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("ul",[t._m(5),t._v(" "),s("li",[s("strong",[t._v("options")]),t._v(":\n"),s("ul",[s("li",[s("strong",[t._v("cron")]),t._v(": a "),s("a",{attrs:{href:"https://github.com/kelektiv/node-cron",target:"_blank",rel:"noopener noreferrer"}},[t._v("CRON pattern"),s("OutboundLink")],1),t._v(" to schedule the job at regular intervals, e.g. "),s("code",[t._v("*/5 * * * * *")]),t._v(" will run it every 5 seconds, if not provided it will be run only once")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),s("li",[s("strong",[t._v("sync")]),t._v(": activate "),s("a",{attrs:{href:"https://github.com/feathersjs-ecosystem/feathers-sync",target:"_blank",rel:"noopener noreferrer"}},[t._v("sync module"),s("OutboundLink")],1),t._v(" with given connection URI so that internal events can be listened externally")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13)])])]),t._v(" "),s("p",[t._v("This function is responsible of parsing the job definition including all the required parameters to call the underlying services with the relevant hooks configured (see below).")]),t._v(" "),t._m(14),t._v(" "),s("p",[t._v("The jobfile is the sole mandatory argument of the CLI and options are read from the CLI arguments with the same names as in the internal API or using shortcuts like this:")]),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("You can add your custom data in the healthcheck structure using the "),s("router-link",{attrs:{to:"./../reference/hooks.html#healthcheck-options"}},[s("code",[t._v("healthcheck")])]),t._v(" hook.")],1)]),t._v(" "),t._m(24),t._v(" "),s("p",[t._v("For convenience the krawler also includes a built-in healthcheck script that could be used e.g. by "),s("a",{attrs:{href:"https://docs.docker.com/engine/reference/commandline/service_create/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker"),s("OutboundLink")],1),t._v(". This script uses similar options than the CLI plus some specific options:")]),t._v(" "),s("ul",[t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),s("li",[s("strong",[t._v("slack-webhook")]),t._v(": "),s("a",{attrs:{href:"https://api.slack.com/incoming-webhooks",target:"_blank",rel:"noopener noreferrer"}},[t._v("Slack webhook URL"),s("OutboundLink")],1),t._v(" to post messages on failure (defaults to process.env.SLACK_WEBHOOK_URL)")]),t._v(" "),t._m(32),t._v(" "),t._m(33)]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Templates are generated with healthcheck structure and environment variables as context, learn more about "),s("a",{attrs:{href:"https://lodash.com/docs/4.17.4#template",target:"_blank",rel:"noopener noreferrer"}},[t._v("templating"),s("OutboundLink")],1),t._v(".")])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"using-krawler-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-krawler-api","aria-hidden":"true"}},[this._v("#")]),this._v(" Using Krawler API")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("However, using the CLI, you can also launch it as standard wep application/API. You can then POST job or task requests to the exposed services, e.g. on "),e("code",[this._v("localhost:3030/api/jobs")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"command-line-interface"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#command-line-interface","aria-hidden":"true"}},[this._v("#")]),this._v(" Command-Line Interface")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"internal-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#internal-api","aria-hidden":"true"}},[this._v("#")]),this._v(" Internal API")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The underlying implementation is managed by the global "),e("strong",[this._v("run(jobfile, options)")]),this._v(" function:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("jobfile")]),this._v(": a path to a local job file or a jobfile JSON object")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("proxy")]),this._v(": proxy URL to be used for HTTP requests")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("proxy-https")]),this._v(": proxy URL to be used for HTTPS requests")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("user")]),this._v(": user name to be used for proxy")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("password")]),this._v(": user password to be used for proxy")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("debug")]),this._v(": output debug messages")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("port")]),this._v(": port to be used by the krawler (defaults to "),e("code",[this._v("3030")]),this._v(")")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("api")]),this._v(": launch the krawler as a web service/API")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("api-prefix")]),this._v(": api prefix to be used when launching the krawler as a web service/API (defaults to "),e("code",[this._v("/api")]),this._v(")")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"external-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#external-api","aria-hidden":"true"}},[this._v("#")]),this._v(" External API")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("krawler --user user_name -p password -P proxy_url --cron "),e("span",{pre:!0,attrs:{class:"token string"}},[this._v('"*/5 * * * * *"')]),this._v(" path_to_jobfile.json\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("A jobfile could be a JSON or JS file (it will be "),e("code",[this._v("require()")]),this._v(") and its structure is the following:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" job "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Options for job executor")]),t._v("\n  options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    workersLimit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    faultTolerant"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Store to be used for job output")]),t._v("\n  store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'job-store'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Common options for all generated tasks")]),t._v("\n  taskTemplate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Store to be used for task output")]),t._v("\n    store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'job-store'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<%= jobId %>-<%= taskId %>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Hooks setup")]),t._v("\n  hooks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Tasks service hooks")]),t._v("\n    tasks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Hooks to be run after task creation")]),t._v("\n      after"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Each entry is a hook name and associated options object")]),t._v("\n        computeSomething"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          hookOption"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Jobs service hooks")]),t._v("\n    jobs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Hooks to be run before job creation")]),t._v("\n      before"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        generateTasks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          hookOption"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Hooks to be run after job creation")]),t._v("\n      after"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        generateOutput"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          hookOption"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The list of tasks to run if not generated by hooks")]),t._v("\n  tasks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),e("p",[this._v("When running the krawler as a web API note that only the hooks pipeline is mandatory in the job file. Indeed, job and task objects will be then sent by requesting the exposed web services.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"healthcheck"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#healthcheck","aria-hidden":"true"}},[this._v("#")]),this._v(" Healthcheck")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"healthcheck-endpoint"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#healthcheck-endpoint","aria-hidden":"true"}},[this._v("#")]),this._v(" Healthcheck endpoint")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("When running the krawler as a cron job note that it provides a healthcheck endpoint e.g. on "),e("code",[this._v("localhost:3030/api/healthcheck")]),this._v(". The following JSON structure is returned:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("isRunning")]),t._v(": boolean indicating if the cron job is currently running")]),t._v(" "),s("li",[s("code",[t._v("duration")]),t._v(": last run duration in seconds")]),t._v(" "),s("li",[s("code",[t._v("nbSkippedJobs")]),t._v(": number of times the scheduled job has been skipped due to an on-going one")]),t._v(" "),s("li",[s("code",[t._v("error")]),t._v(": returned error object whenever the cron job has erroned")]),t._v(" "),s("li",[s("code",[t._v("nbFailedTasks")]),t._v(": number of failed tasks for last run for fault-tolerant jobs")]),t._v(" "),s("li",[s("code",[t._v("nbSuccessfulTasks")]),t._v(": number of successful tasks for last run for fault-tolerant jobs")]),t._v(" "),s("li",[s("code",[t._v("successRate")]),t._v(": Ratio of successful tasks / total tasks")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The returned HTTP code is "),e("code",[this._v("500")]),this._v(" whenever an error has occured in the last run, "),e("code",[this._v("200")]),this._v(" otherwise.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"healthcheck-command"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#healthcheck-command","aria-hidden":"true"}},[this._v("#")]),this._v(" Healthcheck command")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("debug")]),this._v(": output debug messages")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("port")]),this._v(": port used by the krawler (defaults to "),e("code",[this._v("3030")]),this._v(")")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("api")]),this._v(": indicates if the krawler has been launched as a web service/API")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("api-prefix")]),this._v(": api prefix used when launching the krawler as a web service/API (defaults to "),e("code",[this._v("/api")]),this._v(")")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("success-rate")]),this._v(": the success rate for fault-tolerant jobs to be considered as successful when greater or equal (defaults to 1)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("max-duration")]),this._v(": the maximum run duration in seconds for fault-tolerant jobs to be considered as failed if greater than (defaults to unset)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("nb-skipped-jobs")]),this._v(": the number of skipped runs for scheduled fault-tolerant jobs to be considered as failed (defaults to 3)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("message-template")]),this._v(": Message template used on failure for console and Slack output (defaults to "),e("code",[this._v("Job <%= jobId %>: <%= error.message %>")]),this._v(")")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("link-template")]),this._v(": Link template used on failure for Slack output (defaults to empty value)")])}],!1,null,null,null);e.default=a.exports}}]);