/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/module/technology/controller.js":
/*!*********************************************!*\
  !*** ./src/module/technology/controller.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-elements */ \"./src/module/technology/dom-elements.js\");\n\n_dom_elements__WEBPACK_IMPORTED_MODULE_0__.numberList.forEach(numb => {\n  numb.addEventListener(\"click\", e => {\n    const targetNumber = e.target;\n    _dom_elements__WEBPACK_IMPORTED_MODULE_0__.techInfo.forEach(info => {\n      info.classList.remove(\"current\");\n      if (targetNumber.dataset.id === info.dataset.id) {\n        info.classList.add(\"current\");\n        let show = document.getElementsByClassName(\"activeBtn\");\n        if (show.length > 0) {\n          show[0].className = show[0].className.replace(\"activeBtn\", \"\");\n        }\n        targetNumber.className += \" activeBtn\";\n      }\n    });\n  });\n});\n\n//# sourceURL=webpack://space-tourism/./src/module/technology/controller.js?");

/***/ }),

/***/ "./src/module/technology/dom-elements.js":
/*!***********************************************!*\
  !*** ./src/module/technology/dom-elements.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   numberList: () => (/* binding */ numberList),\n/* harmony export */   techInfo: () => (/* binding */ techInfo)\n/* harmony export */ });\nconst numberList = document.querySelectorAll(\".numbs-list\");\nconst techInfo = document.querySelectorAll(\".tech-info-container\");\n\n// export const techImage = document.querySelectorAll(\".tech-image\");\n\n//# sourceURL=webpack://space-tourism/./src/module/technology/dom-elements.js?");

/***/ }),

/***/ "./src/technology.js":
/*!***************************!*\
  !*** ./src/technology.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.scss */ \"./src/sass/style.scss\");\n/* harmony import */ var _module_technology_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/technology/controller */ \"./src/module/technology/controller.js\");\n\n\n\n//# sourceURL=webpack://space-tourism/./src/technology.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../dist/assets/home/background-home-desktop.jpg */ \"./dist/assets/home/background-home-desktop.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../dist/assets/destination/background-destination-desktop.jpg */ \"./dist/assets/destination/background-destination-desktop.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../dist/assets/crew/background-crew-desktop.jpg */ \"./dist/assets/crew/background-crew-desktop.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../dist/assets/technology/background-technology-desktop.jpg */ \"./dist/assets/technology/background-technology-desktop.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --color-primary: rgb(11, 13, 23);\\n  --color-purple-light: rgb(208, 214, 249);\\n  --color-white: rgb(255, 255, 255);\\n  --color-nav-list: rgba(255, 255, 255, 0.04);\\n  --c-white: 255, 255, 255;\\n  /* font-families */\\n  --ff-bellefair: \\\"Bellefair\\\", serif;\\n  --ff-BarlowCond: \\\"Barlow Condensed\\\", sans-serif;\\n  --ff-BarlowNormal: \\\"Barlow\\\", sans-serif;\\n}\\n\\n/*\\n0 - 600px: Phone\\n600 - 900px: Tablet portait\\n900 - 1200px: Tablet Landscape\\n[1200 - 1800px] is where out normal styles apply\\n1800px +: Big desktop\\n\\n*/\\n*,\\n*::after,\\n*::before {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: inherit;\\n}\\n\\nhtml,\\nbody {\\n  overflow-x: hidden;\\n}\\n\\nhtml {\\n  font-size: 62.5%;\\n}\\n@media only screen and (max-width: 75em) {\\n  html {\\n    font-size: 56.25%;\\n  }\\n}\\n@media only screen and (max-width: 56.25em) {\\n  html {\\n    font-size: 50%;\\n  }\\n}\\n\\nbody {\\n  box-sizing: border-box;\\n  min-height: 100vh;\\n  font-family: var(--ff-BarlowNormal);\\n}\\n\\nli {\\n  list-style: none;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\nimg,\\npicture {\\n  max-width: 100%;\\n  display: block;\\n}\\n\\n.heading__1 {\\n  font-family: var(--ff-bellefair);\\n  font-size: 15rem;\\n  line-height: 17.2rem;\\n  font-weight: 400;\\n  text-transform: uppercase;\\n  color: var(--color-white);\\n}\\n\\n.heading__2 {\\n  font-family: bellefair;\\n  font-size: 10rem;\\n  line-height: 11.5rem;\\n  font-weight: 400;\\n  text-transform: uppercase;\\n}\\n\\n.heading__3 {\\n  font-family: bellefair;\\n  font-weight: 400;\\n  font-size: 5.6rem;\\n  line-height: 6.4rem;\\n  text-transform: uppercase;\\n}\\n\\n.heading__4 {\\n  font-family: bellefair;\\n  font-weight: 400;\\n  font-size: 3.2rem;\\n  line-height: 3.7rem;\\n  letter-spacing: 0.2rem;\\n  text-transform: uppercase;\\n}\\n\\n.heading__5 {\\n  font-family: var(--ff-BarlowCond);\\n  font-weight: 400;\\n  font-size: 2.8rem;\\n  letter-spacing: 0.4725rem;\\n  line-height: 3.4rem;\\n  text-transform: uppercase;\\n}\\n\\n.subheading__1 {\\n  font-family: bellefair;\\n  font-size: 2.8rem;\\n  line-height: 3.2rem;\\n  text-transform: uppercase;\\n}\\n\\n.subheading__2 {\\n  font-family: var(--ff-BarlowCond);\\n  font-weight: 400;\\n  font-size: 1.4rem;\\n  letter-spacing: 0.235rem;\\n  line-height: 1.7rem;\\n  text-transform: uppercase;\\n}\\n\\n.nav__link, .nav__link:link, .nav__link:visited, .nav__link:active,\\n.navText,\\n.navText:link,\\n.navText:visited,\\n.navText:active {\\n  font-family: var(--ff-BarlowCond);\\n  font-size: 1.6rem;\\n  letter-spacing: 0.27rem;\\n  line-height: 1.9rem;\\n  text-transform: uppercase;\\n  font-weight: 400;\\n}\\n\\nbody {\\n  font-family: BarlowC;\\n  font-size: 1.8rem;\\n  line-height: 3.2rem;\\n  color: var(--color-white);\\n}\\n\\n.home-main {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  gap: 39.5rem;\\n  padding: 25rem 16rem 10rem 16.5rem;\\n}\\n.home-main__info {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 2.4rem;\\n}\\n.home-main__title, .home-main__subtitle {\\n  color: var(--color-purple-light);\\n}\\n.home-main__text {\\n  width: 44.4rem;\\n  font-weight: 400;\\n  font-size: 1.8rem;\\n  line-height: 3.2rem;\\n  color: var(--color-purple-light);\\n  font-family: var(--ff-BarlowNormal);\\n}\\n\\n.explore {\\n  align-self: flex-end;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  width: 27.4rem;\\n  height: 27.4rem;\\n  background-color: var(--color-white);\\n  border-radius: 50%;\\n  aspect-ratio: 1;\\n  position: relative;\\n}\\n.explore__content {\\n  color: var(--color-primary);\\n  text-decoration: none;\\n}\\n.explore::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  z-index: -1;\\n  width: 100%;\\n  height: 100%;\\n  border-radius: 50%;\\n  background: rgba(var(--c-white), 0.1);\\n  opacity: 0;\\n  transition: opacity 500ms linear, transform 500ms ease-in-out;\\n}\\n.explore:hover::after, .explore:focus::after {\\n  transform: scale(1.4);\\n  opacity: 1;\\n}\\n\\n.header {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  padding: 4rem 0rem 0rem 5.5rem;\\n}\\n.header__line {\\n  width: 47.3rem;\\n  height: 0.1rem;\\n  background-color: var(--color-white);\\n  opacity: 0.25;\\n  transform: translateX(4.7rem);\\n  z-index: 1;\\n}\\n.header__logo {\\n  display: block;\\n  aspect-ratio: 1;\\n}\\n\\n.nav {\\n  width: 83rem;\\n  height: 9.6rem;\\n}\\n@supports (backdrop-filter: blur(4.7742rem)) {\\n  .nav {\\n    background: var(--color-nav-list);\\n    backdrop-filter: blur(4.7742rem);\\n  }\\n}\\n.nav__list {\\n  display: flex;\\n  gap: 5rem;\\n  align-items: center;\\n  justify-content: center;\\n  height: 100%;\\n  z-index: 0;\\n  padding: 3.9rem 14rem 0rem 10.5rem;\\n}\\n.nav__item {\\n  list-style: none;\\n  display: flex;\\n  height: 100%;\\n  cursor: pointer;\\n  color: var(--color-white);\\n  transition: all 0.2s;\\n}\\n.nav__item.active {\\n  border-bottom: 3px solid var(--color-white);\\n}\\n.nav__item span {\\n  margin-right: 0.5rem;\\n  font-family: var(--ff-BarlowCond);\\n  font-weight: 700;\\n}\\n.nav__item:hover {\\n  border-bottom: 3px solid rgba(var(--c-white), 0.5);\\n}\\n.nav__link, .nav__link:link, .nav__link:active, .nav__link:visited {\\n  color: var(--color-white);\\n  width: max-content;\\n}\\n\\n.destination-main {\\n  display: flex;\\n  flex-direction: column;\\n  padding: 11.6rem 0rem 11.2rem 4rem;\\n}\\n.destination-main__heading span {\\n  margin-right: 1.4rem;\\n}\\n\\n.destination-content {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n\\n.tab-container {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 4rem;\\n  margin-top: 4.7rem;\\n}\\n\\n.tab {\\n  justify-content: right;\\n  margin-right: 32.25rem;\\n}\\n.tab__list {\\n  display: flex;\\n  gap: 3rem;\\n  align-items: stretch;\\n  justify-content: space-between;\\n  height: 3.4rem;\\n  width: 28.55rem;\\n}\\n.tab__link, .tab__link:link, .tab__link:visited {\\n  color: var(--color-purple-light);\\n  line-height: 1.92rem;\\n  display: block;\\n  height: 100%;\\n}\\n.tab__link.selected, .tab__link:link.selected, .tab__link:visited.selected {\\n  color: var(--color-white);\\n  border-bottom: 3px solid var(--color-white);\\n}\\n.tab__link:hover, .tab__link:link:hover, .tab__link:visited:hover {\\n  border-bottom: 3px solid rgba(var(--c-white), 0.5);\\n}\\n.tab-panel {\\n  width: 44.5rem;\\n  display: none;\\n}\\n.tab-panel.current {\\n  display: flex;\\n  gap: 1.9rem;\\n  flex-direction: column;\\n}\\n.tab-panel__title {\\n  color: var(--color-white);\\n  text-transform: uppercase;\\n}\\n.tab-panel__line {\\n  margin-top: 3rem;\\n  height: 0.1rem;\\n  background-color: #383b4b;\\n}\\n.tab-panel__info {\\n  display: flex;\\n  gap: 7.9rem;\\n  align-items: center;\\n  margin-top: 1rem;\\n}\\n\\n.avg-distance {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 1.2rem;\\n}\\n.avg-distance__text {\\n  color: var(--color-purple-light);\\n}\\n\\n.est-time {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 1.2rem;\\n}\\n.est-time__text {\\n  color: var(--color-purple-light);\\n}\\n\\n.image-container {\\n  padding-left: 19rem;\\n  padding-top: 9rem;\\n}\\n\\n.space-image {\\n  display: none;\\n}\\n.space-image.current {\\n  display: block;\\n}\\n\\n.crew-main {\\n  position: relative;\\n  padding: 7.6rem 8.943rem 0rem 16.55rem;\\n}\\n.crew-main__heading span {\\n  margin-right: 0.9rem;\\n  opacity: 0.25;\\n  font-family: var(--ff-BarlowCond);\\n  font-weight: 700;\\n}\\n\\n.crew-info {\\n  display: none;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n.crew-info.current {\\n  display: flex;\\n}\\n.crew-info__content {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 1.5rem;\\n  margin-top: -12rem;\\n}\\n.crew-info__title {\\n  letter-spacing: 0rem;\\n  opacity: 0.5;\\n}\\n.crew-info__name {\\n  width: max-content;\\n}\\n.crew-info__about {\\n  margin-top: 1.2rem;\\n}\\n\\n.crew-image {\\n  width: 60rem;\\n  height: 60rem;\\n}\\n\\n.circle-container {\\n  position: absolute;\\n  left: 16.7rem;\\n  bottom: 9.4rem;\\n  display: flex;\\n  align-items: center;\\n  gap: 2.4rem;\\n}\\n.circle-container__dot {\\n  cursor: pointer;\\n  width: 1.5rem;\\n  height: 1.5rem;\\n  background-color: var(--color-white);\\n  opacity: 0.17;\\n  border-radius: 50%;\\n  display: inline-block;\\n  transition: all 0.5s ease;\\n}\\n.circle-container__dot.show {\\n  opacity: 1;\\n}\\n.circle-container__dot:hover {\\n  background-color: var(--color-white);\\n  opacity: 0.5;\\n}\\n\\n.fade {\\n  animation-name: fade;\\n  animation-duration: 1.5s;\\n}\\n\\n@keyframes fade {\\n  from {\\n    opacity: 0.4;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n}\\n.technology-main {\\n  padding: 13.6rem 0rem 10.1rem 16.5rem;\\n}\\n.technology-main__heading span {\\n  margin-right: 0.9rem;\\n}\\n\\n.tech-container {\\n  display: flex;\\n  gap: 8rem;\\n  align-items: center;\\n}\\n\\n.numbs-list {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 3.2rem;\\n  align-items: center;\\n  justify-content: center;\\n}\\n.numbs-list__item {\\n  width: 8rem;\\n  height: 8rem;\\n  border-radius: 50%;\\n  color: var(--color-white);\\n  border: 1px solid rgba(var(--c-white), 0.25);\\n  text-align: center;\\n  padding: 2.2rem;\\n  cursor: pointer;\\n}\\n.numbs-list__item.activeBtn {\\n  background-color: var(--color-white);\\n  color: var(--color-primary);\\n  border: none;\\n}\\n.numbs-list__item:hover {\\n  border: 1px solid rgba(var(--c-white), 1);\\n}\\n\\n.tech-info-container {\\n  display: none;\\n  align-items: center;\\n  justify-content: space-between;\\n  gap: 13.5rem;\\n}\\n.tech-info-container.current {\\n  display: flex;\\n}\\n\\n.tech-info__title {\\n  color: var(--color-purple-light);\\n  margin-bottom: 1.1rem;\\n}\\n.tech-info__name {\\n  width: max-content;\\n}\\n.tech-info__about {\\n  margin-top: 1.7rem;\\n}\\n\\n.tech-image {\\n  display: block;\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n.home {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n}\\n\\n.destination-home {\\n  background-image: linear-gradient(to right, rgba(242, 242, 242, 0.09), rgba(242, 242, 242, 0.09)), url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n}\\n\\n.crew-home {\\n  background-image: linear-gradient(to right, rgba(11, 13, 23, 0.5), rgba(11, 13, 23, 0.5)), url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n}\\n\\n.technology-home {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n}\\n\\n.sr-only {\\n  position: absolute;\\n  width: 0.1rem;\\n  height: 0.1rem;\\n  padding: 0;\\n  margin: -1px;\\n  overflow: hidden;\\n  clip: rect(0, 0, 0, 0);\\n  white-space: nowrap;\\n  border: 0;\\n}\\n\\n.page-heading {\\n  width: max-content;\\n  text-transform: uppercase;\\n  color: var(--color-white);\\n  position: absolute;\\n  left: 16.65rem;\\n  top: 21.2rem;\\n}\\n.page-heading span {\\n  opacity: 0.25;\\n  font-family: var(--ff-BarlowCond);\\n  font-weight: 700;\\n}\\n\\n.about {\\n  font-family: var(--ff-BarlowNormal);\\n  color: var(--color-purple-light);\\n  font-weight: 400;\\n  font-size: 1.8rem;\\n  line-height: 3.2rem;\\n  width: 44.4rem;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://space-tourism/./src/sass/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://space-tourism/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://space-tourism/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://space-tourism/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://space-tourism/./src/sass/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://space-tourism/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://space-tourism/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://space-tourism/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://space-tourism/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://space-tourism/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://space-tourism/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./dist/assets/crew/background-crew-desktop.jpg":
/*!******************************************************!*\
  !*** ./dist/assets/crew/background-crew-desktop.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"88a3c692fd34eb311e04.jpg\";\n\n//# sourceURL=webpack://space-tourism/./dist/assets/crew/background-crew-desktop.jpg?");

/***/ }),

/***/ "./dist/assets/destination/background-destination-desktop.jpg":
/*!********************************************************************!*\
  !*** ./dist/assets/destination/background-destination-desktop.jpg ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"468b922c69bf5499b4bc.jpg\";\n\n//# sourceURL=webpack://space-tourism/./dist/assets/destination/background-destination-desktop.jpg?");

/***/ }),

/***/ "./dist/assets/home/background-home-desktop.jpg":
/*!******************************************************!*\
  !*** ./dist/assets/home/background-home-desktop.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cdf3864ecbfdf20e8c3b.jpg\";\n\n//# sourceURL=webpack://space-tourism/./dist/assets/home/background-home-desktop.jpg?");

/***/ }),

/***/ "./dist/assets/technology/background-technology-desktop.jpg":
/*!******************************************************************!*\
  !*** ./dist/assets/technology/background-technology-desktop.jpg ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b7b589b3c0c5ef0811d4.jpg\";\n\n//# sourceURL=webpack://space-tourism/./dist/assets/technology/background-technology-desktop.jpg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"technology": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/technology.js");
/******/ 	
/******/ })()
;