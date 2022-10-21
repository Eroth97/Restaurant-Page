/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContact": () => (/* binding */ createContact)
/* harmony export */ });
/* harmony import */ var _recurrentFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recurrentFunctions */ "./src/recurrentFunctions.js");


function createContact(content){
  content.appendChild((0,_recurrentFunctions__WEBPACK_IMPORTED_MODULE_0__.createTitle)('Contact'));

  const ul = document.createElement('ul');
  const lis = [(0,_recurrentFunctions__WEBPACK_IMPORTED_MODULE_0__.createLi)('First Contact'), (0,_recurrentFunctions__WEBPACK_IMPORTED_MODULE_0__.createLi)('Second Contact'), (0,_recurrentFunctions__WEBPACK_IMPORTED_MODULE_0__.createLi)('Last Contact')];

  lis.forEach(element => ul.appendChild(element));
  content.appendChild(ul);
}



/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHeader": () => (/* binding */ createHeader)
/* harmony export */ });
/* harmony import */ var _recurrentFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recurrentFunctions */ "./src/recurrentFunctions.js");


function createHeader(){
  const header = document.createElement('header');
  const ul = document.createElement('ul');

  const links = [(0,_recurrentFunctions__WEBPACK_IMPORTED_MODULE_0__.createLi)('Home'), (0,_recurrentFunctions__WEBPACK_IMPORTED_MODULE_0__.createLi)('Menu'), (0,_recurrentFunctions__WEBPACK_IMPORTED_MODULE_0__.createLi)('Contact')];

  links.forEach(element => element.classList.add('link'));
  links.forEach(element => ul.appendChild(element));

  header.appendChild(ul);

  return header;
}



/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContent": () => (/* binding */ createContent)
/* harmony export */ });
/* harmony import */ var _recurrentFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recurrentFunctions */ "./src/recurrentFunctions.js");


function createContent(content){
  content.appendChild((0,_recurrentFunctions__WEBPACK_IMPORTED_MODULE_0__.createTitle)('The Crazy Restaurant'));

  
  const presentation = document.createElement('div');
  presentation.classList.add('presentation');
  presentation.innerText = 'The Crazy Restaurant is a place where you can eat, some normal food. We are crazy because we are building this webpage using JS only, even though now we are using pieces of html and CSS.'
  content.appendChild(presentation);

  
  const hours = document.createElement('div');
  hours.classList.add('hours');
  
  const secondTitle = document.createElement('h3');
  secondTitle.innerText = 'Hours';
  hours.appendChild(secondTitle);

  const ul = document.createElement('ul');
  const lis = [(0,_recurrentFunctions__WEBPACK_IMPORTED_MODULE_0__.createLi)('Sunday 8:00-16:00'), (0,_recurrentFunctions__WEBPACK_IMPORTED_MODULE_0__.createLi)('Monday 8:00-16:00'), (0,_recurrentFunctions__WEBPACK_IMPORTED_MODULE_0__.createLi)('Tuesday 8:00-16:00'), (0,_recurrentFunctions__WEBPACK_IMPORTED_MODULE_0__.createLi)('Wednesday 8:00-16:00'), (0,_recurrentFunctions__WEBPACK_IMPORTED_MODULE_0__.createLi)('Thursday 8:00-16:00'), (0,_recurrentFunctions__WEBPACK_IMPORTED_MODULE_0__.createLi)('Friday 8:00-16:00'), (0,_recurrentFunctions__WEBPACK_IMPORTED_MODULE_0__.createLi)('Saturday 8:00-16:00')];
  lis.forEach(element => ul.appendChild(element));
  hours.appendChild(ul);
  content.appendChild(hours);
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenu": () => (/* binding */ createMenu)
/* harmony export */ });
/* harmony import */ var _recurrentFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recurrentFunctions */ "./src/recurrentFunctions.js");


function createMenu(content){
  content.appendChild((0,_recurrentFunctions__WEBPACK_IMPORTED_MODULE_0__.createTitle)('Menu'));

  const menu = document.createElement('ul');
  const meals = [(0,_recurrentFunctions__WEBPACK_IMPORTED_MODULE_0__.createLi)('Hamburger'), (0,_recurrentFunctions__WEBPACK_IMPORTED_MODULE_0__.createLi)('Hot Dog'), (0,_recurrentFunctions__WEBPACK_IMPORTED_MODULE_0__.createLi)('Pizza')];
  meals.forEach(element => menu.appendChild(element));
  content.appendChild(menu);
}



/***/ }),

/***/ "./src/recurrentFunctions.js":
/*!***********************************!*\
  !*** ./src/recurrentFunctions.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cleanContent": () => (/* binding */ cleanContent),
/* harmony export */   "createLi": () => (/* binding */ createLi),
/* harmony export */   "createTitle": () => (/* binding */ createTitle)
/* harmony export */ });
function createLi(text){
  const li = document.createElement('li');
  li.textContent = text;
  return li
}

function createTitle(titleName){
  const title = document.createElement('h2');
  title.textContent = titleName;
  return title;
}

function cleanContent(content){
  //Remember: something.children returns an HTML Collection. Not an array!
  const children = [...content.children]; 
  children.forEach(element => content.removeChild(element));
}



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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");
/* harmony import */ var _recurrentFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recurrentFunctions */ "./src/recurrentFunctions.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/contact.js");






let content = document.getElementById('content');


(0,_homepage__WEBPACK_IMPORTED_MODULE_1__.createContent)(content);
document.body.insertBefore((0,_header__WEBPACK_IMPORTED_MODULE_0__.createHeader)(content), content);

const links = document.querySelectorAll('.link');
links.forEach(element => element.addEventListener('click', () => (0,_recurrentFunctions__WEBPACK_IMPORTED_MODULE_2__.cleanContent)(content)));

links[0].addEventListener('click', () => (0,_homepage__WEBPACK_IMPORTED_MODULE_1__.createContent)(content));
links[1].addEventListener('click', () => (0,_menu__WEBPACK_IMPORTED_MODULE_3__.createMenu)(content));
links[2].addEventListener('click', () => (0,_contact__WEBPACK_IMPORTED_MODULE_4__.createContact)(content));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNkQ7QUFDN0Q7QUFDQTtBQUNBLHNCQUFzQixnRUFBVztBQUNqQztBQUNBO0FBQ0EsZUFBZSw2REFBUSxtQkFBbUIsNkRBQVEsb0JBQW9CLDZEQUFRO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw2REFBUSxVQUFVLDZEQUFRLFVBQVUsNkRBQVE7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZjZEO0FBQzdEO0FBQ0E7QUFDQSxzQkFBc0IsZ0VBQVc7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDZEQUFRLHVCQUF1Qiw2REFBUSx1QkFBdUIsNkRBQVEsd0JBQXdCLDZEQUFRLDBCQUEwQiw2REFBUSx5QkFBeUIsNkRBQVEsdUJBQXVCLDZEQUFRO0FBQ3ZOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjJEO0FBQzNEO0FBQ0E7QUFDQSxzQkFBc0IsZ0VBQVc7QUFDakM7QUFDQTtBQUNBLGlCQUFpQiw2REFBUSxlQUFlLDZEQUFRLGFBQWEsNkRBQVE7QUFDckU7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDakJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTndDO0FBQ0c7QUFDUztBQUNoQjtBQUNNO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQWE7QUFDYiwyQkFBMkIscURBQVk7QUFDdkM7QUFDQTtBQUNBLGlFQUFpRSxpRUFBWTtBQUM3RTtBQUNBLHlDQUF5Qyx3REFBYTtBQUN0RCx5Q0FBeUMsaURBQVU7QUFDbkQseUNBQXlDLHVEQUFhLFciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcmVjdXJyZW50RnVuY3Rpb25zLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVMaSwgY3JlYXRlVGl0bGUgfSBmcm9tIFwiLi9yZWN1cnJlbnRGdW5jdGlvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoY29udGVudCl7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVUaXRsZSgnQ29udGFjdCcpKTtcclxuXHJcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gIGNvbnN0IGxpcyA9IFtjcmVhdGVMaSgnRmlyc3QgQ29udGFjdCcpLCBjcmVhdGVMaSgnU2Vjb25kIENvbnRhY3QnKSwgY3JlYXRlTGkoJ0xhc3QgQ29udGFjdCcpXTtcclxuXHJcbiAgbGlzLmZvckVhY2goZWxlbWVudCA9PiB1bC5hcHBlbmRDaGlsZChlbGVtZW50KSk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZCh1bCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7Y3JlYXRlQ29udGFjdH07IiwiaW1wb3J0IHsgY3JlYXRlTGkgfSBmcm9tICcuL3JlY3VycmVudEZ1bmN0aW9ucyc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKXtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcblxyXG4gIGNvbnN0IGxpbmtzID0gW2NyZWF0ZUxpKCdIb21lJyksIGNyZWF0ZUxpKCdNZW51JyksIGNyZWF0ZUxpKCdDb250YWN0JyldO1xyXG5cclxuICBsaW5rcy5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdsaW5rJykpO1xyXG4gIGxpbmtzLmZvckVhY2goZWxlbWVudCA9PiB1bC5hcHBlbmRDaGlsZChlbGVtZW50KSk7XHJcblxyXG4gIGhlYWRlci5hcHBlbmRDaGlsZCh1bCk7XHJcblxyXG4gIHJldHVybiBoZWFkZXI7XHJcbn1cclxuXHJcbmV4cG9ydHtjcmVhdGVIZWFkZXJ9OyIsImltcG9ydCB7IGNyZWF0ZUxpLCBjcmVhdGVUaXRsZSB9IGZyb20gXCIuL3JlY3VycmVudEZ1bmN0aW9uc1wiO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ29udGVudChjb250ZW50KXtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVRpdGxlKCdUaGUgQ3JhenkgUmVzdGF1cmFudCcpKTtcclxuXHJcbiAgXHJcbiAgY29uc3QgcHJlc2VudGF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcHJlc2VudGF0aW9uLmNsYXNzTGlzdC5hZGQoJ3ByZXNlbnRhdGlvbicpO1xyXG4gIHByZXNlbnRhdGlvbi5pbm5lclRleHQgPSAnVGhlIENyYXp5IFJlc3RhdXJhbnQgaXMgYSBwbGFjZSB3aGVyZSB5b3UgY2FuIGVhdCwgc29tZSBub3JtYWwgZm9vZC4gV2UgYXJlIGNyYXp5IGJlY2F1c2Ugd2UgYXJlIGJ1aWxkaW5nIHRoaXMgd2VicGFnZSB1c2luZyBKUyBvbmx5LCBldmVuIHRob3VnaCBub3cgd2UgYXJlIHVzaW5nIHBpZWNlcyBvZiBodG1sIGFuZCBDU1MuJ1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJlc2VudGF0aW9uKTtcclxuXHJcbiAgXHJcbiAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBob3Vycy5jbGFzc0xpc3QuYWRkKCdob3VycycpO1xyXG4gIFxyXG4gIGNvbnN0IHNlY29uZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICBzZWNvbmRUaXRsZS5pbm5lclRleHQgPSAnSG91cnMnO1xyXG4gIGhvdXJzLmFwcGVuZENoaWxkKHNlY29uZFRpdGxlKTtcclxuXHJcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gIGNvbnN0IGxpcyA9IFtjcmVhdGVMaSgnU3VuZGF5IDg6MDAtMTY6MDAnKSwgY3JlYXRlTGkoJ01vbmRheSA4OjAwLTE2OjAwJyksIGNyZWF0ZUxpKCdUdWVzZGF5IDg6MDAtMTY6MDAnKSwgY3JlYXRlTGkoJ1dlZG5lc2RheSA4OjAwLTE2OjAwJyksIGNyZWF0ZUxpKCdUaHVyc2RheSA4OjAwLTE2OjAwJyksIGNyZWF0ZUxpKCdGcmlkYXkgODowMC0xNjowMCcpLCBjcmVhdGVMaSgnU2F0dXJkYXkgODowMC0xNjowMCcpXTtcclxuICBsaXMuZm9yRWFjaChlbGVtZW50ID0+IHVsLmFwcGVuZENoaWxkKGVsZW1lbnQpKTtcclxuICBob3Vycy5hcHBlbmRDaGlsZCh1bCk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChob3Vycyk7XHJcbn1cclxuXHJcbmV4cG9ydCB7Y3JlYXRlQ29udGVudH07IiwiaW1wb3J0IHtjcmVhdGVMaSwgY3JlYXRlVGl0bGV9IGZyb20gJy4vcmVjdXJyZW50RnVuY3Rpb25zJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1lbnUoY29udGVudCl7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVUaXRsZSgnTWVudScpKTtcclxuXHJcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgY29uc3QgbWVhbHMgPSBbY3JlYXRlTGkoJ0hhbWJ1cmdlcicpLCBjcmVhdGVMaSgnSG90IERvZycpLCBjcmVhdGVMaSgnUGl6emEnKV07XHJcbiAgbWVhbHMuZm9yRWFjaChlbGVtZW50ID0+IG1lbnUuYXBwZW5kQ2hpbGQoZWxlbWVudCkpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7Y3JlYXRlTWVudX07IiwiZnVuY3Rpb24gY3JlYXRlTGkodGV4dCl7XHJcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIGxpLnRleHRDb250ZW50ID0gdGV4dDtcclxuICByZXR1cm4gbGlcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGl0bGUodGl0bGVOYW1lKXtcclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgdGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZU5hbWU7XHJcbiAgcmV0dXJuIHRpdGxlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhbkNvbnRlbnQoY29udGVudCl7XHJcbiAgLy9SZW1lbWJlcjogc29tZXRoaW5nLmNoaWxkcmVuIHJldHVybnMgYW4gSFRNTCBDb2xsZWN0aW9uLiBOb3QgYW4gYXJyYXkhXHJcbiAgY29uc3QgY2hpbGRyZW4gPSBbLi4uY29udGVudC5jaGlsZHJlbl07IFxyXG4gIGNoaWxkcmVuLmZvckVhY2goZWxlbWVudCA9PiBjb250ZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQpKTtcclxufVxyXG5cclxuZXhwb3J0IHtjcmVhdGVMaSwgY2xlYW5Db250ZW50LCBjcmVhdGVUaXRsZX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVIZWFkZXIgfSBmcm9tICcuL2hlYWRlcic7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRlbnQgfSBmcm9tICcuL2hvbWVwYWdlJztcclxuaW1wb3J0IHsgY2xlYW5Db250ZW50IH0gZnJvbSAnLi9yZWN1cnJlbnRGdW5jdGlvbnMnO1xyXG5pbXBvcnQgeyBjcmVhdGVNZW51IH0gZnJvbSAnLi9tZW51JztcclxuaW1wb3J0IHsgY3JlYXRlQ29udGFjdCB9IGZyb20gJy4vY29udGFjdCc7XHJcblxyXG5sZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcblxyXG5cclxuY3JlYXRlQ29udGVudChjb250ZW50KTtcclxuZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoY3JlYXRlSGVhZGVyKGNvbnRlbnQpLCBjb250ZW50KTtcclxuXHJcbmNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpbmsnKTtcclxubGlua3MuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbGVhbkNvbnRlbnQoY29udGVudCkpKTtcclxuXHJcbmxpbmtzWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY3JlYXRlQ29udGVudChjb250ZW50KSk7XHJcbmxpbmtzWzFdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY3JlYXRlTWVudShjb250ZW50KSk7XHJcbmxpbmtzWzJdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY3JlYXRlQ29udGFjdChjb250ZW50KSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9