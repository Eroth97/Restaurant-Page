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
  const lis = [(0,_recurrentFunctions__WEBPACK_IMPORTED_MODULE_0__.createLi)('Sunday: 8:00-16:00'), (0,_recurrentFunctions__WEBPACK_IMPORTED_MODULE_0__.createLi)('Monday: 8:00-16:00'), (0,_recurrentFunctions__WEBPACK_IMPORTED_MODULE_0__.createLi)('Tuesday: 8:00-16:00'), (0,_recurrentFunctions__WEBPACK_IMPORTED_MODULE_0__.createLi)('Wednesday: 8:00-16:00'), (0,_recurrentFunctions__WEBPACK_IMPORTED_MODULE_0__.createLi)('Thursday: 8:00-16:00'), (0,_recurrentFunctions__WEBPACK_IMPORTED_MODULE_0__.createLi)('Friday: 8:00-16:00'), (0,_recurrentFunctions__WEBPACK_IMPORTED_MODULE_0__.createLi)('Saturday: 8:00-16:00')];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNkQ7QUFDN0Q7QUFDQTtBQUNBLHNCQUFzQixnRUFBVztBQUNqQztBQUNBO0FBQ0EsZUFBZSw2REFBUSxtQkFBbUIsNkRBQVEsb0JBQW9CLDZEQUFRO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw2REFBUSxVQUFVLDZEQUFRLFVBQVUsNkRBQVE7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZjZEO0FBQzdEO0FBQ0E7QUFDQSxzQkFBc0IsZ0VBQVc7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDZEQUFRLHdCQUF3Qiw2REFBUSx3QkFBd0IsNkRBQVEseUJBQXlCLDZEQUFRLDJCQUEyQiw2REFBUSwwQkFBMEIsNkRBQVEsd0JBQXdCLDZEQUFRO0FBQzdOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjJEO0FBQzNEO0FBQ0E7QUFDQSxzQkFBc0IsZ0VBQVc7QUFDakM7QUFDQTtBQUNBLGlCQUFpQiw2REFBUSxlQUFlLDZEQUFRLGFBQWEsNkRBQVE7QUFDckU7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDakJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTndDO0FBQ0c7QUFDUztBQUNoQjtBQUNNO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQWE7QUFDYiwyQkFBMkIscURBQVk7QUFDdkM7QUFDQTtBQUNBLGlFQUFpRSxpRUFBWTtBQUM3RTtBQUNBLHlDQUF5Qyx3REFBYTtBQUN0RCx5Q0FBeUMsaURBQVU7QUFDbkQseUNBQXlDLHVEQUFhLFciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcmVjdXJyZW50RnVuY3Rpb25zLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVMaSwgY3JlYXRlVGl0bGUgfSBmcm9tIFwiLi9yZWN1cnJlbnRGdW5jdGlvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoY29udGVudCl7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVUaXRsZSgnQ29udGFjdCcpKTtcclxuXHJcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gIGNvbnN0IGxpcyA9IFtjcmVhdGVMaSgnRmlyc3QgQ29udGFjdCcpLCBjcmVhdGVMaSgnU2Vjb25kIENvbnRhY3QnKSwgY3JlYXRlTGkoJ0xhc3QgQ29udGFjdCcpXTtcclxuXHJcbiAgbGlzLmZvckVhY2goZWxlbWVudCA9PiB1bC5hcHBlbmRDaGlsZChlbGVtZW50KSk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZCh1bCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7Y3JlYXRlQ29udGFjdH07IiwiaW1wb3J0IHsgY3JlYXRlTGkgfSBmcm9tICcuL3JlY3VycmVudEZ1bmN0aW9ucyc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKXtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcblxyXG4gIGNvbnN0IGxpbmtzID0gW2NyZWF0ZUxpKCdIb21lJyksIGNyZWF0ZUxpKCdNZW51JyksIGNyZWF0ZUxpKCdDb250YWN0JyldO1xyXG5cclxuICBsaW5rcy5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdsaW5rJykpO1xyXG4gIGxpbmtzLmZvckVhY2goZWxlbWVudCA9PiB1bC5hcHBlbmRDaGlsZChlbGVtZW50KSk7XHJcblxyXG4gIGhlYWRlci5hcHBlbmRDaGlsZCh1bCk7XHJcblxyXG4gIHJldHVybiBoZWFkZXI7XHJcbn1cclxuXHJcbmV4cG9ydHtjcmVhdGVIZWFkZXJ9OyIsImltcG9ydCB7IGNyZWF0ZUxpLCBjcmVhdGVUaXRsZSB9IGZyb20gXCIuL3JlY3VycmVudEZ1bmN0aW9uc1wiO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ29udGVudChjb250ZW50KXtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVRpdGxlKCdUaGUgQ3JhenkgUmVzdGF1cmFudCcpKTtcclxuXHJcbiAgXHJcbiAgY29uc3QgcHJlc2VudGF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcHJlc2VudGF0aW9uLmNsYXNzTGlzdC5hZGQoJ3ByZXNlbnRhdGlvbicpO1xyXG4gIHByZXNlbnRhdGlvbi5pbm5lclRleHQgPSAnVGhlIENyYXp5IFJlc3RhdXJhbnQgaXMgYSBwbGFjZSB3aGVyZSB5b3UgY2FuIGVhdCwgc29tZSBub3JtYWwgZm9vZC4gV2UgYXJlIGNyYXp5IGJlY2F1c2Ugd2UgYXJlIGJ1aWxkaW5nIHRoaXMgd2VicGFnZSB1c2luZyBKUyBvbmx5LCBldmVuIHRob3VnaCBub3cgd2UgYXJlIHVzaW5nIHBpZWNlcyBvZiBodG1sIGFuZCBDU1MuJ1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJlc2VudGF0aW9uKTtcclxuXHJcbiAgXHJcbiAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBob3Vycy5jbGFzc0xpc3QuYWRkKCdob3VycycpO1xyXG4gIFxyXG4gIGNvbnN0IHNlY29uZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICBzZWNvbmRUaXRsZS5pbm5lclRleHQgPSAnSG91cnMnO1xyXG4gIGhvdXJzLmFwcGVuZENoaWxkKHNlY29uZFRpdGxlKTtcclxuXHJcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gIGNvbnN0IGxpcyA9IFtjcmVhdGVMaSgnU3VuZGF5OiA4OjAwLTE2OjAwJyksIGNyZWF0ZUxpKCdNb25kYXk6IDg6MDAtMTY6MDAnKSwgY3JlYXRlTGkoJ1R1ZXNkYXk6IDg6MDAtMTY6MDAnKSwgY3JlYXRlTGkoJ1dlZG5lc2RheTogODowMC0xNjowMCcpLCBjcmVhdGVMaSgnVGh1cnNkYXk6IDg6MDAtMTY6MDAnKSwgY3JlYXRlTGkoJ0ZyaWRheTogODowMC0xNjowMCcpLCBjcmVhdGVMaSgnU2F0dXJkYXk6IDg6MDAtMTY6MDAnKV07XHJcbiAgbGlzLmZvckVhY2goZWxlbWVudCA9PiB1bC5hcHBlbmRDaGlsZChlbGVtZW50KSk7XHJcbiAgaG91cnMuYXBwZW5kQ2hpbGQodWwpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG91cnMpO1xyXG59XHJcblxyXG5leHBvcnQge2NyZWF0ZUNvbnRlbnR9OyIsImltcG9ydCB7Y3JlYXRlTGksIGNyZWF0ZVRpdGxlfSBmcm9tICcuL3JlY3VycmVudEZ1bmN0aW9ucyc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNZW51KGNvbnRlbnQpe1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlVGl0bGUoJ01lbnUnKSk7XHJcblxyXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gIGNvbnN0IG1lYWxzID0gW2NyZWF0ZUxpKCdIYW1idXJnZXInKSwgY3JlYXRlTGkoJ0hvdCBEb2cnKSwgY3JlYXRlTGkoJ1BpenphJyldO1xyXG4gIG1lYWxzLmZvckVhY2goZWxlbWVudCA9PiBtZW51LmFwcGVuZENoaWxkKGVsZW1lbnQpKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnUpO1xyXG59XHJcblxyXG5leHBvcnQge2NyZWF0ZU1lbnV9OyIsImZ1bmN0aW9uIGNyZWF0ZUxpKHRleHQpe1xyXG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICBsaS50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgcmV0dXJuIGxpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRpdGxlKHRpdGxlTmFtZSl7XHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIHRpdGxlLnRleHRDb250ZW50ID0gdGl0bGVOYW1lO1xyXG4gIHJldHVybiB0aXRsZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYW5Db250ZW50KGNvbnRlbnQpe1xyXG4gIC8vUmVtZW1iZXI6IHNvbWV0aGluZy5jaGlsZHJlbiByZXR1cm5zIGFuIEhUTUwgQ29sbGVjdGlvbi4gTm90IGFuIGFycmF5IVxyXG4gIGNvbnN0IGNoaWxkcmVuID0gWy4uLmNvbnRlbnQuY2hpbGRyZW5dOyBcclxuICBjaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4gY29udGVudC5yZW1vdmVDaGlsZChlbGVtZW50KSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7Y3JlYXRlTGksIGNsZWFuQ29udGVudCwgY3JlYXRlVGl0bGV9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlSGVhZGVyIH0gZnJvbSAnLi9oZWFkZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250ZW50IH0gZnJvbSAnLi9ob21lcGFnZSc7XHJcbmltcG9ydCB7IGNsZWFuQ29udGVudCB9IGZyb20gJy4vcmVjdXJyZW50RnVuY3Rpb25zJztcclxuaW1wb3J0IHsgY3JlYXRlTWVudSB9IGZyb20gJy4vbWVudSc7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRhY3QgfSBmcm9tICcuL2NvbnRhY3QnO1xyXG5cclxubGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG5cclxuXHJcbmNyZWF0ZUNvbnRlbnQoY29udGVudCk7XHJcbmRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGNyZWF0ZUhlYWRlcihjb250ZW50KSwgY29udGVudCk7XHJcblxyXG5jb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saW5rJyk7XHJcbmxpbmtzLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2xlYW5Db250ZW50KGNvbnRlbnQpKSk7XHJcblxyXG5saW5rc1swXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNyZWF0ZUNvbnRlbnQoY29udGVudCkpO1xyXG5saW5rc1sxXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNyZWF0ZU1lbnUoY29udGVudCkpO1xyXG5saW5rc1syXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNyZWF0ZUNvbnRhY3QoY29udGVudCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==