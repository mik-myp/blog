"use strict";
(() => {
var exports = {};
exports.id = 407;
exports.ids = [407];
exports.modules = {

/***/ 7013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Detailed)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: ./components/Advert.js
var Advert = __webpack_require__(1155);
// EXTERNAL MODULE: ./components/Author.js
var Author = __webpack_require__(6958);
// EXTERNAL MODULE: ./components/Footer.js
var Footer = __webpack_require__(723);
// EXTERNAL MODULE: ./components/Header.js
var Header = __webpack_require__(292);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "marked"
var external_marked_ = __webpack_require__(9880);
var external_marked_default = /*#__PURE__*/__webpack_require__.n(external_marked_);
// EXTERNAL MODULE: external "highlight.js"
var external_highlight_js_ = __webpack_require__(3755);
var external_highlight_js_default = /*#__PURE__*/__webpack_require__.n(external_highlight_js_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "lodash"
const external_lodash_namespaceObject = require("lodash");
;// CONCATENATED MODULE: ./components/tocify.tsx




const { Link  } = external_antd_.Anchor;
class Tocify {
    tocItems = [];
    index = 0;
    constructor(){
        this.tocItems = [];
        this.index = 0;
    }
    add(text, level) {
        const anchor = `toc${level}${++this.index}`;
        const item = {
            anchor,
            level,
            text
        };
        const items = this.tocItems;
        if (items.length === 0) {
            items.push(item);
        } else {
            let lastItem = (0,external_lodash_namespaceObject.last)(items); // 最后一个 item
            if (item.level > lastItem.level) {
                for(let i = lastItem.level + 1; i <= 2; i++){
                    const { children  } = lastItem;
                    if (!children) {
                        lastItem.children = [
                            item
                        ];
                        break;
                    }
                    lastItem = (0,external_lodash_namespaceObject.last)(children); // 重置 lastItem 为 children 的最后一个 item
                    if (item.level <= lastItem.level) {
                        children.push(item);
                        break;
                    }
                }
            } else {
                items.push(item);
            }
        }
        return anchor;
    }
    reset = ()=>{
        this.tocItems = [];
        this.index = 0;
    };
    renderToc(items) {
        return items.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(Link, {
                href: `#${item.anchor}`,
                title: item.text,
                children: item.children && this.renderToc(item.children)
            }, item.anchor)
        );
    }
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Anchor, {
            affix: true,
            showInkInFixed: true,
            children: this.renderToc(this.tocItems)
        });
    }
};

// EXTERNAL MODULE: ./config/apiUrl.js
var apiUrl = __webpack_require__(3970);
;// CONCATENATED MODULE: ./pages/detailed.js













function Detailed(props) {
    // console.log(props);
    const tocify = new Tocify();
    const renderer = new (external_marked_default()).Renderer();
    renderer.heading = function(text, level, raw) {
        const anchor = tocify.add(text, level);
        return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
    };
    external_marked_default().setOptions({
        renderer: renderer,
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        smartypants: false,
        highlight: function(code) {
            return external_highlight_js_default().highlightAuto(code).value;
        }
    });
    let html = external_marked_default()(props.article_content);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Row, {
                className: "comm-main",
                type: "flex",
                justify: "center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Col, {
                        className: "comm-left",
                        xs: 24,
                        sm: 24,
                        md: 16,
                        lg: 18,
                        xl: 14,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "bread-div",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Breadcrumb, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Breadcrumb.Item, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "/",
                                                    children: "首页"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Breadcrumb.Item, {
                                                children: "视频列表"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Breadcrumb.Item, {
                                                children: props.title
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "detailed-title",
                                            children: props.title
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "list-icon center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: props.addTime
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: props.typeName
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    children: [
                                                        props.view_count,
                                                        "人"
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "detailed-content",
                                            dangerouslySetInnerHTML: {
                                                __html: html
                                            }
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Col, {
                        className: "comm-right",
                        xs: 0,
                        sm: 0,
                        md: 7,
                        lg: 5,
                        xl: 4,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Author/* default */.Z, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(Advert/* default */.Z, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Affix, {
                                offsetTop: 5,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "detailed-nav comm-box",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "nav-title",
                                            children: "文章目录"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "toc-list",
                                            children: tocify && tocify.render()
                                        }),
                                        " "
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
        ]
    });
};
Detailed.getInitialProps = async (context)=>{
    // console.log(context.query.id);
    let id = context.query.id;
    const promise = new Promise((resolve)=>{
        external_axios_default()(apiUrl/* default.getArticleById */.Z.getArticleById + id).then((res)=>{
            // console.log(res.data.data[0]);
            resolve(res.data.data[0]);
        });
    });
    return await promise;
};


/***/ }),

/***/ 5725:
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3755:
/***/ ((module) => {

module.exports = require("highlight.js");

/***/ }),

/***/ 9880:
/***/ ((module) => {

module.exports = require("marked");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 4241:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/routing-items.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,664,819], () => (__webpack_exec__(7013)));
module.exports = __webpack_exports__;

})();