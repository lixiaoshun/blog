(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{364:function(s,a,e){s.exports=e.p+"assets/img/webpack5-1.bca62b4b.png"},365:function(s,a,e){s.exports=e.p+"assets/img/webpack5-2.7e10ecbd.png"},378:function(s,a,e){"use strict";e.r(a);var t=e(19),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"webpack图片资源处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack图片资源处理"}},[s._v("#")]),s._v(" webpack图片资源处理")]),s._v(" "),t("h3",{attrs:{id:"现象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#现象"}},[s._v("#")]),s._v(" 现象")]),s._v(" "),t("p",[s._v("使用webpack5,编译打包css文件，在文件中引入背景图片，图片加载不出来")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("//css代码\nbody")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token url"}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("url")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("../img/test.png"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//webpack.config.js")]),s._v("\nmodule"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    rules"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        test"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.(jpg|png|git)$")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        use"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          loader"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'url-loader'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("查看浏览器,样式属性中引入了图片地址，但是图片无法预览（图片是一个base64字符串）")]),s._v(" "),t("p",[t("img",{attrs:{src:e(364),alt:"webpack5图片处理1"}})]),s._v(" "),t("p",[t("img",{attrs:{src:e(365),alt:"webpack5图片处理2"}})]),s._v(" "),t("h3",{attrs:{id:"原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原因"}},[s._v("#")]),s._v(" 原因")]),s._v(" "),t("p",[s._v("查看webpack文档，发现资源模块（字体，图标等）无需配置二外loader，详情请查看"),t("a",{attrs:{href:"https://webpack.docschina.org/guides/asset-modules/",target:"_blank",rel:"noopener noreferrer"}},[s._v("webpage资源模块"),t("OutboundLink")],1),s._v("；")]),s._v(" "),t("p",[s._v("在 webpack 5 之前，通常使用：")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://v4.webpack.js.org/loaders/raw-loader/",target:"_blank",rel:"noopener noreferrer"}},[t("code",[s._v("raw-loader")]),t("OutboundLink")],1),s._v(" 将文件导入为字符串")]),s._v(" "),t("li",[t("a",{attrs:{href:"https://v4.webpack.js.org/loaders/url-loader/",target:"_blank",rel:"noopener noreferrer"}},[t("code",[s._v("url-loader")]),t("OutboundLink")],1),s._v(" 将文件作为 data URI 内联到 bundle 中")]),s._v(" "),t("li",[t("a",{attrs:{href:"https://v4.webpack.js.org/loaders/file-loader/",target:"_blank",rel:"noopener noreferrer"}},[t("code",[s._v("file-loader")]),t("OutboundLink")],1),s._v(" 将文件发送到输出目录")])]),s._v(" "),t("p",[s._v("资源模块类型(asset module type)，通过添加 4 种新的模块类型，来替换所有这些 loader：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("asset/resource")]),s._v(" 发送一个单独的文件并导出 URL。之前通过使用 "),t("code",[s._v("file-loader")]),s._v(" 实现。")]),s._v(" "),t("li",[t("code",[s._v("asset/inline")]),s._v(" 导出一个资源的 data URI。之前通过使用 "),t("code",[s._v("url-loader")]),s._v(" 实现。")]),s._v(" "),t("li",[t("code",[s._v("asset/source")]),s._v(" 导出资源的源代码。之前通过使用 "),t("code",[s._v("raw-loader")]),s._v(" 实现。")]),s._v(" "),t("li",[t("code",[s._v("asset")]),s._v(" 在导出一个 data URI 和发送一个单独的文件之间自动选择。之前通过使用 "),t("code",[s._v("url-loader")]),s._v("，并且配置资源体积限制实现。")])]),s._v(" "),t("p",[s._v("当在 webpack 5 中使用旧的 assets loader（如 "),t("code",[s._v("file-loader")]),s._v("/"),t("code",[s._v("url-loader")]),s._v("/"),t("code",[s._v("raw-loader")]),s._v(" 等）和 asset 模块时，你可能想停止当前 asset 模块的处理，并再次启动处理，这可能会导致 asset 重复，你可以通过将 asset 模块的类型设置为 "),t("code",[s._v("'javascript/auto'")]),s._v(" 来解决。")]),s._v(" "),t("h3",{attrs:{id:"解决"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决"}},[s._v("#")]),s._v(" 解决")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("//webpack.config.js\nmodule:{\n    rules: [\n     {\n        test:/\\.(jpg|png|git)$/,\n        type: 'asset/inline',  //通过webpack自带的模块类型，解决问题\n      }\n    ]\n},\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);