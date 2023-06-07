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

/***/ "./src/crew.js":
/*!*********************!*\
  !*** ./src/crew.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.scss */ \"./src/sass/style.scss\");\n/* harmony import */ var _module_crew_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/crew/controller */ \"./src/module/crew/controller.js\");\n/* harmony import */ var _module_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/shared */ \"./src/module/shared.js\");\n\n\n\n\n//# sourceURL=webpack://space-tourism/./src/crew.js?");

/***/ }),

/***/ "./src/module/crew/controller.js":
/*!***************************************!*\
  !*** ./src/module/crew/controller.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-elements */ \"./src/module/crew/dom-elements.js\");\n\nlet slideIndex = 0;\nlet slides = _dom_elements__WEBPACK_IMPORTED_MODULE_0__.slidePanel;\n_dom_elements__WEBPACK_IMPORTED_MODULE_0__.dots.forEach(dot => {\n  dot.addEventListener(\"click\", e => {\n    const tagetDot = e.target;\n    slideIndex = tagetDot.dataset.id;\n    slides.forEach(slide => {\n      slide.style.display = \"none\";\n      if (slide.dataset.id === tagetDot.dataset.id) {\n        let show = document.getElementsByClassName(\"show\");\n        if (show.length > 0) {\n          show[0].className = show[0].className.replace(\"show\", \"\");\n        }\n        tagetDot.className += \" show\";\n        slide.style.display = \"flex\";\n      }\n    });\n  });\n});\nshowSlides();\nfunction showSlides() {\n  for (let i = 0; i < slides.length; i++) {\n    slides[i].style.display = \"none\";\n  }\n  slideIndex++;\n  if (slideIndex > slides.length) {\n    slideIndex = 1;\n  }\n  slides[slideIndex - 1].style.display = \"flex\";\n  _dom_elements__WEBPACK_IMPORTED_MODULE_0__.dots.forEach(dot => {\n    dot.classList.remove(\"show\");\n    if (slides[slideIndex - 1].dataset.id === dot.dataset.id) {\n      dot.classList.add(\"show\");\n    }\n  });\n  setTimeout(showSlides, 4000);\n}\n\n//# sourceURL=webpack://space-tourism/./src/module/crew/controller.js?");

/***/ }),

/***/ "./src/module/crew/dom-elements.js":
/*!*****************************************!*\
  !*** ./src/module/crew/dom-elements.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dots: () => (/* binding */ dots),\n/* harmony export */   slideImage: () => (/* binding */ slideImage),\n/* harmony export */   slideInfo: () => (/* binding */ slideInfo),\n/* harmony export */   slidePanel: () => (/* binding */ slidePanel)\n/* harmony export */ });\nconst slidePanel = document.querySelectorAll(\".crew-info\");\nconst dots = document.querySelectorAll(\".circle-container__dot\");\nconst slideInfo = document.querySelectorAll(\".crew-info\");\nconst slideImage = document.querySelectorAll(\".crew-image\");\n\n//# sourceURL=webpack://space-tourism/./src/module/crew/dom-elements.js?");

/***/ }),

/***/ "./src/module/dom-elemets.js":
/*!***********************************!*\
  !*** ./src/module/dom-elemets.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mobileNavToggle: () => (/* binding */ mobileNavToggle),\n/* harmony export */   nav: () => (/* binding */ nav),\n/* harmony export */   navItems: () => (/* binding */ navItems)\n/* harmony export */ });\nconst navItems = document.querySelectorAll(\".nav__item\");\nconst mobileNavToggle = document.querySelector(\".mobile-nav-toggle\");\nconst nav = document.querySelector(\".primary-navigation \");\n\n//# sourceURL=webpack://space-tourism/./src/module/dom-elemets.js?");

/***/ }),

/***/ "./src/module/shared.js":
/*!******************************!*\
  !*** ./src/module/shared.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_elemets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-elemets */ \"./src/module/dom-elemets.js\");\n\n\n// Control the Mobile Navigation\n\n_dom_elemets__WEBPACK_IMPORTED_MODULE_0__.mobileNavToggle.addEventListener(\"click\", e => {\n  _dom_elemets__WEBPACK_IMPORTED_MODULE_0__.nav.classList.toggle(\"show\");\n  if (_dom_elemets__WEBPACK_IMPORTED_MODULE_0__.nav.classList.contains(\"show\")) {\n    _dom_elemets__WEBPACK_IMPORTED_MODULE_0__.nav.style.transform = \"translateX(0)\";\n    _dom_elemets__WEBPACK_IMPORTED_MODULE_0__.mobileNavToggle.style.backgroundImage = \"url('../../dist/assets/shared/icon-close.svg')\";\n  } else {\n    _dom_elemets__WEBPACK_IMPORTED_MODULE_0__.nav.style.transform = \"translateX(100%)\";\n    _dom_elemets__WEBPACK_IMPORTED_MODULE_0__.mobileNavToggle.style.backgroundImage = \"url('../../dist/assets/shared/icon-hamburger.svg')\";\n  }\n});\n\n//# sourceURL=webpack://space-tourism/./src/module/shared.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../dist/assets/shared/icon-hamburger.svg */ \"./dist/assets/shared/icon-hamburger.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../dist/assets/home/background-home-mobile.jpg */ \"./dist/assets/home/background-home-mobile.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../dist/assets/home/background-home-tablet.jpg */ \"./dist/assets/home/background-home-tablet.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../dist/assets/home/background-home-desktop.jpg */ \"./dist/assets/home/background-home-desktop.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../dist/assets/destination/background-destination-desktop.jpg */ \"./dist/assets/destination/background-destination-desktop.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../dist/assets/crew/background-crew-desktop.jpg */ \"./dist/assets/crew/background-crew-desktop.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../dist/assets/technology/background-technology-desktop.jpg */ \"./dist/assets/technology/background-technology-desktop.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*\\n0 - 600px: Phone\\n600 - 900px: Tablet portait\\n900 - 1200px: Tablet Landscape\\n[1200 - 1800px] is where out normal styles apply\\n1800px +: Big desktop\\n\\n*/\\n:root {\\n  /* colors */\\n  --clr-dark: 230 35% 7%;\\n  --clr-light: 231 77% 90%;\\n  --clr-white: 0 0% 100%;\\n  /* font-sizes */\\n  --fs-900: clamp(5rem, 8vw + 1rem, 9.375rem);\\n  --fs-800: 3.5rem;\\n  --fs-700: 1.5rem;\\n  --fs-600: 1rem;\\n  --fs-500: 1.75rem;\\n  --fs-400: 0.9375rem;\\n  --fs-300: 1rem;\\n  --fs-200: 0.875rem;\\n  /* font-families */\\n  --ff-serif: \\\"Bellefair\\\", serif;\\n  --ff-sans-cond: \\\"Barlow Condensed\\\", sans-serif;\\n  --ff-sans-normal: \\\"Barlow\\\", sans-serif;\\n}\\n\\n@media (min-width: 37.5em) {\\n  :root {\\n    --fs-800: 5rem;\\n    --fs-700: 2.5rem;\\n    --fs-600: 1.5rem;\\n    --fs-400: 1rem;\\n  }\\n}\\n@media (min-width: 58em) {\\n  :root {\\n    --fs-800: 6.25rem;\\n    --fs-700: 3.5rem;\\n    --fs-600: 2rem;\\n    --fs-400: 1.125rem;\\n  }\\n}\\n*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n}\\n\\n/* Reset margins */\\nbody,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\np,\\nfigure,\\npicture {\\n  margin: 0;\\n}\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np {\\n  font-weight: 400;\\n}\\n\\nbody {\\n  font-family: var(--ff-sans-normal);\\n  font-size: var(--fs-400);\\n  color: hsl(var(--clr-white));\\n  background-color: hsl(var(--clr-dark));\\n  line-height: 1.5;\\n  min-height: 100vh;\\n  display: grid;\\n  grid-template-rows: min-content 1fr;\\n}\\n\\n/* make images easier to work with */\\nimg,\\npicutre {\\n  max-width: 100%;\\n  display: block;\\n}\\n\\n/* make form elements easier to work with */\\ninput,\\nbutton,\\ntextarea,\\nselect {\\n  font: inherit;\\n}\\n\\n/* remove animations for people who've turned them off */\\n@media (prefers-reduced-motion: reduce) {\\n  *,\\n  *::before,\\n  *::after {\\n    animation-duration: 0.01ms !important;\\n    animation-iteration-count: 1 !important;\\n    transition-duration: 0.01ms !important;\\n    scroll-behavior: auto !important;\\n  }\\n}\\n.ff-serif {\\n  font-family: var(--ff-serif);\\n}\\n\\n.ff-sans-cond {\\n  font-family: var(--ff-sans-cond);\\n}\\n\\n.ff-sans-normal {\\n  font-family: var(--ff-sans-normal);\\n}\\n\\n.letter-spacing-1 {\\n  letter-spacing: 4.75px;\\n}\\n\\n.letter-spacing-2 {\\n  letter-spacing: 2.7px;\\n}\\n\\n.letter-spacing-3 {\\n  letter-spacing: 2.35px;\\n}\\n\\n.uppercase {\\n  text-transform: uppercase;\\n}\\n\\n.fs-900 {\\n  font-size: var(--fs-900);\\n}\\n\\n.fs-800 {\\n  font-size: var(--fs-800);\\n}\\n\\n.fs-700 {\\n  font-size: var(--fs-700);\\n}\\n\\n.fs-600 {\\n  font-size: var(--fs-600);\\n}\\n\\n.fs-500 {\\n  font-size: var(--fs-500);\\n}\\n\\n.fs-400 {\\n  font-size: var(--fs-400);\\n}\\n\\n.fs-300 {\\n  font-size: var(--fs-300);\\n}\\n\\n.fs-200 {\\n  font-size: var(--fs-200);\\n}\\n\\n.fs-900,\\n.fs-800,\\n.fs-700,\\n.fs-600 {\\n  line-height: 1.1;\\n}\\n\\n.numbered-title {\\n  font-family: var(--ff-sans-cond);\\n  font-size: var(--fs-500);\\n  text-transform: uppercase;\\n  letter-spacing: 4.72px;\\n}\\n\\n@media (min-width: 58em) {\\n  .main-home {\\n    padding-bottom: max(6rem, 20vh);\\n    align-content: end;\\n  }\\n}\\n\\n.primary-header {\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n.primary-header__logo {\\n  margin: 1.5rem clamp(1.5rem, 5vw, 3.5rem);\\n}\\n@media (min-width: 58em) {\\n  .primary-header::after {\\n    content: \\\"\\\";\\n    display: block;\\n    position: relative;\\n    height: 1px;\\n    width: 100%;\\n    background: hsl(var(--clr-white)/0.25);\\n    transform: translateX(2.5rem);\\n    order: 1;\\n  }\\n}\\n\\nnav {\\n  order: 2;\\n}\\n\\n.primary-navigation {\\n  --gap: clamp(1.5rem, 5vw, 3.5rem);\\n  --underline-gap: 2rem;\\n  list-style: none;\\n  padding: 0;\\n  margin: 0;\\n}\\n@supports (backdrop-filter: blur(4.7742rem)) {\\n  .primary-navigation {\\n    background: hsl(var(--clr-white)/0.04);\\n    backdrop-filter: blur(4.7742rem);\\n  }\\n}\\n.primary-navigation a {\\n  text-decoration: none;\\n}\\n.primary-navigation a > span {\\n  font-weight: 700;\\n  margin-right: 0.5em;\\n}\\n@media only screen and (max-width: 37.5em) {\\n  .primary-navigation {\\n    --underline-gap: 0.5rem;\\n    padding: min(20rem, 15vh) 2rem;\\n    margin: 0;\\n    flex-direction: column;\\n    position: fixed;\\n    inset: 0 0 0 30%;\\n    z-index: 10;\\n    transform: translateX(100%);\\n    transition: all 500ms ease-in-out;\\n  }\\n  .primary-navigation.underline-indicators > .active {\\n    border: 0;\\n  }\\n}\\n@media (min-width: 37.5em) {\\n  .primary-navigation {\\n    padding-inline: clamp(3rem, 10vw, 7rem);\\n  }\\n}\\n@media (min-width: 37.5em) and (max-width: 58em) {\\n  .primary-navigation a > span {\\n    display: none;\\n  }\\n}\\n@media (min-width: 58em) {\\n  .primary-navigation {\\n    margin-block: 2rem;\\n  }\\n}\\n\\n.mobile-nav-toggle {\\n  display: none;\\n}\\n@media only screen and (max-width: 37.5em) {\\n  .mobile-nav-toggle {\\n    display: block;\\n    position: absolute;\\n    z-index: 20;\\n    right: 1rem;\\n    top: 2rem;\\n    background: transparent;\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    width: 1.5rem;\\n    aspect-ratio: 1;\\n    background-repeat: no-repeat;\\n    border: 0;\\n  }\\n  .mobile-nav-toggle:focus-visible {\\n    outline: 5px solid white;\\n    outline-offset: 5px;\\n  }\\n}\\n\\n.technology-main {\\n  padding: 13.6rem 0rem 10.1rem 16.5rem;\\n}\\n.technology-main__heading span {\\n  margin-right: 0.9rem;\\n}\\n\\n.tech-container {\\n  display: flex;\\n  gap: 8rem;\\n  align-items: center;\\n}\\n\\n.numbs-list {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 3.2rem;\\n  align-items: center;\\n  justify-content: center;\\n}\\n.numbs-list__item {\\n  width: 8rem;\\n  height: 8rem;\\n  border-radius: 50%;\\n  color: var(--color-white);\\n  border: 1px solid rgba(var(--c-white), 0.25);\\n  text-align: center;\\n  padding: 2.2rem;\\n  cursor: pointer;\\n}\\n.numbs-list__item.activeBtn {\\n  background-color: var(--color-white);\\n  color: var(--color-primary);\\n  border: none;\\n}\\n.numbs-list__item:hover {\\n  border: 1px solid rgba(var(--c-white), 1);\\n}\\n\\n.tech-info-container {\\n  display: none;\\n  align-items: center;\\n  justify-content: space-between;\\n  gap: 13.5rem;\\n}\\n.tech-info-container.current {\\n  display: flex;\\n}\\n\\n.tech-info__title {\\n  color: var(--color-purple-light);\\n  margin-bottom: 1.1rem;\\n}\\n.tech-info__name {\\n  width: max-content;\\n}\\n.tech-info__about {\\n  margin-top: 1.7rem;\\n}\\n\\n.tech-image {\\n  display: block;\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n.large-button {\\n  font-size: 2rem;\\n  position: relative;\\n  z-index: 1;\\n  display: inline-grid;\\n  place-items: center;\\n  padding: 0 2em;\\n  border-radius: 50%;\\n  aspect-ratio: 1;\\n  text-decoration: none;\\n}\\n\\n.large-button::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  z-index: -1;\\n  width: 100%;\\n  height: 100%;\\n  background: hsl(var(--clr-white)/0.1);\\n  border-radius: 50%;\\n  opacity: 0;\\n  transition: opacity 500ms linear, transform 750ms ease-in-out;\\n}\\n\\n.large-button:hover::after,\\n.large-button:focus::after {\\n  opacity: 1;\\n  transform: scale(1.5);\\n}\\n\\n.skip {\\n  background: hsl(var(--clr-white));\\n  color: hsl(var(--clr-dark));\\n  padding: 0.5em 1em;\\n  margin-inline: auto;\\n  position: absolute;\\n  z-index: 30;\\n  transform: translateY(-100%);\\n  transition: transform 0.2s ease-in;\\n}\\n.skip:focus {\\n  transform: translateY(0);\\n}\\n\\n.home {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  background-position: bottom center;\\n}\\n@media (min-width: 37.5em) {\\n  .home {\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n  }\\n}\\n@media (min-width: 58em) {\\n  .home {\\n    background-position: center center;\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n  }\\n}\\n\\n.destination-home {\\n  background-image: linear-gradient(to right, rgba(242, 242, 242, 0.09), rgba(242, 242, 242, 0.09)), url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n}\\n\\n.crew-home {\\n  background-image: linear-gradient(to right, rgba(11, 13, 23, 0.5), rgba(11, 13, 23, 0.5)), url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \");\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n}\\n\\n.technology-home {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_6___ + \");\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n}\\n\\n/* ------------------- */\\n/* Utility classes     */\\n/* ------------------- */\\n.flex {\\n  display: flex;\\n  gap: var(--gap, 1rem);\\n}\\n\\n.grid {\\n  display: grid;\\n  gap: var(--gap, 1rem);\\n}\\n\\n.flow > *:where(:not(:first-child)) {\\n  margin-top: var(--flow-space, 1rem);\\n}\\n\\n.container {\\n  padding-inline: 2em;\\n  margin-inline: auto;\\n  max-width: 80rem;\\n}\\n\\n.d-block {\\n  display: block;\\n}\\n\\n.grid-container {\\n  text-align: center;\\n  display: grid;\\n  place-items: center;\\n  padding-inline: 1rem;\\n}\\n.grid-container * {\\n  max-width: 45ch;\\n}\\n@media (min-width: 58em) {\\n  .grid-container {\\n    text-align: left;\\n    column-gap: var(--container-gap, 2rem);\\n    grid-template-columns: minmax(1rem, 1fr) repeat(2, minmax(0, 40rem)) minmax(1rem, 1fr);\\n  }\\n  .grid-container > *:first-child {\\n    grid-column: 2;\\n  }\\n  .grid-container > *:last-child {\\n    grid-column: 3;\\n  }\\n}\\n\\n.sr-only {\\n  position: absolute;\\n  width: 1px;\\n  height: 1px;\\n  padding: 0;\\n  margin: -1px;\\n  overflow: hidden;\\n  clip: rect(0, 0, 0, 0);\\n  white-space: nowrap; /* added line */\\n  border: 0;\\n}\\n\\n/* colors */\\n.bg-dark {\\n  background-color: hsl(var(--clr-dark));\\n}\\n\\n.bg-accent {\\n  background-color: hsl(var(--clr-light));\\n}\\n\\n.bg-white {\\n  background-color: hsl(var(--clr-white));\\n}\\n\\n.text-dark {\\n  color: hsl(var(--clr-dark));\\n}\\n\\n.text-accent {\\n  color: hsl(var(--clr-light));\\n}\\n\\n.text-white {\\n  color: hsl(var(--clr-white));\\n}\\n\\n.numbered-title span {\\n  margin-right: 0.5em;\\n  font-weight: 700;\\n  color: hsl(var(--clr-white)/0.25);\\n}\\n\\n/* ------------------- */\\n/* Compontents         */\\n/* ------------------- */\\n.underline-indicators > * {\\n  cursor: pointer;\\n  padding: var(--underline-gap, 1rem) 0;\\n  border: 0;\\n  border-bottom: 0.2rem solid hsl(var(--clr-white)/0);\\n}\\n\\n.underline-indicators > *:hover,\\n.underline-indicators > *:focus {\\n  border-color: hsl(var(--clr-white)/0.5);\\n}\\n\\n.underline-indicators > .active,\\n.underline-indicators > [aria-selected=true] {\\n  color: hsl(var(--clr-white)/1);\\n  border-color: hsl(var(--clr-white)/1);\\n}\\n\\n.tab-list {\\n  --gap: 2rem;\\n}\\n\\n.dot-indicators > * {\\n  cursor: pointer;\\n  border: 0;\\n  border-radius: 50%;\\n  padding: 0.5em;\\n  background-color: hsl(var(--clr-white)/0.25);\\n}\\n\\n.dot-indicators > *:hover,\\n.dot-indicators > *:focus {\\n  background-color: hsl(var(--clr-white)/0.5);\\n}\\n\\n.dot-indicators > [aria-selected=true] {\\n  background-color: hsl(var(--clr-white)/1);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://space-tourism/./src/sass/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

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

/***/ "./dist/assets/home/background-home-mobile.jpg":
/*!*****************************************************!*\
  !*** ./dist/assets/home/background-home-mobile.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"13f7adecbcb3c3f170d8.jpg\";\n\n//# sourceURL=webpack://space-tourism/./dist/assets/home/background-home-mobile.jpg?");

/***/ }),

/***/ "./dist/assets/home/background-home-tablet.jpg":
/*!*****************************************************!*\
  !*** ./dist/assets/home/background-home-tablet.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bc9efcc3281fa6801077.jpg\";\n\n//# sourceURL=webpack://space-tourism/./dist/assets/home/background-home-tablet.jpg?");

/***/ }),

/***/ "./dist/assets/shared/icon-hamburger.svg":
/*!***********************************************!*\
  !*** ./dist/assets/shared/icon-hamburger.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5273efa7c50e96ef3e51.svg\";\n\n//# sourceURL=webpack://space-tourism/./dist/assets/shared/icon-hamburger.svg?");

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
/******/ 			"crew": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/crew.js");
/******/ 	
/******/ })()
;