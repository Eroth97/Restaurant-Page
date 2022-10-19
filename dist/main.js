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
/* harmony export */   "createLi": () => (/* binding */ createLi)
/* harmony export */ });
function createLi(name){
  const li = document.createElement('li');
  li.textContent = name;
  return li
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



let content = document.getElementById('content');

(0,_homepage__WEBPACK_IMPORTED_MODULE_1__.createContent)(content);
document.body.insertBefore((0,_header__WEBPACK_IMPORTED_MODULE_0__.createHeader)(), content);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw2REFBUSxVQUFVLDZEQUFRLFVBQVUsNkRBQVE7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2RnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSw2REFBUSx1QkFBdUIsNkRBQVEsdUJBQXVCLDZEQUFRLHdCQUF3Qiw2REFBUSwwQkFBMEIsNkRBQVEseUJBQXlCLDZEQUFRLHVCQUF1Qiw2REFBUTtBQUN2TjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDTEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOd0M7QUFDRztBQUMzQztBQUNBO0FBQ0E7QUFDQSx3REFBYTtBQUNiLDJCQUEyQixxREFBWSxhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3JlY3VycmVudEZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlTGkgfSBmcm9tIFwiLi9yZWN1cnJlbnRGdW5jdGlvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpe1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuXHJcbiAgY29uc3QgbGlua3MgPSBbY3JlYXRlTGkoJ0hvbWUnKSwgY3JlYXRlTGkoJ01lbnUnKSwgY3JlYXRlTGkoJ0NvbnRhY3QnKV07XHJcblxyXG4gIGxpbmtzLmZvckVhY2goZWxlbWVudCA9PiB1bC5hcHBlbmRDaGlsZChlbGVtZW50KSk7XHJcblxyXG4gIGhlYWRlci5hcHBlbmRDaGlsZCh1bCk7XHJcblxyXG4gIHJldHVybiBoZWFkZXI7XHJcbn1cclxuXHJcbmV4cG9ydHtjcmVhdGVIZWFkZXJ9OyIsImltcG9ydCB7IGNyZWF0ZUxpIH0gZnJvbSBcIi4vcmVjdXJyZW50RnVuY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb250ZW50KGNvbnRlbnQpe1xyXG4gIGNvbnN0IGZpcnN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZmlyc3RUaXRsZSk7XHJcblxyXG4gIFxyXG4gIGNvbnN0IHByZXNlbnRhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHByZXNlbnRhdGlvbi5jbGFzc0xpc3QuYWRkKCdwcmVzZW50YXRpb24nKTtcclxuICBwcmVzZW50YXRpb24uaW5uZXJUZXh0ID0gJ1RoZSBDcmF6eSBSZXN0YXVyYW50IGlzIGEgcGxhY2Ugd2hlcmUgeW91IGNhbiBlYXQsIHNvbWUgbm9ybWFsIGZvb2QuIFdlIGFyZSBjcmF6eSBiZWNhdXNlIHdlIGFyZSBidWlsZGluZyB0aGlzIHdlYnBhZ2UgdXNpbmcgSlMgb25seSwgZXZlbiB0aG91Z2ggbm93IHdlIGFyZSB1c2luZyBwaWVjZXMgb2YgaHRtbCBhbmQgQ1NTLidcclxuICBjb250ZW50LmFwcGVuZENoaWxkKHByZXNlbnRhdGlvbik7XHJcblxyXG4gIFxyXG4gIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaG91cnMuY2xhc3NMaXN0LmFkZCgnaG91cnMnKTtcclxuICBcclxuICBjb25zdCBzZWNvbmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgc2Vjb25kVGl0bGUuaW5uZXJUZXh0ID0gJ0hvdXJzJztcclxuICBob3Vycy5hcHBlbmRDaGlsZChzZWNvbmRUaXRsZSk7XHJcblxyXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICBjb25zdCBsaXMgPSBbY3JlYXRlTGkoJ1N1bmRheSA4OjAwLTE2OjAwJyksIGNyZWF0ZUxpKCdNb25kYXkgODowMC0xNjowMCcpLCBjcmVhdGVMaSgnVHVlc2RheSA4OjAwLTE2OjAwJyksIGNyZWF0ZUxpKCdXZWRuZXNkYXkgODowMC0xNjowMCcpLCBjcmVhdGVMaSgnVGh1cnNkYXkgODowMC0xNjowMCcpLCBjcmVhdGVMaSgnRnJpZGF5IDg6MDAtMTY6MDAnKSwgY3JlYXRlTGkoJ1NhdHVyZGF5IDg6MDAtMTY6MDAnKV07XHJcbiAgbGlzLmZvckVhY2goZWxlbWVudCA9PiB1bC5hcHBlbmRDaGlsZChlbGVtZW50KSk7XHJcbiAgaG91cnMuYXBwZW5kQ2hpbGQodWwpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG91cnMpO1xyXG59XHJcblxyXG5leHBvcnQge2NyZWF0ZUNvbnRlbnR9OyIsImZ1bmN0aW9uIGNyZWF0ZUxpKG5hbWUpe1xyXG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICBsaS50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgcmV0dXJuIGxpXHJcbn1cclxuXHJcbmV4cG9ydCB7Y3JlYXRlTGl9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlSGVhZGVyIH0gZnJvbSBcIi4vaGVhZGVyXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRlbnQgfSBmcm9tIFwiLi9ob21lcGFnZVwiO1xyXG5cclxubGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG5cclxuY3JlYXRlQ29udGVudChjb250ZW50KTtcclxuZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoY3JlYXRlSGVhZGVyKCksIGNvbnRlbnQpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==