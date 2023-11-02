/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuContainer: () => (/* binding */ menuContainer)
/* harmony export */ });
/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load.js */ "./src/page-load.js");



function createCard(cssClass) {
    const newDiv = document.createElement('div');
    newDiv.classList.add(cssClass);
    return newDiv;
}

const menuContainer = createCard('menu');

const card1 = (0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.createContainer)(menuContainer, 'card');

function newMenuItem (cardNumber, item, src, alt, ingredients) {
    (0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.createImg)(document.createElement('img'), src, 50, alt, cardNumber);
    (0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.createTextElement)(document.createElement('div'), item, cardNumber);
    (0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.createTextElement)(document.createElement('p'), ingredients, cardNumber);
}

newMenuItem(card1, 'Space Burger', './img/hamburger.svg', 'Pasta graphic', 
'juicy spacecow, milky way mayo, asteroid lettuce');

const card2 = (0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.createContainer)(menuContainer, 'card');

newMenuItem(card2, 'Space Croissant', './img/food-croissant.svg', 'Croissant graphic', 
'flaky, buttery, delicious');

const card3 = (0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.createContainer)(menuContainer, 'card');

newMenuItem(card3, 'Mystery Drumstick', './img/food-drumstick.svg', 'Drumstick graphic', 
'pan fried, sweet meat, origin unknown');

const card4 = (0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.createContainer)(menuContainer, 'card');

newMenuItem(card4, 'Galaxy Noodles', './img/noodles.svg', 'Bowl of noodles graphic', 
'famous galactic five spice, beef broth, hot chilis');

const card5 = (0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.createContainer)(menuContainer, 'card');

newMenuItem(card5, 'Moon Dog', './img/food-hot-dog.svg', 'Hot dog graphic', 
'charcoal grilled, toasted bun, fried onions');

const card6 = (0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.createContainer)(menuContainer, 'card');

newMenuItem(card6, 'Earth Turkey', './img/food-turkey.svg', 'Cooked turkey graphic', 
'slow roasted, crispy, succulent');

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContainer: () => (/* binding */ createContainer),
/* harmony export */   createImg: () => (/* binding */ createImg),
/* harmony export */   createTextElement: () => (/* binding */ createTextElement)
/* harmony export */ });


const createTextElement = (element, text, parent) => {
    element.textContent = text;
    parent.appendChild(element);
}

const createImg = (element, src, width, alt, parent) => {
    element.setAttribute("src", src);
    element.setAttribute("width", width);
    element.setAttribute("alt", alt);
    parent.appendChild(element);
}

const createContainer = (parent, cssClass) => {
    const newDiv = document.createElement('div');
    newDiv.classList.add(cssClass);
    parent.appendChild(newDiv);
    return newDiv;
};

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
/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load.js */ "./src/page-load.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");



const pageLoadElements = (function () {
    const divContent = document.querySelector('#content')
    const p = document.createElement('p');
    const pText = `Milliways, better known as the Restaurant at the End of the Universe, 
    is a five star restaurant situated at the end of time and matter. 
    Its main attraction is allowing diners to view a Gnab Gib, 
    before desserts are served.`;

    const divHeader = (0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.createContainer)(divContent, 'header');

    (0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.createTextElement)(document.createElement('h1'), 'Milliways', divHeader);
    (0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.createTextElement)(document.createElement('span'), 'Home', divHeader);
    (0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.createTextElement)(document.createElement('span'), 'Menu', divHeader);
    (0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.createTextElement)(document.createElement('span'), 'Contact', divHeader);

    (0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.createTextElement)(p, pText, divContent);

    divContent.appendChild(_menu_js__WEBPACK_IMPORTED_MODULE_1__.menuContainer);
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNkU7QUFDdEQ7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsY0FBYyw4REFBZTs7QUFFN0I7QUFDQSxJQUFJLHdEQUFTO0FBQ2IsSUFBSSxnRUFBaUI7QUFDckIsSUFBSSxnRUFBaUI7QUFDckI7O0FBRUE7QUFDQTs7QUFFQSxjQUFjLDhEQUFlOztBQUU3QjtBQUNBOztBQUVBLGNBQWMsOERBQWU7O0FBRTdCO0FBQ0E7O0FBRUEsY0FBYyw4REFBZTs7QUFFN0I7QUFDQTs7QUFFQSxjQUFjLDhEQUFlOztBQUU3QjtBQUNBOztBQUVBLGNBQWMsOERBQWU7O0FBRTdCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q3VEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNuQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNONkU7QUFDckM7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQiw4REFBZTs7QUFFckMsSUFBSSxnRUFBaUI7QUFDckIsSUFBSSxnRUFBaUI7QUFDckIsSUFBSSxnRUFBaUI7QUFDckIsSUFBSSxnRUFBaUI7O0FBRXJCLElBQUksZ0VBQWlCOztBQUVyQiwyQkFBMkIsbURBQWE7QUFDeEMsQ0FBQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVDb250YWluZXIsIGNyZWF0ZUltZywgY3JlYXRlVGV4dEVsZW1lbnR9IGZyb20gJy4vcGFnZS1sb2FkLmpzJztcbmV4cG9ydCB7bWVudUNvbnRhaW5lcn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUNhcmQoY3NzQ2xhc3MpIHtcbiAgICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XG4gICAgcmV0dXJuIG5ld0Rpdjtcbn1cblxuY29uc3QgbWVudUNvbnRhaW5lciA9IGNyZWF0ZUNhcmQoJ21lbnUnKTtcblxuY29uc3QgY2FyZDEgPSBjcmVhdGVDb250YWluZXIobWVudUNvbnRhaW5lciwgJ2NhcmQnKTtcblxuZnVuY3Rpb24gbmV3TWVudUl0ZW0gKGNhcmROdW1iZXIsIGl0ZW0sIHNyYywgYWx0LCBpbmdyZWRpZW50cykge1xuICAgIGNyZWF0ZUltZyhkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKSwgc3JjLCA1MCwgYWx0LCBjYXJkTnVtYmVyKTtcbiAgICBjcmVhdGVUZXh0RWxlbWVudChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwgaXRlbSwgY2FyZE51bWJlcik7XG4gICAgY3JlYXRlVGV4dEVsZW1lbnQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLCBpbmdyZWRpZW50cywgY2FyZE51bWJlcik7XG59XG5cbm5ld01lbnVJdGVtKGNhcmQxLCAnU3BhY2UgQnVyZ2VyJywgJy4vaW1nL2hhbWJ1cmdlci5zdmcnLCAnUGFzdGEgZ3JhcGhpYycsIFxuJ2p1aWN5IHNwYWNlY293LCBtaWxreSB3YXkgbWF5bywgYXN0ZXJvaWQgbGV0dHVjZScpO1xuXG5jb25zdCBjYXJkMiA9IGNyZWF0ZUNvbnRhaW5lcihtZW51Q29udGFpbmVyLCAnY2FyZCcpO1xuXG5uZXdNZW51SXRlbShjYXJkMiwgJ1NwYWNlIENyb2lzc2FudCcsICcuL2ltZy9mb29kLWNyb2lzc2FudC5zdmcnLCAnQ3JvaXNzYW50IGdyYXBoaWMnLCBcbidmbGFreSwgYnV0dGVyeSwgZGVsaWNpb3VzJyk7XG5cbmNvbnN0IGNhcmQzID0gY3JlYXRlQ29udGFpbmVyKG1lbnVDb250YWluZXIsICdjYXJkJyk7XG5cbm5ld01lbnVJdGVtKGNhcmQzLCAnTXlzdGVyeSBEcnVtc3RpY2snLCAnLi9pbWcvZm9vZC1kcnVtc3RpY2suc3ZnJywgJ0RydW1zdGljayBncmFwaGljJywgXG4ncGFuIGZyaWVkLCBzd2VldCBtZWF0LCBvcmlnaW4gdW5rbm93bicpO1xuXG5jb25zdCBjYXJkNCA9IGNyZWF0ZUNvbnRhaW5lcihtZW51Q29udGFpbmVyLCAnY2FyZCcpO1xuXG5uZXdNZW51SXRlbShjYXJkNCwgJ0dhbGF4eSBOb29kbGVzJywgJy4vaW1nL25vb2RsZXMuc3ZnJywgJ0Jvd2wgb2Ygbm9vZGxlcyBncmFwaGljJywgXG4nZmFtb3VzIGdhbGFjdGljIGZpdmUgc3BpY2UsIGJlZWYgYnJvdGgsIGhvdCBjaGlsaXMnKTtcblxuY29uc3QgY2FyZDUgPSBjcmVhdGVDb250YWluZXIobWVudUNvbnRhaW5lciwgJ2NhcmQnKTtcblxubmV3TWVudUl0ZW0oY2FyZDUsICdNb29uIERvZycsICcuL2ltZy9mb29kLWhvdC1kb2cuc3ZnJywgJ0hvdCBkb2cgZ3JhcGhpYycsIFxuJ2NoYXJjb2FsIGdyaWxsZWQsIHRvYXN0ZWQgYnVuLCBmcmllZCBvbmlvbnMnKTtcblxuY29uc3QgY2FyZDYgPSBjcmVhdGVDb250YWluZXIobWVudUNvbnRhaW5lciwgJ2NhcmQnKTtcblxubmV3TWVudUl0ZW0oY2FyZDYsICdFYXJ0aCBUdXJrZXknLCAnLi9pbWcvZm9vZC10dXJrZXkuc3ZnJywgJ0Nvb2tlZCB0dXJrZXkgZ3JhcGhpYycsIFxuJ3Nsb3cgcm9hc3RlZCwgY3Jpc3B5LCBzdWNjdWxlbnQnKTsiLCJleHBvcnQge2NyZWF0ZVRleHRFbGVtZW50LCBjcmVhdGVJbWcsIGNyZWF0ZUNvbnRhaW5lcn07XG5cbmNvbnN0IGNyZWF0ZVRleHRFbGVtZW50ID0gKGVsZW1lbnQsIHRleHQsIHBhcmVudCkgPT4ge1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbn1cblxuY29uc3QgY3JlYXRlSW1nID0gKGVsZW1lbnQsIHNyYywgd2lkdGgsIGFsdCwgcGFyZW50KSA9PiB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgc3JjKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIHdpZHRoKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImFsdFwiLCBhbHQpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbn1cblxuY29uc3QgY3JlYXRlQ29udGFpbmVyID0gKHBhcmVudCwgY3NzQ2xhc3MpID0+IHtcbiAgICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKG5ld0Rpdik7XG4gICAgcmV0dXJuIG5ld0Rpdjtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2NyZWF0ZUNvbnRhaW5lciwgY3JlYXRlSW1nLCBjcmVhdGVUZXh0RWxlbWVudH0gZnJvbSAnLi9wYWdlLWxvYWQuanMnO1xuaW1wb3J0IHttZW51Q29udGFpbmVyfSBmcm9tICcuL21lbnUuanMnO1xuXG5jb25zdCBwYWdlTG9hZEVsZW1lbnRzID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBkaXZDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcFRleHQgPSBgTWlsbGl3YXlzLCBiZXR0ZXIga25vd24gYXMgdGhlIFJlc3RhdXJhbnQgYXQgdGhlIEVuZCBvZiB0aGUgVW5pdmVyc2UsIFxuICAgIGlzIGEgZml2ZSBzdGFyIHJlc3RhdXJhbnQgc2l0dWF0ZWQgYXQgdGhlIGVuZCBvZiB0aW1lIGFuZCBtYXR0ZXIuIFxuICAgIEl0cyBtYWluIGF0dHJhY3Rpb24gaXMgYWxsb3dpbmcgZGluZXJzIHRvIHZpZXcgYSBHbmFiIEdpYiwgXG4gICAgYmVmb3JlIGRlc3NlcnRzIGFyZSBzZXJ2ZWQuYDtcblxuICAgIGNvbnN0IGRpdkhlYWRlciA9IGNyZWF0ZUNvbnRhaW5lcihkaXZDb250ZW50LCAnaGVhZGVyJyk7XG5cbiAgICBjcmVhdGVUZXh0RWxlbWVudChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpLCAnTWlsbGl3YXlzJywgZGl2SGVhZGVyKTtcbiAgICBjcmVhdGVUZXh0RWxlbWVudChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksICdIb21lJywgZGl2SGVhZGVyKTtcbiAgICBjcmVhdGVUZXh0RWxlbWVudChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksICdNZW51JywgZGl2SGVhZGVyKTtcbiAgICBjcmVhdGVUZXh0RWxlbWVudChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksICdDb250YWN0JywgZGl2SGVhZGVyKTtcblxuICAgIGNyZWF0ZVRleHRFbGVtZW50KHAsIHBUZXh0LCBkaXZDb250ZW50KTtcblxuICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG59KSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==