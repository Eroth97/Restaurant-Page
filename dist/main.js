/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");






let content = document.getElementById('content');


(0,_homepage__WEBPACK_IMPORTED_MODULE_1__.createContent)(content);
document.body.insertBefore((0,_header__WEBPACK_IMPORTED_MODULE_0__.createHeader)(content), content);

const links = document.querySelectorAll('.link');
links.forEach(element => element.addEventListener('click', () => (0,_recurrentFunctions__WEBPACK_IMPORTED_MODULE_2__.cleanContent)(content)));

links[0].addEventListener('click', () => (0,_homepage__WEBPACK_IMPORTED_MODULE_1__.createContent)(content));
links[1].addEventListener('click', () => (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.createMenu)(content));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw2REFBUSxVQUFVLDZEQUFRLFVBQVUsNkRBQVE7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZjZEO0FBQzdEO0FBQ0E7QUFDQSxzQkFBc0IsZ0VBQVc7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDZEQUFRLHVCQUF1Qiw2REFBUSx1QkFBdUIsNkRBQVEsd0JBQXdCLDZEQUFRLDBCQUEwQiw2REFBUSx5QkFBeUIsNkRBQVEsdUJBQXVCLDZEQUFRO0FBQ3ZOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjJEO0FBQzNEO0FBQ0E7QUFDQSxzQkFBc0IsZ0VBQVc7QUFDakM7QUFDQTtBQUNBLGlCQUFpQiw2REFBUSxlQUFlLDZEQUFRLGFBQWEsNkRBQVE7QUFDckU7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDakJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOd0M7QUFDRztBQUNTO0FBQ2I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUFhO0FBQ2IsMkJBQTJCLHFEQUFZO0FBQ3ZDO0FBQ0E7QUFDQSxpRUFBaUUsaUVBQVk7QUFDN0U7QUFDQSx5Q0FBeUMsd0RBQWE7QUFDdEQseUNBQXlDLG9EQUFVLFciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcmVjdXJyZW50RnVuY3Rpb25zLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVMaSB9IGZyb20gJy4vcmVjdXJyZW50RnVuY3Rpb25zJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpe1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuXHJcbiAgY29uc3QgbGlua3MgPSBbY3JlYXRlTGkoJ0hvbWUnKSwgY3JlYXRlTGkoJ01lbnUnKSwgY3JlYXRlTGkoJ0NvbnRhY3QnKV07XHJcblxyXG4gIGxpbmtzLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xpbmsnKSk7XHJcbiAgbGlua3MuZm9yRWFjaChlbGVtZW50ID0+IHVsLmFwcGVuZENoaWxkKGVsZW1lbnQpKTtcclxuXHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHVsKTtcclxuXHJcbiAgcmV0dXJuIGhlYWRlcjtcclxufVxyXG5cclxuZXhwb3J0e2NyZWF0ZUhlYWRlcn07IiwiaW1wb3J0IHsgY3JlYXRlTGksIGNyZWF0ZVRpdGxlIH0gZnJvbSBcIi4vcmVjdXJyZW50RnVuY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb250ZW50KGNvbnRlbnQpe1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlVGl0bGUoJ1RoZSBDcmF6eSBSZXN0YXVyYW50JykpO1xyXG5cclxuICBcclxuICBjb25zdCBwcmVzZW50YXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwcmVzZW50YXRpb24uY2xhc3NMaXN0LmFkZCgncHJlc2VudGF0aW9uJyk7XHJcbiAgcHJlc2VudGF0aW9uLmlubmVyVGV4dCA9ICdUaGUgQ3JhenkgUmVzdGF1cmFudCBpcyBhIHBsYWNlIHdoZXJlIHlvdSBjYW4gZWF0LCBzb21lIG5vcm1hbCBmb29kLiBXZSBhcmUgY3JhenkgYmVjYXVzZSB3ZSBhcmUgYnVpbGRpbmcgdGhpcyB3ZWJwYWdlIHVzaW5nIEpTIG9ubHksIGV2ZW4gdGhvdWdoIG5vdyB3ZSBhcmUgdXNpbmcgcGllY2VzIG9mIGh0bWwgYW5kIENTUy4nXHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChwcmVzZW50YXRpb24pO1xyXG5cclxuICBcclxuICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGhvdXJzLmNsYXNzTGlzdC5hZGQoJ2hvdXJzJyk7XHJcbiAgXHJcbiAgY29uc3Qgc2Vjb25kVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gIHNlY29uZFRpdGxlLmlubmVyVGV4dCA9ICdIb3Vycyc7XHJcbiAgaG91cnMuYXBwZW5kQ2hpbGQoc2Vjb25kVGl0bGUpO1xyXG5cclxuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgY29uc3QgbGlzID0gW2NyZWF0ZUxpKCdTdW5kYXkgODowMC0xNjowMCcpLCBjcmVhdGVMaSgnTW9uZGF5IDg6MDAtMTY6MDAnKSwgY3JlYXRlTGkoJ1R1ZXNkYXkgODowMC0xNjowMCcpLCBjcmVhdGVMaSgnV2VkbmVzZGF5IDg6MDAtMTY6MDAnKSwgY3JlYXRlTGkoJ1RodXJzZGF5IDg6MDAtMTY6MDAnKSwgY3JlYXRlTGkoJ0ZyaWRheSA4OjAwLTE2OjAwJyksIGNyZWF0ZUxpKCdTYXR1cmRheSA4OjAwLTE2OjAwJyldO1xyXG4gIGxpcy5mb3JFYWNoKGVsZW1lbnQgPT4gdWwuYXBwZW5kQ2hpbGQoZWxlbWVudCkpO1xyXG4gIGhvdXJzLmFwcGVuZENoaWxkKHVsKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGhvdXJzKTtcclxufVxyXG5cclxuZXhwb3J0IHtjcmVhdGVDb250ZW50fTsiLCJpbXBvcnQge2NyZWF0ZUxpLCBjcmVhdGVUaXRsZX0gZnJvbSAnLi9yZWN1cnJlbnRGdW5jdGlvbnMnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWVudShjb250ZW50KXtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVRpdGxlKCdNZW51JykpO1xyXG5cclxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICBjb25zdCBtZWFscyA9IFtjcmVhdGVMaSgnSGFtYnVyZ2VyJyksIGNyZWF0ZUxpKCdIb3QgRG9nJyksIGNyZWF0ZUxpKCdQaXp6YScpXTtcclxuICBtZWFscy5mb3JFYWNoKGVsZW1lbnQgPT4gbWVudS5hcHBlbmRDaGlsZChlbGVtZW50KSk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChtZW51KTtcclxufVxyXG5cclxuZXhwb3J0IHtjcmVhdGVNZW51fTsiLCJmdW5jdGlvbiBjcmVhdGVMaSh0ZXh0KXtcclxuICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgbGkudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gIHJldHVybiBsaVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUaXRsZSh0aXRsZU5hbWUpe1xyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICB0aXRsZS50ZXh0Q29udGVudCA9IHRpdGxlTmFtZTtcclxuICByZXR1cm4gdGl0bGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFuQ29udGVudChjb250ZW50KXtcclxuICAvL1JlbWVtYmVyOiBzb21ldGhpbmcuY2hpbGRyZW4gcmV0dXJucyBhbiBIVE1MIENvbGxlY3Rpb24uIE5vdCBhbiBhcnJheSFcclxuICBjb25zdCBjaGlsZHJlbiA9IFsuLi5jb250ZW50LmNoaWxkcmVuXTsgXHJcbiAgY2hpbGRyZW4uZm9yRWFjaChlbGVtZW50ID0+IGNvbnRlbnQucmVtb3ZlQ2hpbGQoZWxlbWVudCkpO1xyXG59XHJcblxyXG5leHBvcnQge2NyZWF0ZUxpLCBjbGVhbkNvbnRlbnQsIGNyZWF0ZVRpdGxlfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZUhlYWRlciB9IGZyb20gJy4vaGVhZGVyJztcclxuaW1wb3J0IHsgY3JlYXRlQ29udGVudCB9IGZyb20gJy4vaG9tZXBhZ2UnO1xyXG5pbXBvcnQgeyBjbGVhbkNvbnRlbnQgfSBmcm9tICcuL3JlY3VycmVudEZ1bmN0aW9ucyc7XHJcbmltcG9ydCB7IGNyZWF0ZU1lbnUgfSBmcm9tICcuL21lbnUuanMnO1xyXG5cclxuXHJcbmxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuXHJcblxyXG5jcmVhdGVDb250ZW50KGNvbnRlbnQpO1xyXG5kb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShjcmVhdGVIZWFkZXIoY29udGVudCksIGNvbnRlbnQpO1xyXG5cclxuY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGluaycpO1xyXG5saW5rcy5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNsZWFuQ29udGVudChjb250ZW50KSkpO1xyXG5cclxubGlua3NbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjcmVhdGVDb250ZW50KGNvbnRlbnQpKTtcclxubGlua3NbMV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjcmVhdGVNZW51KGNvbnRlbnQpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=