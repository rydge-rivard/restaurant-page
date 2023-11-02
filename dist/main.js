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




const menuContainer = (0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.createCard)('menu');

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
/* harmony export */   createCard: () => (/* binding */ createCard),
/* harmony export */   createClassTextElement: () => (/* binding */ createClassTextElement),
/* harmony export */   createContainer: () => (/* binding */ createContainer),
/* harmony export */   createImg: () => (/* binding */ createImg),
/* harmony export */   createTextElement: () => (/* binding */ createTextElement)
/* harmony export */ });


const createTextElement = (element, text, parent) => {
    element.textContent = text;
    parent.appendChild(element);
}

const createClassTextElement = (element, text, parent, cssClass) => {
    element.textContent = text;
    parent.appendChild(element);
    element.classList.add(cssClass);
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

const createCard = (cssClass) => {
    const newDiv = document.createElement('div');
    newDiv.classList.add(cssClass);
    newDiv.classList.add('active');
    return newDiv;
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
/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load.js */ "./src/page-load.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");



const pageLoadElements = (function () {
    const divContent = document.querySelector('#content')
    // const p = document.createElement('p');
    // const pText = `Milliways, better known as the Restaurant at the End of the Universe, 
    // is a five star restaurant situated at the end of time and matter. 
    // Its main attraction is allowing diners to view a Gnab Gib, 
    // before desserts are served.`;
    // createTextElement(p, pText, divContent);

    const divHeader = (0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.createContainer)(divContent, 'header');

    (0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.createTextElement)(document.createElement('h1'), 'Milliways', divHeader);
    (0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.createClassTextElement)(document.createElement('span'), 'Home', divHeader, 'homeHeader');
    (0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.createClassTextElement)(document.createElement('span'), 'Menu', divHeader, 'menuHeader');
    (0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.createClassTextElement)(document.createElement('span'), 'Contact', divHeader, 'contactHeader');


    divContent.appendChild(_menu_js__WEBPACK_IMPORTED_MODULE_1__.menuContainer);
})();

const render = (function () {
    const menuOptions = document.querySelectorAll('span')
    menuOptions.forEach(option => {
        option.addEventListener('click', (option) => renderPage(option));
    });

    function removeActivePage () {
        const activeDiv = document.querySelector('.active');
        activeDiv.remove();
    }

    //need to select the write page based on which span was clicked
    //if span.homeHeader => divContent.appendChild(homeContainer);

    function addSelectedPage (element) {
        if (element.classList.contains('menuHeader')) {
            divContent.appendChild(_menu_js__WEBPACK_IMPORTED_MODULE_1__.menuContainer);
        }
    }

    function renderPage (element) {
        removeActivePage();
        addSelectedPage(element);
    }

})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBeUY7QUFDbEU7OztBQUd2QixzQkFBc0IseURBQVU7O0FBRWhDLGNBQWMsOERBQWU7O0FBRTdCO0FBQ0EsSUFBSSx3REFBUztBQUNiLElBQUksZ0VBQWlCO0FBQ3JCLElBQUksZ0VBQWlCO0FBQ3JCOztBQUVBO0FBQ0E7O0FBRUEsY0FBYyw4REFBZTs7QUFFN0I7QUFDQTs7QUFFQSxjQUFjLDhEQUFlOztBQUU3QjtBQUNBOztBQUVBLGNBQWMsOERBQWU7O0FBRTdCO0FBQ0E7O0FBRUEsY0FBYyw4REFBZTs7QUFFN0I7QUFDQTs7QUFFQSxjQUFjLDhEQUFlOztBQUU3QjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QzJGOztBQUUzRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDaENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjBGO0FBQ2xEOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQiw4REFBZTs7QUFFckMsSUFBSSxnRUFBaUI7QUFDckIsSUFBSSxxRUFBc0I7QUFDMUIsSUFBSSxxRUFBc0I7QUFDMUIsSUFBSSxxRUFBc0I7OztBQUcxQiwyQkFBMkIsbURBQWE7QUFDeEMsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DLG1EQUFhO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVDb250YWluZXIsIGNyZWF0ZUltZywgY3JlYXRlVGV4dEVsZW1lbnQsIGNyZWF0ZUNhcmR9IGZyb20gJy4vcGFnZS1sb2FkLmpzJztcbmV4cG9ydCB7bWVudUNvbnRhaW5lcn07XG5cblxuY29uc3QgbWVudUNvbnRhaW5lciA9IGNyZWF0ZUNhcmQoJ21lbnUnKTtcblxuY29uc3QgY2FyZDEgPSBjcmVhdGVDb250YWluZXIobWVudUNvbnRhaW5lciwgJ2NhcmQnKTtcblxuZnVuY3Rpb24gbmV3TWVudUl0ZW0gKGNhcmROdW1iZXIsIGl0ZW0sIHNyYywgYWx0LCBpbmdyZWRpZW50cykge1xuICAgIGNyZWF0ZUltZyhkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKSwgc3JjLCA1MCwgYWx0LCBjYXJkTnVtYmVyKTtcbiAgICBjcmVhdGVUZXh0RWxlbWVudChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwgaXRlbSwgY2FyZE51bWJlcik7XG4gICAgY3JlYXRlVGV4dEVsZW1lbnQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLCBpbmdyZWRpZW50cywgY2FyZE51bWJlcik7XG59XG5cbm5ld01lbnVJdGVtKGNhcmQxLCAnU3BhY2UgQnVyZ2VyJywgJy4vaW1nL2hhbWJ1cmdlci5zdmcnLCAnUGFzdGEgZ3JhcGhpYycsIFxuJ2p1aWN5IHNwYWNlY293LCBtaWxreSB3YXkgbWF5bywgYXN0ZXJvaWQgbGV0dHVjZScpO1xuXG5jb25zdCBjYXJkMiA9IGNyZWF0ZUNvbnRhaW5lcihtZW51Q29udGFpbmVyLCAnY2FyZCcpO1xuXG5uZXdNZW51SXRlbShjYXJkMiwgJ1NwYWNlIENyb2lzc2FudCcsICcuL2ltZy9mb29kLWNyb2lzc2FudC5zdmcnLCAnQ3JvaXNzYW50IGdyYXBoaWMnLCBcbidmbGFreSwgYnV0dGVyeSwgZGVsaWNpb3VzJyk7XG5cbmNvbnN0IGNhcmQzID0gY3JlYXRlQ29udGFpbmVyKG1lbnVDb250YWluZXIsICdjYXJkJyk7XG5cbm5ld01lbnVJdGVtKGNhcmQzLCAnTXlzdGVyeSBEcnVtc3RpY2snLCAnLi9pbWcvZm9vZC1kcnVtc3RpY2suc3ZnJywgJ0RydW1zdGljayBncmFwaGljJywgXG4ncGFuIGZyaWVkLCBzd2VldCBtZWF0LCBvcmlnaW4gdW5rbm93bicpO1xuXG5jb25zdCBjYXJkNCA9IGNyZWF0ZUNvbnRhaW5lcihtZW51Q29udGFpbmVyLCAnY2FyZCcpO1xuXG5uZXdNZW51SXRlbShjYXJkNCwgJ0dhbGF4eSBOb29kbGVzJywgJy4vaW1nL25vb2RsZXMuc3ZnJywgJ0Jvd2wgb2Ygbm9vZGxlcyBncmFwaGljJywgXG4nZmFtb3VzIGdhbGFjdGljIGZpdmUgc3BpY2UsIGJlZWYgYnJvdGgsIGhvdCBjaGlsaXMnKTtcblxuY29uc3QgY2FyZDUgPSBjcmVhdGVDb250YWluZXIobWVudUNvbnRhaW5lciwgJ2NhcmQnKTtcblxubmV3TWVudUl0ZW0oY2FyZDUsICdNb29uIERvZycsICcuL2ltZy9mb29kLWhvdC1kb2cuc3ZnJywgJ0hvdCBkb2cgZ3JhcGhpYycsIFxuJ2NoYXJjb2FsIGdyaWxsZWQsIHRvYXN0ZWQgYnVuLCBmcmllZCBvbmlvbnMnKTtcblxuY29uc3QgY2FyZDYgPSBjcmVhdGVDb250YWluZXIobWVudUNvbnRhaW5lciwgJ2NhcmQnKTtcblxubmV3TWVudUl0ZW0oY2FyZDYsICdFYXJ0aCBUdXJrZXknLCAnLi9pbWcvZm9vZC10dXJrZXkuc3ZnJywgJ0Nvb2tlZCB0dXJrZXkgZ3JhcGhpYycsIFxuJ3Nsb3cgcm9hc3RlZCwgY3Jpc3B5LCBzdWNjdWxlbnQnKTsiLCJleHBvcnQge2NyZWF0ZVRleHRFbGVtZW50LCBjcmVhdGVJbWcsIGNyZWF0ZUNvbnRhaW5lciwgY3JlYXRlQ2xhc3NUZXh0RWxlbWVudCwgY3JlYXRlQ2FyZH07XG5cbmNvbnN0IGNyZWF0ZVRleHRFbGVtZW50ID0gKGVsZW1lbnQsIHRleHQsIHBhcmVudCkgPT4ge1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbn1cblxuY29uc3QgY3JlYXRlQ2xhc3NUZXh0RWxlbWVudCA9IChlbGVtZW50LCB0ZXh0LCBwYXJlbnQsIGNzc0NsYXNzKSA9PiB7XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XG59XG5cbmNvbnN0IGNyZWF0ZUltZyA9IChlbGVtZW50LCBzcmMsIHdpZHRoLCBhbHQsIHBhcmVudCkgPT4ge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwic3JjXCIsIHNyYyk7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCB3aWR0aCk7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgYWx0KTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG59XG5cbmNvbnN0IGNyZWF0ZUNvbnRhaW5lciA9IChwYXJlbnQsIGNzc0NsYXNzKSA9PiB7XG4gICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChuZXdEaXYpO1xuICAgIHJldHVybiBuZXdEaXY7XG59O1xuXG5jb25zdCBjcmVhdGVDYXJkID0gKGNzc0NsYXNzKSA9PiB7XG4gICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xuICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICByZXR1cm4gbmV3RGl2O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2NyZWF0ZUNvbnRhaW5lciwgY3JlYXRlVGV4dEVsZW1lbnQsIGNyZWF0ZUNsYXNzVGV4dEVsZW1lbnR9IGZyb20gJy4vcGFnZS1sb2FkLmpzJztcbmltcG9ydCB7bWVudUNvbnRhaW5lcn0gZnJvbSAnLi9tZW51LmpzJztcblxuY29uc3QgcGFnZUxvYWRFbGVtZW50cyA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZGl2Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcbiAgICAvLyBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIC8vIGNvbnN0IHBUZXh0ID0gYE1pbGxpd2F5cywgYmV0dGVyIGtub3duIGFzIHRoZSBSZXN0YXVyYW50IGF0IHRoZSBFbmQgb2YgdGhlIFVuaXZlcnNlLCBcbiAgICAvLyBpcyBhIGZpdmUgc3RhciByZXN0YXVyYW50IHNpdHVhdGVkIGF0IHRoZSBlbmQgb2YgdGltZSBhbmQgbWF0dGVyLiBcbiAgICAvLyBJdHMgbWFpbiBhdHRyYWN0aW9uIGlzIGFsbG93aW5nIGRpbmVycyB0byB2aWV3IGEgR25hYiBHaWIsIFxuICAgIC8vIGJlZm9yZSBkZXNzZXJ0cyBhcmUgc2VydmVkLmA7XG4gICAgLy8gY3JlYXRlVGV4dEVsZW1lbnQocCwgcFRleHQsIGRpdkNvbnRlbnQpO1xuXG4gICAgY29uc3QgZGl2SGVhZGVyID0gY3JlYXRlQ29udGFpbmVyKGRpdkNvbnRlbnQsICdoZWFkZXInKTtcblxuICAgIGNyZWF0ZVRleHRFbGVtZW50KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyksICdNaWxsaXdheXMnLCBkaXZIZWFkZXIpO1xuICAgIGNyZWF0ZUNsYXNzVGV4dEVsZW1lbnQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLCAnSG9tZScsIGRpdkhlYWRlciwgJ2hvbWVIZWFkZXInKTtcbiAgICBjcmVhdGVDbGFzc1RleHRFbGVtZW50KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSwgJ01lbnUnLCBkaXZIZWFkZXIsICdtZW51SGVhZGVyJyk7XG4gICAgY3JlYXRlQ2xhc3NUZXh0RWxlbWVudChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksICdDb250YWN0JywgZGl2SGVhZGVyLCAnY29udGFjdEhlYWRlcicpO1xuXG5cbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xufSkoKTtcblxuY29uc3QgcmVuZGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBtZW51T3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW4nKVxuICAgIG1lbnVPcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgb3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKG9wdGlvbikgPT4gcmVuZGVyUGFnZShvcHRpb24pKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHJlbW92ZUFjdGl2ZVBhZ2UgKCkge1xuICAgICAgICBjb25zdCBhY3RpdmVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJyk7XG4gICAgICAgIGFjdGl2ZURpdi5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICAvL25lZWQgdG8gc2VsZWN0IHRoZSB3cml0ZSBwYWdlIGJhc2VkIG9uIHdoaWNoIHNwYW4gd2FzIGNsaWNrZWRcbiAgICAvL2lmIHNwYW4uaG9tZUhlYWRlciA9PiBkaXZDb250ZW50LmFwcGVuZENoaWxkKGhvbWVDb250YWluZXIpO1xuXG4gICAgZnVuY3Rpb24gYWRkU2VsZWN0ZWRQYWdlIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbWVudUhlYWRlcicpKSB7XG4gICAgICAgICAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyUGFnZSAoZWxlbWVudCkge1xuICAgICAgICByZW1vdmVBY3RpdmVQYWdlKCk7XG4gICAgICAgIGFkZFNlbGVjdGVkUGFnZShlbGVtZW50KTtcbiAgICB9XG5cbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9