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

/***/ "./src/Style/dark-mode.css":
/*!*********************************!*\
  !*** ./src/Style/dark-mode.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./src/Style/dark-mode.css?");

/***/ }),

/***/ "./src/Style/m-about.css":
/*!*******************************!*\
  !*** ./src/Style/m-about.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./src/Style/m-about.css?");

/***/ }),

/***/ "./src/Style/m-projects.css":
/*!**********************************!*\
  !*** ./src/Style/m-projects.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./src/Style/m-projects.css?");

/***/ }),

/***/ "./src/Style/s-about.css":
/*!*******************************!*\
  !*** ./src/Style/s-about.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./src/Style/s-about.css?");

/***/ }),

/***/ "./src/Style/s-contact.css":
/*!*********************************!*\
  !*** ./src/Style/s-contact.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./src/Style/s-contact.css?");

/***/ }),

/***/ "./src/Style/s-header.css":
/*!********************************!*\
  !*** ./src/Style/s-header.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./src/Style/s-header.css?");

/***/ }),

/***/ "./src/Style/s-home.css":
/*!******************************!*\
  !*** ./src/Style/s-home.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./src/Style/s-home.css?");

/***/ }),

/***/ "./src/Style/s-projects.css":
/*!**********************************!*\
  !*** ./src/Style/s-projects.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./src/Style/s-projects.css?");

/***/ }),

/***/ "./src/Style/s-skills.css":
/*!********************************!*\
  !*** ./src/Style/s-skills.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./src/Style/s-skills.css?");

/***/ }),

/***/ "./src/Style/style.css":
/*!*****************************!*\
  !*** ./src/Style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./src/Style/style.css?");

/***/ }),

/***/ "./src/Modules/changeTheme.js":
/*!************************************!*\
  !*** ./src/Modules/changeTheme.js ***!
  \************************************/
/***/ (() => {

eval("const $themeButton = document.querySelector('.theme-selector');\r\nconst $body = document.body;\r\nconst $logo = document.querySelector('.logo');\r\n\r\n$themeButton.addEventListener('click', () => {\r\n    $body.classList.toggle('dark-mode');\r\n    if ($body.classList.contains('dark-mode')) {\r\n        $logo.src = 'Assets/icons/vat-logo-white.webp';\r\n    } else {\r\n        $logo.src = 'Assets/icons/vat-logo.webp';\r\n    }\r\n})\n\n//# sourceURL=webpack://portfolio/./src/Modules/changeTheme.js?");

/***/ }),

/***/ "./src/Modules/navbar.js":
/*!*******************************!*\
  !*** ./src/Modules/navbar.js ***!
  \*******************************/
/***/ (() => {

eval("$hamburgerBtn = document.querySelector('.hamburger-btn');\r\n$navbar = document.querySelector('.nav');\r\n$navItems = document.querySelectorAll('.nav-item');\r\n\r\n$hamburgerBtn.addEventListener('click', () => {\r\n    $navbar.classList.toggle('nav-open');\r\n})\r\n\r\n$navItems.forEach((item) => {\r\n    item.addEventListener('click', () => {\r\n        $navbar.classList.remove('nav-open');\r\n    })\r\n});\n\n//# sourceURL=webpack://portfolio/./src/Modules/navbar.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Modules_navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modules/navbar */ \"./src/Modules/navbar.js\");\n/* harmony import */ var _Modules_navbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Modules_navbar__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Modules_changeTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules/changeTheme */ \"./src/Modules/changeTheme.js\");\n/* harmony import */ var _Modules_changeTheme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Modules_changeTheme__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Style_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Style/style.css */ \"./src/Style/style.css\");\n/* harmony import */ var _Style_s_header_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Style/s-header.css */ \"./src/Style/s-header.css\");\n/* harmony import */ var _Style_s_home_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Style/s-home.css */ \"./src/Style/s-home.css\");\n/* harmony import */ var _Style_s_about_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Style/s-about.css */ \"./src/Style/s-about.css\");\n/* harmony import */ var _Style_s_skills_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Style/s-skills.css */ \"./src/Style/s-skills.css\");\n/* harmony import */ var _Style_s_projects_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Style/s-projects.css */ \"./src/Style/s-projects.css\");\n/* harmony import */ var _Style_s_contact_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Style/s-contact.css */ \"./src/Style/s-contact.css\");\n/* harmony import */ var _Style_m_about_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Style/m-about.css */ \"./src/Style/m-about.css\");\n/* harmony import */ var _Style_m_projects_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Style/m-projects.css */ \"./src/Style/m-projects.css\");\n/* harmony import */ var _Style_dark_mode_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Style/dark-mode.css */ \"./src/Style/dark-mode.css\");\n// Import modules\r\n\r\n\r\n\r\n// Imports styles\r\n\r\n\r\n// Styles: small screens\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Styles: medium screens\r\n\r\n\r\n\r\n// Styles: dark mode\r\n\n\n//# sourceURL=webpack://portfolio/./src/index.js?");

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
/******/ 			// no module.id needed
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;