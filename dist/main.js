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
/* harmony export */   "addToMenu": () => (/* binding */ addToMenu),
/* harmony export */   "createMenu": () => (/* binding */ createMenu)
/* harmony export */ });
/* harmony import */ var _recurrentFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recurrentFunctions */ "./src/recurrentFunctions.js");


function createMenu(content, ...args){
  content.appendChild((0,_recurrentFunctions__WEBPACK_IMPORTED_MODULE_0__.createTitle)('Menu'));

  const menu = document.createElement('ul');
  menu.classList.add('menu');
  const meals = [(0,_recurrentFunctions__WEBPACK_IMPORTED_MODULE_0__.createLiWithP)('Hamburger'), (0,_recurrentFunctions__WEBPACK_IMPORTED_MODULE_0__.createLiWithP)('Hot Dog'), (0,_recurrentFunctions__WEBPACK_IMPORTED_MODULE_0__.createLiWithP)('Pizza')];
  
  for(let i = 0; i < args.length; i++){
    meals[i].appendChild(args[i]);
  }

  meals.forEach(element => menu.appendChild(element));
  content.appendChild(menu);
}

function addToMenu(content, weird){
  content.appendChild(weird);
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
/* harmony export */   "createLiWithP": () => (/* binding */ createLiWithP),
/* harmony export */   "createTitle": () => (/* binding */ createTitle)
/* harmony export */ });
function createLi(text){
  const li = document.createElement('li');
  li.textContent = text;
  return li
}

function createLiWithP(text){
  const li = document.createElement('li');
  const p = document.createElement('p');
  p.textContent = text;
  li.appendChild(p);
  return li;
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
let hamburger = document.createElement('img');
let hotDog = document.createElement('img');
let pizza = document.createElement('img');

hamburger.setAttribute('src', './Images/Hamburger.svg');
hotDog.setAttribute('src', './Images/HotDog.svg');
pizza.setAttribute('src', './Images/Pizza.svg')


;(0,_homepage__WEBPACK_IMPORTED_MODULE_1__.createContent)(content);
document.body.insertBefore((0,_header__WEBPACK_IMPORTED_MODULE_0__.createHeader)(content), content);

const links = document.querySelectorAll('.link');
links.forEach(element => element.addEventListener('click', () => (0,_recurrentFunctions__WEBPACK_IMPORTED_MODULE_2__.cleanContent)(content)));

links[0].addEventListener('click', () => (0,_homepage__WEBPACK_IMPORTED_MODULE_1__.createContent)(content));
links[1].addEventListener('click', () => (0,_menu__WEBPACK_IMPORTED_MODULE_3__.createMenu)(content, hamburger, hotDog, pizza));
links[1].addEventListener('click', () => (0,_menu__WEBPACK_IMPORTED_MODULE_3__.addToMenu)(content, weird));
links[2].addEventListener('click', () => (0,_contact__WEBPACK_IMPORTED_MODULE_4__.createContact)(content));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNkQ7QUFDN0Q7QUFDQTtBQUNBLHNCQUFzQixnRUFBVztBQUNqQztBQUNBO0FBQ0EsZUFBZSw2REFBUSxtQkFBbUIsNkRBQVEsb0JBQW9CLDZEQUFRO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw2REFBUSxVQUFVLDZEQUFRLFVBQVUsNkRBQVE7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZjZEO0FBQzdEO0FBQ0E7QUFDQSxzQkFBc0IsZ0VBQVc7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDZEQUFRLHdCQUF3Qiw2REFBUSx3QkFBd0IsNkRBQVEseUJBQXlCLDZEQUFRLDJCQUEyQiw2REFBUSwwQkFBMEIsNkRBQVEsd0JBQXdCLDZEQUFRO0FBQzdOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJnRTtBQUNoRTtBQUNBO0FBQ0Esc0JBQXNCLGdFQUFXO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrRUFBYSxlQUFlLGtFQUFhLGFBQWEsa0VBQWE7QUFDcEY7QUFDQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDekJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTndDO0FBQ0c7QUFDUztBQUNMO0FBQ0w7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUFhO0FBQ2IsMkJBQTJCLHFEQUFZO0FBQ3ZDO0FBQ0E7QUFDQSxpRUFBaUUsaUVBQVk7QUFDN0U7QUFDQSx5Q0FBeUMsd0RBQWE7QUFDdEQseUNBQXlDLGlEQUFVO0FBQ25ELHlDQUF5QyxnREFBUztBQUNsRCx5Q0FBeUMsdURBQWEsVyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9yZWN1cnJlbnRGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUxpLCBjcmVhdGVUaXRsZSB9IGZyb20gXCIuL3JlY3VycmVudEZ1bmN0aW9uc1wiO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdChjb250ZW50KXtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVRpdGxlKCdDb250YWN0JykpO1xyXG5cclxuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgY29uc3QgbGlzID0gW2NyZWF0ZUxpKCdGaXJzdCBDb250YWN0JyksIGNyZWF0ZUxpKCdTZWNvbmQgQ29udGFjdCcpLCBjcmVhdGVMaSgnTGFzdCBDb250YWN0JyldO1xyXG5cclxuICBsaXMuZm9yRWFjaChlbGVtZW50ID0+IHVsLmFwcGVuZENoaWxkKGVsZW1lbnQpKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKHVsKTtcclxufVxyXG5cclxuZXhwb3J0IHtjcmVhdGVDb250YWN0fTsiLCJpbXBvcnQgeyBjcmVhdGVMaSB9IGZyb20gJy4vcmVjdXJyZW50RnVuY3Rpb25zJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpe1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuXHJcbiAgY29uc3QgbGlua3MgPSBbY3JlYXRlTGkoJ0hvbWUnKSwgY3JlYXRlTGkoJ01lbnUnKSwgY3JlYXRlTGkoJ0NvbnRhY3QnKV07XHJcblxyXG4gIGxpbmtzLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xpbmsnKSk7XHJcbiAgbGlua3MuZm9yRWFjaChlbGVtZW50ID0+IHVsLmFwcGVuZENoaWxkKGVsZW1lbnQpKTtcclxuXHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHVsKTtcclxuXHJcbiAgcmV0dXJuIGhlYWRlcjtcclxufVxyXG5cclxuZXhwb3J0e2NyZWF0ZUhlYWRlcn07IiwiaW1wb3J0IHsgY3JlYXRlTGksIGNyZWF0ZVRpdGxlIH0gZnJvbSBcIi4vcmVjdXJyZW50RnVuY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb250ZW50KGNvbnRlbnQpe1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlVGl0bGUoJ1RoZSBDcmF6eSBSZXN0YXVyYW50JykpO1xyXG5cclxuICBcclxuICBjb25zdCBwcmVzZW50YXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwcmVzZW50YXRpb24uY2xhc3NMaXN0LmFkZCgncHJlc2VudGF0aW9uJyk7XHJcbiAgcHJlc2VudGF0aW9uLmlubmVyVGV4dCA9ICdUaGUgQ3JhenkgUmVzdGF1cmFudCBpcyBhIHBsYWNlIHdoZXJlIHlvdSBjYW4gZWF0LCBzb21lIG5vcm1hbCBmb29kLiBXZSBhcmUgY3JhenkgYmVjYXVzZSB3ZSBhcmUgYnVpbGRpbmcgdGhpcyB3ZWJwYWdlIHVzaW5nIEpTIG9ubHksIGV2ZW4gdGhvdWdoIG5vdyB3ZSBhcmUgdXNpbmcgcGllY2VzIG9mIGh0bWwgYW5kIENTUy4nXHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChwcmVzZW50YXRpb24pO1xyXG5cclxuICBcclxuICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGhvdXJzLmNsYXNzTGlzdC5hZGQoJ2hvdXJzJyk7XHJcbiAgXHJcbiAgY29uc3Qgc2Vjb25kVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gIHNlY29uZFRpdGxlLmlubmVyVGV4dCA9ICdIb3Vycyc7XHJcbiAgaG91cnMuYXBwZW5kQ2hpbGQoc2Vjb25kVGl0bGUpO1xyXG5cclxuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgY29uc3QgbGlzID0gW2NyZWF0ZUxpKCdTdW5kYXk6IDg6MDAtMTY6MDAnKSwgY3JlYXRlTGkoJ01vbmRheTogODowMC0xNjowMCcpLCBjcmVhdGVMaSgnVHVlc2RheTogODowMC0xNjowMCcpLCBjcmVhdGVMaSgnV2VkbmVzZGF5OiA4OjAwLTE2OjAwJyksIGNyZWF0ZUxpKCdUaHVyc2RheTogODowMC0xNjowMCcpLCBjcmVhdGVMaSgnRnJpZGF5OiA4OjAwLTE2OjAwJyksIGNyZWF0ZUxpKCdTYXR1cmRheTogODowMC0xNjowMCcpXTtcclxuICBsaXMuZm9yRWFjaChlbGVtZW50ID0+IHVsLmFwcGVuZENoaWxkKGVsZW1lbnQpKTtcclxuICBob3Vycy5hcHBlbmRDaGlsZCh1bCk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChob3Vycyk7XHJcbn1cclxuXHJcbmV4cG9ydCB7Y3JlYXRlQ29udGVudH07IiwiaW1wb3J0IHtjcmVhdGVMaVdpdGhQLCBjcmVhdGVUaXRsZX0gZnJvbSAnLi9yZWN1cnJlbnRGdW5jdGlvbnMnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWVudShjb250ZW50LCAuLi5hcmdzKXtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVRpdGxlKCdNZW51JykpO1xyXG5cclxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcclxuICBjb25zdCBtZWFscyA9IFtjcmVhdGVMaVdpdGhQKCdIYW1idXJnZXInKSwgY3JlYXRlTGlXaXRoUCgnSG90IERvZycpLCBjcmVhdGVMaVdpdGhQKCdQaXp6YScpXTtcclxuICBcclxuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKyl7XHJcbiAgICBtZWFsc1tpXS5hcHBlbmRDaGlsZChhcmdzW2ldKTtcclxuICB9XHJcblxyXG4gIG1lYWxzLmZvckVhY2goZWxlbWVudCA9PiBtZW51LmFwcGVuZENoaWxkKGVsZW1lbnQpKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRUb01lbnUoY29udGVudCwgd2VpcmQpe1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQod2VpcmQpO1xyXG59XHJcblxyXG5leHBvcnQge2NyZWF0ZU1lbnUsIGFkZFRvTWVudX07IiwiZnVuY3Rpb24gY3JlYXRlTGkodGV4dCl7XHJcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIGxpLnRleHRDb250ZW50ID0gdGV4dDtcclxuICByZXR1cm4gbGlcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlXaXRoUCh0ZXh0KXtcclxuICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBwLnRleHRDb250ZW50ID0gdGV4dDtcclxuICBsaS5hcHBlbmRDaGlsZChwKTtcclxuICByZXR1cm4gbGk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRpdGxlKHRpdGxlTmFtZSl7XHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIHRpdGxlLnRleHRDb250ZW50ID0gdGl0bGVOYW1lO1xyXG4gIHJldHVybiB0aXRsZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYW5Db250ZW50KGNvbnRlbnQpe1xyXG4gIC8vUmVtZW1iZXI6IHNvbWV0aGluZy5jaGlsZHJlbiByZXR1cm5zIGFuIEhUTUwgQ29sbGVjdGlvbi4gTm90IGFuIGFycmF5IVxyXG4gIGNvbnN0IGNoaWxkcmVuID0gWy4uLmNvbnRlbnQuY2hpbGRyZW5dOyBcclxuICBjaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4gY29udGVudC5yZW1vdmVDaGlsZChlbGVtZW50KSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7Y3JlYXRlTGksIGNyZWF0ZUxpV2l0aFAsIGNsZWFuQ29udGVudCwgY3JlYXRlVGl0bGV9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlSGVhZGVyIH0gZnJvbSAnLi9oZWFkZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250ZW50IH0gZnJvbSAnLi9ob21lcGFnZSc7XHJcbmltcG9ydCB7IGNsZWFuQ29udGVudCB9IGZyb20gJy4vcmVjdXJyZW50RnVuY3Rpb25zJztcclxuaW1wb3J0IHsgYWRkVG9NZW51LCBjcmVhdGVNZW51IH0gZnJvbSAnLi9tZW51JztcclxuaW1wb3J0IHsgY3JlYXRlQ29udGFjdCB9IGZyb20gJy4vY29udGFjdCc7XHJcblxyXG5sZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbmxldCBoYW1idXJnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxubGV0IGhvdERvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5sZXQgcGl6emEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHJcbmhhbWJ1cmdlci5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL0ltYWdlcy9IYW1idXJnZXIuc3ZnJyk7XHJcbmhvdERvZy5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL0ltYWdlcy9Ib3REb2cuc3ZnJyk7XHJcbnBpenphLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vSW1hZ2VzL1BpenphLnN2ZycpXHJcblxyXG5cclxuY3JlYXRlQ29udGVudChjb250ZW50KTtcclxuZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoY3JlYXRlSGVhZGVyKGNvbnRlbnQpLCBjb250ZW50KTtcclxuXHJcbmNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpbmsnKTtcclxubGlua3MuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbGVhbkNvbnRlbnQoY29udGVudCkpKTtcclxuXHJcbmxpbmtzWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY3JlYXRlQ29udGVudChjb250ZW50KSk7XHJcbmxpbmtzWzFdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY3JlYXRlTWVudShjb250ZW50LCBoYW1idXJnZXIsIGhvdERvZywgcGl6emEpKTtcclxubGlua3NbMV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBhZGRUb01lbnUoY29udGVudCwgd2VpcmQpKTtcclxubGlua3NbMl0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjcmVhdGVDb250YWN0KGNvbnRlbnQpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=