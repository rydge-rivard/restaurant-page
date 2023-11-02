/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homeContainer: () => (/* binding */ homeContainer)
/* harmony export */ });
/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load.js */ "./src/page-load.js");



const homeContainer = (0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.createCard)('home');


const pText = `Milliways, better known as the Restaurant at the End of the Universe, 
is a five star restaurant situated at the end of time and matter. 
Its main attraction is allowing diners to view a Gnab Gib, 
before desserts are served.`;

(0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.createTextElement) (document.createElement('p'), pText, homeContainer);

/***/ }),

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
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "./src/home.js");




const pageLoadElements = (function () {
    const divContent = document.querySelector('#content')
    const divHeader = (0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.createContainer)(divContent, 'header');

    (0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.createTextElement)(document.createElement('h1'), 'Milliways', divHeader);
    (0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.createClassTextElement)(document.createElement('span'), 'Home', divHeader, 'homeHeader');
    (0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.createClassTextElement)(document.createElement('span'), 'Menu', divHeader, 'menuHeader');
    (0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.createClassTextElement)(document.createElement('span'), 'Contact', divHeader, 'contactHeader');


    divContent.appendChild(_home_js__WEBPACK_IMPORTED_MODULE_2__.homeContainer);
})();

const switchPages = (function () {
    const divContent = document.querySelector('#content')
    const menuOptions = document.querySelectorAll('span')
    menuOptions.forEach(option => {
        bindEvents (option);
    });

    function bindEvents (element) {
        element.addEventListener('click', () => renderPage(element));
    }

    function removeActivePage () {
        const activeDiv = document.querySelector('.active');
        activeDiv.remove();
    }

    function addSelectedPage (element) {
        if (element.classList.contains('menuHeader')) {
            divContent.appendChild(_menu_js__WEBPACK_IMPORTED_MODULE_1__.menuContainer);
        } else if (element.classList.contains('homeHeader')) {
            divContent.appendChild(_home_js__WEBPACK_IMPORTED_MODULE_2__.homeContainer);
        } else {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEU7QUFDdkQ7O0FBRXZCLHNCQUFzQix5REFBVTs7O0FBR2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdFQUFpQjs7Ozs7Ozs7Ozs7Ozs7O0FDWHdFO0FBQ2xFOzs7QUFHdkIsc0JBQXNCLHlEQUFVOztBQUVoQyxjQUFjLDhEQUFlOztBQUU3QjtBQUNBLElBQUksd0RBQVM7QUFDYixJQUFJLGdFQUFpQjtBQUNyQixJQUFJLGdFQUFpQjtBQUNyQjs7QUFFQTtBQUNBOztBQUVBLGNBQWMsOERBQWU7O0FBRTdCO0FBQ0E7O0FBRUEsY0FBYyw4REFBZTs7QUFFN0I7QUFDQTs7QUFFQSxjQUFjLDhEQUFlOztBQUU3QjtBQUNBOztBQUVBLGNBQWMsOERBQWU7O0FBRTdCO0FBQ0E7O0FBRUEsY0FBYyw4REFBZTs7QUFFN0I7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEMyRjs7QUFFM0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2hDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOMEY7QUFDbEQ7QUFDQTs7QUFFeEM7QUFDQTtBQUNBLHNCQUFzQiw4REFBZTs7QUFFckMsSUFBSSxnRUFBaUI7QUFDckIsSUFBSSxxRUFBc0I7QUFDMUIsSUFBSSxxRUFBc0I7QUFDMUIsSUFBSSxxRUFBc0I7OztBQUcxQiwyQkFBMkIsbURBQWE7QUFDeEMsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQyxtREFBYTtBQUNoRCxVQUFVO0FBQ1YsbUNBQW1DLG1EQUFhO0FBQ2hELFVBQVU7O0FBRVY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZS1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZUNvbnRhaW5lciwgY3JlYXRlVGV4dEVsZW1lbnQsIGNyZWF0ZUNhcmR9IGZyb20gJy4vcGFnZS1sb2FkLmpzJztcbmV4cG9ydCB7aG9tZUNvbnRhaW5lcn07XG5cbmNvbnN0IGhvbWVDb250YWluZXIgPSBjcmVhdGVDYXJkKCdob21lJyk7XG5cblxuY29uc3QgcFRleHQgPSBgTWlsbGl3YXlzLCBiZXR0ZXIga25vd24gYXMgdGhlIFJlc3RhdXJhbnQgYXQgdGhlIEVuZCBvZiB0aGUgVW5pdmVyc2UsIFxuaXMgYSBmaXZlIHN0YXIgcmVzdGF1cmFudCBzaXR1YXRlZCBhdCB0aGUgZW5kIG9mIHRpbWUgYW5kIG1hdHRlci4gXG5JdHMgbWFpbiBhdHRyYWN0aW9uIGlzIGFsbG93aW5nIGRpbmVycyB0byB2aWV3IGEgR25hYiBHaWIsIFxuYmVmb3JlIGRlc3NlcnRzIGFyZSBzZXJ2ZWQuYDtcblxuY3JlYXRlVGV4dEVsZW1lbnQgKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSwgcFRleHQsIGhvbWVDb250YWluZXIpOyIsImltcG9ydCB7Y3JlYXRlQ29udGFpbmVyLCBjcmVhdGVJbWcsIGNyZWF0ZVRleHRFbGVtZW50LCBjcmVhdGVDYXJkfSBmcm9tICcuL3BhZ2UtbG9hZC5qcyc7XG5leHBvcnQge21lbnVDb250YWluZXJ9O1xuXG5cbmNvbnN0IG1lbnVDb250YWluZXIgPSBjcmVhdGVDYXJkKCdtZW51Jyk7XG5cbmNvbnN0IGNhcmQxID0gY3JlYXRlQ29udGFpbmVyKG1lbnVDb250YWluZXIsICdjYXJkJyk7XG5cbmZ1bmN0aW9uIG5ld01lbnVJdGVtIChjYXJkTnVtYmVyLCBpdGVtLCBzcmMsIGFsdCwgaW5ncmVkaWVudHMpIHtcbiAgICBjcmVhdGVJbWcoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyksIHNyYywgNTAsIGFsdCwgY2FyZE51bWJlcik7XG4gICAgY3JlYXRlVGV4dEVsZW1lbnQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIGl0ZW0sIGNhcmROdW1iZXIpO1xuICAgIGNyZWF0ZVRleHRFbGVtZW50KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSwgaW5ncmVkaWVudHMsIGNhcmROdW1iZXIpO1xufVxuXG5uZXdNZW51SXRlbShjYXJkMSwgJ1NwYWNlIEJ1cmdlcicsICcuL2ltZy9oYW1idXJnZXIuc3ZnJywgJ1Bhc3RhIGdyYXBoaWMnLCBcbidqdWljeSBzcGFjZWNvdywgbWlsa3kgd2F5IG1heW8sIGFzdGVyb2lkIGxldHR1Y2UnKTtcblxuY29uc3QgY2FyZDIgPSBjcmVhdGVDb250YWluZXIobWVudUNvbnRhaW5lciwgJ2NhcmQnKTtcblxubmV3TWVudUl0ZW0oY2FyZDIsICdTcGFjZSBDcm9pc3NhbnQnLCAnLi9pbWcvZm9vZC1jcm9pc3NhbnQuc3ZnJywgJ0Nyb2lzc2FudCBncmFwaGljJywgXG4nZmxha3ksIGJ1dHRlcnksIGRlbGljaW91cycpO1xuXG5jb25zdCBjYXJkMyA9IGNyZWF0ZUNvbnRhaW5lcihtZW51Q29udGFpbmVyLCAnY2FyZCcpO1xuXG5uZXdNZW51SXRlbShjYXJkMywgJ015c3RlcnkgRHJ1bXN0aWNrJywgJy4vaW1nL2Zvb2QtZHJ1bXN0aWNrLnN2ZycsICdEcnVtc3RpY2sgZ3JhcGhpYycsIFxuJ3BhbiBmcmllZCwgc3dlZXQgbWVhdCwgb3JpZ2luIHVua25vd24nKTtcblxuY29uc3QgY2FyZDQgPSBjcmVhdGVDb250YWluZXIobWVudUNvbnRhaW5lciwgJ2NhcmQnKTtcblxubmV3TWVudUl0ZW0oY2FyZDQsICdHYWxheHkgTm9vZGxlcycsICcuL2ltZy9ub29kbGVzLnN2ZycsICdCb3dsIG9mIG5vb2RsZXMgZ3JhcGhpYycsIFxuJ2ZhbW91cyBnYWxhY3RpYyBmaXZlIHNwaWNlLCBiZWVmIGJyb3RoLCBob3QgY2hpbGlzJyk7XG5cbmNvbnN0IGNhcmQ1ID0gY3JlYXRlQ29udGFpbmVyKG1lbnVDb250YWluZXIsICdjYXJkJyk7XG5cbm5ld01lbnVJdGVtKGNhcmQ1LCAnTW9vbiBEb2cnLCAnLi9pbWcvZm9vZC1ob3QtZG9nLnN2ZycsICdIb3QgZG9nIGdyYXBoaWMnLCBcbidjaGFyY29hbCBncmlsbGVkLCB0b2FzdGVkIGJ1biwgZnJpZWQgb25pb25zJyk7XG5cbmNvbnN0IGNhcmQ2ID0gY3JlYXRlQ29udGFpbmVyKG1lbnVDb250YWluZXIsICdjYXJkJyk7XG5cbm5ld01lbnVJdGVtKGNhcmQ2LCAnRWFydGggVHVya2V5JywgJy4vaW1nL2Zvb2QtdHVya2V5LnN2ZycsICdDb29rZWQgdHVya2V5IGdyYXBoaWMnLCBcbidzbG93IHJvYXN0ZWQsIGNyaXNweSwgc3VjY3VsZW50Jyk7IiwiZXhwb3J0IHtjcmVhdGVUZXh0RWxlbWVudCwgY3JlYXRlSW1nLCBjcmVhdGVDb250YWluZXIsIGNyZWF0ZUNsYXNzVGV4dEVsZW1lbnQsIGNyZWF0ZUNhcmR9O1xuXG5jb25zdCBjcmVhdGVUZXh0RWxlbWVudCA9IChlbGVtZW50LCB0ZXh0LCBwYXJlbnQpID0+IHtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG59XG5cbmNvbnN0IGNyZWF0ZUNsYXNzVGV4dEVsZW1lbnQgPSAoZWxlbWVudCwgdGV4dCwgcGFyZW50LCBjc3NDbGFzcykgPT4ge1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xufVxuXG5jb25zdCBjcmVhdGVJbWcgPSAoZWxlbWVudCwgc3JjLCB3aWR0aCwgYWx0LCBwYXJlbnQpID0+IHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcInNyY1wiLCBzcmMpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgd2lkdGgpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiYWx0XCIsIGFsdCk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xufVxuXG5jb25zdCBjcmVhdGVDb250YWluZXIgPSAocGFyZW50LCBjc3NDbGFzcykgPT4ge1xuICAgIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobmV3RGl2KTtcbiAgICByZXR1cm4gbmV3RGl2O1xufTtcblxuY29uc3QgY3JlYXRlQ2FyZCA9IChjc3NDbGFzcykgPT4ge1xuICAgIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcbiAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgcmV0dXJuIG5ld0Rpdjtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtjcmVhdGVDb250YWluZXIsIGNyZWF0ZVRleHRFbGVtZW50LCBjcmVhdGVDbGFzc1RleHRFbGVtZW50fSBmcm9tICcuL3BhZ2UtbG9hZC5qcyc7XG5pbXBvcnQge21lbnVDb250YWluZXJ9IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQge2hvbWVDb250YWluZXJ9IGZyb20gJy4vaG9tZS5qcyc7XG5cbmNvbnN0IHBhZ2VMb2FkRWxlbWVudHMgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG4gICAgY29uc3QgZGl2SGVhZGVyID0gY3JlYXRlQ29udGFpbmVyKGRpdkNvbnRlbnQsICdoZWFkZXInKTtcblxuICAgIGNyZWF0ZVRleHRFbGVtZW50KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyksICdNaWxsaXdheXMnLCBkaXZIZWFkZXIpO1xuICAgIGNyZWF0ZUNsYXNzVGV4dEVsZW1lbnQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLCAnSG9tZScsIGRpdkhlYWRlciwgJ2hvbWVIZWFkZXInKTtcbiAgICBjcmVhdGVDbGFzc1RleHRFbGVtZW50KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSwgJ01lbnUnLCBkaXZIZWFkZXIsICdtZW51SGVhZGVyJyk7XG4gICAgY3JlYXRlQ2xhc3NUZXh0RWxlbWVudChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksICdDb250YWN0JywgZGl2SGVhZGVyLCAnY29udGFjdEhlYWRlcicpO1xuXG5cbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGhvbWVDb250YWluZXIpO1xufSkoKTtcblxuY29uc3Qgc3dpdGNoUGFnZXMgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG4gICAgY29uc3QgbWVudU9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuJylcbiAgICBtZW51T3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgIGJpbmRFdmVudHMgKG9wdGlvbik7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBiaW5kRXZlbnRzIChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZW5kZXJQYWdlKGVsZW1lbnQpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVBY3RpdmVQYWdlICgpIHtcbiAgICAgICAgY29uc3QgYWN0aXZlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpO1xuICAgICAgICBhY3RpdmVEaXYucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkU2VsZWN0ZWRQYWdlIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbWVudUhlYWRlcicpKSB7XG4gICAgICAgICAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xuICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdob21lSGVhZGVyJykpIHtcbiAgICAgICAgICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZUNvbnRhaW5lcik7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclBhZ2UgKGVsZW1lbnQpIHtcbiAgICAgICAgcmVtb3ZlQWN0aXZlUGFnZSgpO1xuICAgICAgICBhZGRTZWxlY3RlZFBhZ2UoZWxlbWVudCk7XG4gICAgfVxuXG59KSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==