/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/bootstrap.scss":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/bootstrap.scss ***!
  \**************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --bs-blue: #0d6efd;\\n  --bs-indigo: #6610f2;\\n  --bs-purple: #6f42c1;\\n  --bs-pink: #d63384;\\n  --bs-red: #dc3545;\\n  --bs-orange: #fd7e14;\\n  --bs-yellow: #ffc107;\\n  --bs-green: #198754;\\n  --bs-teal: #20c997;\\n  --bs-cyan: #0dcaf0;\\n  --bs-white: #fff;\\n  --bs-gray: #6c757d;\\n  --bs-gray-dark: #343a40;\\n  --bs-primary: #0d6efd;\\n  --bs-secondary: #6c757d;\\n  --bs-success: #198754;\\n  --bs-info: #0dcaf0;\\n  --bs-warning: #ffc107;\\n  --bs-danger: #dc3545;\\n  --bs-light: #f8f9fa;\\n  --bs-dark: #212529;\\n  --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));\\n}\\n\\n*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  margin: 0;\\n  color: #212529;\\n  background-color: #fff;\\n}\\n\\nh1 {\\n  margin-top: 0;\\n  margin-bottom: 0.5rem;\\n  font-weight: 500;\\n  line-height: 1.2;\\n}\\n\\nh1 {\\n  font-size: 2.5rem;\\n}\\n\\np {\\n  margin-top: 0;\\n  margin-bottom: 1rem;\\n}\\n\\na {\\n  color: #0d6efd;\\n  text-decoration: underline;\\n}\\na:hover {\\n  color: #0a58ca;\\n}\\n\\na:not([href]):not([class]), a:not([href]):not([class]):hover {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n[hidden] {\\n  display: none !important;\\n}\\n\\n.img-fluid {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.collapse:not(.show) {\\n  display: none;\\n}\\n\\n.collapsing {\\n  height: 0;\\n  overflow: hidden;\\n  transition: height 0.35s ease;\\n}\\n.collapsing.collapse-horizontal {\\n  width: 0;\\n  height: auto;\\n  transition: width 0.35s ease;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://trainee-bootstrap/./src/scss/bootstrap.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://trainee-bootstrap/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/scss/bootstrap.scss":
/*!*********************************!*\
  !*** ./src/scss/bootstrap.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/getTarget.js */ \"./node_modules/style-loader/dist/runtime/getTarget.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_bootstrap_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./bootstrap.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/bootstrap.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = function(css, style){\n      if (style.styleSheet) {\n        style.styleSheet.cssText = css;\n      } else {\n      while (style.firstChild) {\n        style.removeChild(style.firstChild);\n      }\n\n      style.appendChild(document.createTextNode(css));\n    }\n  };\noptions.setAttributes = function(style) {\n        var nonce =\n           true ? __webpack_require__.nc : 0;\n\n        if (nonce) {\n          style.setAttribute(\"nonce\", nonce);\n        }\n      };\noptions.insert = function(style){\n    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()(\"head\");\n\n    if (!target) {\n      throw new Error(\n        \"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\"\n      );\n    }\n\n    target.appendChild(style);\n  };\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_bootstrap_scss__WEBPACK_IMPORTED_MODULE_4__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_bootstrap_scss__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_bootstrap_scss__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_bootstrap_scss__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);\n\n\n//# sourceURL=webpack://trainee-bootstrap/./src/scss/bootstrap.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n\nmodule.exports = getTarget;\n\n//# sourceURL=webpack://trainee-bootstrap/./node_modules/style-loader/dist/runtime/getTarget.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://trainee-bootstrap/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://trainee-bootstrap/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://trainee-bootstrap/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./src/js/base-components.js":
/*!***********************************!*\
  !*** ./src/js/base-components.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BaseComponent)\n/* harmony export */ });\n/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/index */ \"./src/js/util/index.js\");\n\n\n\nclass BaseComponent {\n  constructor(element) {\n    element = (0,_util_index__WEBPACK_IMPORTED_MODULE_0__.getElement)(element)\n    if(!element) {\n      return\n    }\n    this._element = element\n  }\n  _queueCallback(callback, element) {\n    (0,_util_index__WEBPACK_IMPORTED_MODULE_0__.executeAfterTransition)(callback, element)\n  }\n}\n\n//# sourceURL=webpack://trainee-bootstrap/./src/js/base-components.js?");

/***/ }),

/***/ "./src/js/collapse.js":
/*!****************************!*\
  !*** ./src/js/collapse.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Collapse)\n/* harmony export */ });\n/* harmony import */ var _base_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-components */ \"./src/js/base-components.js\");\n/* harmony import */ var _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/event-handler */ \"./src/js/dom/event-handler.js\");\n\n\n\n// ??????\nconst CLASS_NAME_SHOW = 'show'\nconst CLASS_NAME_COLLAPSE = 'collapse'\nconst CLASS_NAME_COLLAPSING = 'collapsing'\nconst CLASS_NAME_COLLAPSED = 'collapsed'\nconst CLASS_NAME_HORIZONTAL = 'collapse-horizontal'\n\nconst EVENT_KEY = '.bs.collapse'\nconst EVENT_SHOW = `show${EVENT_KEY}`\nconst EVENT_SHOWN = `shown${EVENT_KEY}`\nconst EVENT_HIDE = `hide${EVENT_KEY}`\nconst EVENT_HIDDEN = `hidden${EVENT_KEY}`\n\nconst Default = {\n  toggle: true,\n  parent: '',\n}\n\nclass Collapse extends _base_components__WEBPACK_IMPORTED_MODULE_0__.default {\n  constructor(element) {\n    super(element)\n\n    this._isTransitioning = false\n    this._config = Default\n    if (this._config.toggle) {\n      this.toggle()\n    }\n  }\n\n  toggle() {\n    if (this._element.classList.contains(CLASS_NAME_SHOW)) {\n      this.hide()\n    } else {\n      this.show()\n    }\n  }\n\n  show() {\n    if (\n      this._isTransitioning ||\n      this._element.classList.contains(CLASS_NAME_SHOW)\n    ) {\n      return\n    }\n\n    const startEvent = _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__.default.trigger(this._element, EVENT_SHOW)\n\n    this._element.classList.remove(CLASS_NAME_COLLAPSE)\n    this._element.classList.add(CLASS_NAME_COLLAPSING)\n\n    this._element.style['height'] = 0\n\n    this.setTransitioning(true)\n    this._element.style['height'] = `${this._element['scrollHeight']}px`\n\n    const complete = () => {\n      this._element.classList.remove(CLASS_NAME_COLLAPSING)\n      this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW)\n      this._element.style['height'] = ''\n\n      this.setTransitioning(false)\n      _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__.default.trigger(this._element, EVENT_SHOWN)\n    }\n    this._queueCallback(complete, this._element)\n  }\n\n  hide() {\n    if (\n      this._isTransitioning ||\n      !this._element.classList.contains(CLASS_NAME_SHOW)\n    ) {\n      return\n    }\n\n    _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__.default.trigger(this._element, EVENT_HIDE)\n\n    this._element.style['height'] = `${\n      this._element.getBoundingClientRect()['height']\n    }px`\n\n    this._element.classList.add(CLASS_NAME_COLLAPSING)\n    this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW)\n\n    void this._element.offsetHeight //reflow ???????????????????????????\n\n    this.setTransitioning(true)\n\n    this._element.style['height'] = ''\n\n    const complete = () => {\n      this.setTransitioning(false)\n      this._element.classList.remove(CLASS_NAME_COLLAPSING)\n      this._element.classList.add(CLASS_NAME_COLLAPSE)\n      _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__.default.trigger(this._element, EVENT_HIDDEN)\n    }\n    this._queueCallback(complete, this._element)\n  }\n\n  setTransitioning(isTransitioning) {\n    this._isTransitioning = isTransitioning\n  }\n}\n\n\n//# sourceURL=webpack://trainee-bootstrap/./src/js/collapse.js?");

/***/ }),

/***/ "./src/js/dom/event-handler.js":
/*!*************************************!*\
  !*** ./src/js/dom/event-handler.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst EventHandler = {\n  on(element, event, handler) {\n    element.addEventListener(event, handler)\n  },\n  one() {},\n  off() {},\n  trigger(element, event) {\n    let evt = null\n    let bubbles = true\n    evt = new CustomEvent(event, {\n      bubbles,\n      cancelable: true,\n    })\n    element.dispatchEvent(evt)\n    return evt\n  },\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventHandler);\n\n//# sourceURL=webpack://trainee-bootstrap/./src/js/dom/event-handler.js?");

/***/ }),

/***/ "./src/js/dom/selector-engine.js":
/*!***************************************!*\
  !*** ./src/js/dom/selector-engine.js ***!
  \***************************************/
/***/ (() => {

eval("const SelectorEngine = {\n  findOne(selector, element = document.documentElement) {\n    return Element.prototype.querySelector.call(element, selector)\n  }\n}\n\n//# sourceURL=webpack://trainee-bootstrap/./src/js/dom/selector-engine.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/bootstrap.scss */ \"./src/scss/bootstrap.scss\");\n/* harmony import */ var _collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collapse */ \"./src/js/collapse.js\");\n\n \n\nwindow.bootstrap = {\n  Collapse: _collapse__WEBPACK_IMPORTED_MODULE_1__.default\n}\n\n//# sourceURL=webpack://trainee-bootstrap/./src/js/index.js?");

/***/ }),

/***/ "./src/js/util/index.js":
/*!******************************!*\
  !*** ./src/js/util/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getElement\": () => (/* binding */ getElement),\n/* harmony export */   \"executeAfterTransition\": () => (/* binding */ executeAfterTransition)\n/* harmony export */ });\n/* harmony import */ var _dom_selector_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/selector-engine */ \"./src/js/dom/selector-engine.js\");\n/* harmony import */ var _dom_selector_engine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dom_selector_engine__WEBPACK_IMPORTED_MODULE_0__);\n\nconst isElement = (obj) => {\n  if (!obj || typeof obj !== 'object') {\n    return false\n  }\n\n  return typeof obj.nodeType !== 'undefined'\n}\n\nconst getElement = (obj) => {\n  if (isElement(obj)) {\n    return obj\n  }\n\n  if (typeof obj === 'string' && obj.length > 0) {\n    return _dom_selector_engine__WEBPACK_IMPORTED_MODULE_0___default().findOne(obj)\n  }\n\n  return null\n}\n\nconst execute = (callback) => {\n  if (typeof callback === 'function') {\n    callback()\n  }\n}\n\nconst getTransitionDurationFromElement = (element) => {\n  let { transitionDuration, transitionDelay } = window.getComputedStyle(element)\n  return (\n    (Number.parseFloat(transitionDuration) +\n      Number.parseFloat(transitionDelay)) *\n    1000\n  )\n}\n\nconst executeAfterTransition = (callback, transitionElement) => {\n  const durationPadding = 5\n  const emulatedDuration =\n    getTransitionDurationFromElement(transitionElement) + durationPadding\n  setTimeout(() => {\n    execute(callback)\n  }, emulatedDuration)\n}\n\n\n//# sourceURL=webpack://trainee-bootstrap/./src/js/util/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;