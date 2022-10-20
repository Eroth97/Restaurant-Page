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
  const firstTitle = document.createElement('h2');
  content.appendChild(firstTitle);

  
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

/***/ "./src/recurrentFunctions.js":
/*!***********************************!*\
  !*** ./src/recurrentFunctions.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cleanContent": () => (/* binding */ cleanContent),
/* harmony export */   "createLi": () => (/* binding */ createLi)
/* harmony export */ });
function createLi(name){
  const li = document.createElement('li');
  li.textContent = name;
  return li
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





let content = document.getElementById('content');


(0,_homepage__WEBPACK_IMPORTED_MODULE_1__.createContent)(content);
document.body.insertBefore((0,_header__WEBPACK_IMPORTED_MODULE_0__.createHeader)(content), content);

const links = document.querySelectorAll('.link');
links.forEach(element => element.addEventListener('click', () => (0,_recurrentFunctions__WEBPACK_IMPORTED_MODULE_2__.cleanContent)(content)));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw2REFBUSxVQUFVLDZEQUFRLFVBQVUsNkRBQVE7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZmdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDZEQUFRLHVCQUF1Qiw2REFBUSx1QkFBdUIsNkRBQVEsd0JBQXdCLDZEQUFRLDBCQUEwQiw2REFBUSx5QkFBeUIsNkRBQVEsdUJBQXVCLDZEQUFRO0FBQ3ZOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDWEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTndDO0FBQ0c7QUFDUztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQWE7QUFDYiwyQkFBMkIscURBQVk7QUFDdkM7QUFDQTtBQUNBLGlFQUFpRSxpRUFBWSxZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3JlY3VycmVudEZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlTGl9IGZyb20gJy4vcmVjdXJyZW50RnVuY3Rpb25zJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpe1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuXHJcbiAgY29uc3QgbGlua3MgPSBbY3JlYXRlTGkoJ0hvbWUnKSwgY3JlYXRlTGkoJ01lbnUnKSwgY3JlYXRlTGkoJ0NvbnRhY3QnKV07XHJcblxyXG4gIGxpbmtzLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xpbmsnKSk7XHJcbiAgbGlua3MuZm9yRWFjaChlbGVtZW50ID0+IHVsLmFwcGVuZENoaWxkKGVsZW1lbnQpKTtcclxuXHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHVsKTtcclxuXHJcbiAgcmV0dXJuIGhlYWRlcjtcclxufVxyXG5cclxuZXhwb3J0e2NyZWF0ZUhlYWRlcn07IiwiaW1wb3J0IHsgY3JlYXRlTGkgfSBmcm9tIFwiLi9yZWN1cnJlbnRGdW5jdGlvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnQoY29udGVudCl7XHJcbiAgY29uc3QgZmlyc3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChmaXJzdFRpdGxlKTtcclxuXHJcbiAgXHJcbiAgY29uc3QgcHJlc2VudGF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcHJlc2VudGF0aW9uLmNsYXNzTGlzdC5hZGQoJ3ByZXNlbnRhdGlvbicpO1xyXG4gIHByZXNlbnRhdGlvbi5pbm5lclRleHQgPSAnVGhlIENyYXp5IFJlc3RhdXJhbnQgaXMgYSBwbGFjZSB3aGVyZSB5b3UgY2FuIGVhdCwgc29tZSBub3JtYWwgZm9vZC4gV2UgYXJlIGNyYXp5IGJlY2F1c2Ugd2UgYXJlIGJ1aWxkaW5nIHRoaXMgd2VicGFnZSB1c2luZyBKUyBvbmx5LCBldmVuIHRob3VnaCBub3cgd2UgYXJlIHVzaW5nIHBpZWNlcyBvZiBodG1sIGFuZCBDU1MuJ1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJlc2VudGF0aW9uKTtcclxuXHJcbiAgXHJcbiAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBob3Vycy5jbGFzc0xpc3QuYWRkKCdob3VycycpO1xyXG4gIFxyXG4gIGNvbnN0IHNlY29uZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICBzZWNvbmRUaXRsZS5pbm5lclRleHQgPSAnSG91cnMnO1xyXG4gIGhvdXJzLmFwcGVuZENoaWxkKHNlY29uZFRpdGxlKTtcclxuXHJcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gIGNvbnN0IGxpcyA9IFtjcmVhdGVMaSgnU3VuZGF5IDg6MDAtMTY6MDAnKSwgY3JlYXRlTGkoJ01vbmRheSA4OjAwLTE2OjAwJyksIGNyZWF0ZUxpKCdUdWVzZGF5IDg6MDAtMTY6MDAnKSwgY3JlYXRlTGkoJ1dlZG5lc2RheSA4OjAwLTE2OjAwJyksIGNyZWF0ZUxpKCdUaHVyc2RheSA4OjAwLTE2OjAwJyksIGNyZWF0ZUxpKCdGcmlkYXkgODowMC0xNjowMCcpLCBjcmVhdGVMaSgnU2F0dXJkYXkgODowMC0xNjowMCcpXTtcclxuICBsaXMuZm9yRWFjaChlbGVtZW50ID0+IHVsLmFwcGVuZENoaWxkKGVsZW1lbnQpKTtcclxuICBob3Vycy5hcHBlbmRDaGlsZCh1bCk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChob3Vycyk7XHJcbn1cclxuXHJcbmV4cG9ydCB7Y3JlYXRlQ29udGVudH07IiwiZnVuY3Rpb24gY3JlYXRlTGkobmFtZSl7XHJcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIGxpLnRleHRDb250ZW50ID0gbmFtZTtcclxuICByZXR1cm4gbGlcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYW5Db250ZW50KGNvbnRlbnQpe1xyXG4gIC8vUmVtZW1iZXI6IHNvbWV0aGluZy5jaGlsZHJlbiByZXR1cm5zIGFuIEhUTUwgQ29sbGVjdGlvbi4gTm90IGFuIGFycmF5IVxyXG4gIGNvbnN0IGNoaWxkcmVuID0gWy4uLmNvbnRlbnQuY2hpbGRyZW5dOyBcclxuICBjaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4gY29udGVudC5yZW1vdmVDaGlsZChlbGVtZW50KSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7Y3JlYXRlTGksIGNsZWFuQ29udGVudH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVIZWFkZXIgfSBmcm9tICcuL2hlYWRlcic7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRlbnQgfSBmcm9tICcuL2hvbWVwYWdlJztcclxuaW1wb3J0IHsgY2xlYW5Db250ZW50IH0gZnJvbSAnLi9yZWN1cnJlbnRGdW5jdGlvbnMnO1xyXG5cclxuXHJcbmxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuXHJcblxyXG5jcmVhdGVDb250ZW50KGNvbnRlbnQpO1xyXG5kb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShjcmVhdGVIZWFkZXIoY29udGVudCksIGNvbnRlbnQpO1xyXG5cclxuY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGluaycpO1xyXG5saW5rcy5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNsZWFuQ29udGVudChjb250ZW50KSkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==