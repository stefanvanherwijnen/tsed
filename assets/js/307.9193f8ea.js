(window.webpackJsonp=window.webpackJsonp||[]).push([[307],{745:function(e,t,a){"use strict";a.r(t);var s=a(44),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"deprecated"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deprecated"}},[e._v("#")]),e._v(" Deprecated "),a("Badge",{attrs:{text:"Decorator",type:"decorator"}})],1),e._v(" "),a("section",{staticClass:"symbol-info"},[a("table",{staticClass:"is-full-width"},[a("tbody",[a("tr",[a("th",[e._v("Module")]),a("td",[a("div",{staticClass:"lang-typescript"},[a("span",{staticClass:"token keyword"},[e._v("import")]),e._v(" { Deprecated } "),a("span",{staticClass:"token keyword"},[e._v("from")]),e._v(" "),a("span",{staticClass:"token string"},[e._v('"@tsed/core"')])])])]),a("tr",[a("th",[e._v("Source")]),a("td",[a("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v5.56.0/packages/core/src/decorators/deprecated.ts#L0-L0"}},[e._v("/packages/core/src/decorators/deprecated.ts")])])])])])]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("div",{staticClass:"language-typescript"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[e._v("function "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("Deprecated")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Function"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")])])])]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("div",{pre:!0},[a("p",[e._v("The "),a("code",[e._v("@Deprecated()")]),e._v(" decorators wraps the given method in such a way that it is marked as deprecated.")]),e._v(" "),a("div",{pre:!0,attrs:{class:"language-typescript line-numbers-mode"}},[a("pre",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[a("code",[e._v("provide Foo "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("Deprecated")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Foo.method: Use Foo.method2 instead"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("method")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{pre:!0,attrs:{class:"line-numbers-wrapper"}},[a("span",{pre:!0,attrs:{class:"line-number"}},[e._v("1")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[e._v("2")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[e._v("3")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[e._v("4")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[e._v("5")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[e._v("6")]),a("br")])]),a("p",[e._v("When called, @Deprecated() will return a function that will emit a "),a("code",[e._v("DeprecationWarning")]),e._v(" using the "),a("code",[e._v("process.on('warning')")]),e._v(" event.\nBy default, this warning will be emitted and printed to "),a("code",[e._v("stderr")]),e._v(" exactly once, the first time it is called. After the warning is emitted, the wrapped method is called.")]),e._v(" "),a("p",[e._v("If either the "),a("code",[e._v("--no-deprecation")]),e._v(" or "),a("code",[e._v("--no-warnings")]),e._v(" command line flags are used, or if the "),a("code",[e._v("process.noDeprecation")]),e._v("\nproperty is set to "),a("code",[e._v("true")]),e._v(" prior to the first deprecation warning, the "),a("code",[e._v("@Deprecated()")]),e._v(" decorators does nothing.")]),e._v(" "),a("p",[e._v("If the "),a("code",[e._v("--trace-deprecation")]),e._v(" or "),a("code",[e._v("--trace-warnings")]),e._v(" command line flags are set, or the "),a("code",[e._v("process.traceDeprecation")]),e._v("\nproperty is set to "),a("code",[e._v("true")]),e._v(", a warning and a stack trace are printed to stderr the first time the deprecated function is called.")]),e._v(" "),a("p",[e._v("If the "),a("code",[e._v("--throw-deprecation")]),e._v(" command line flag is set, or the "),a("code",[e._v("process.throwDeprecation")]),e._v(" property is set to "),a("code",[e._v("true")]),e._v(",\nthen an exception will be thrown when the deprecated function is called.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("--throw-deprecation")]),e._v(" command line flag and "),a("code",[e._v("process.throwDeprecation")]),e._v(" property take precedence over "),a("code",[e._v("--trace-deprecation")]),e._v("\nand "),a("code",[e._v("process.traceDeprecation")]),e._v(".")])])])}),[],!1,null,null,null);t.default=r.exports}}]);