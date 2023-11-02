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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEU7QUFDdkQ7O0FBRXZCLHNCQUFzQix5REFBVTs7O0FBR2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdFQUFpQjs7Ozs7Ozs7Ozs7Ozs7O0FDWHdFO0FBQ2xFOzs7QUFHdkIsc0JBQXNCLHlEQUFVOztBQUVoQyxjQUFjLDhEQUFlOztBQUU3QjtBQUNBLElBQUksd0RBQVM7QUFDYixJQUFJLGdFQUFpQjtBQUNyQixJQUFJLGdFQUFpQjtBQUNyQjs7QUFFQTtBQUNBOztBQUVBLGNBQWMsOERBQWU7O0FBRTdCO0FBQ0E7O0FBRUEsY0FBYyw4REFBZTs7QUFFN0I7QUFDQTs7QUFFQSxjQUFjLDhEQUFlOztBQUU3QjtBQUNBOztBQUVBLGNBQWMsOERBQWU7O0FBRTdCO0FBQ0E7O0FBRUEsY0FBYyw4REFBZTs7QUFFN0I7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEMyRjs7QUFFM0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2hDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOMEY7QUFDbEQ7QUFDQTs7QUFFeEM7QUFDQTtBQUNBLHNCQUFzQiw4REFBZTs7QUFFckMsSUFBSSxnRUFBaUI7QUFDckIsSUFBSSxxRUFBc0I7QUFDMUIsSUFBSSxxRUFBc0I7QUFDMUIsSUFBSSxxRUFBc0I7OztBQUcxQiwyQkFBMkIsbURBQWE7QUFDeEMsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DLG1EQUFhO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVDb250YWluZXIsIGNyZWF0ZVRleHRFbGVtZW50LCBjcmVhdGVDYXJkfSBmcm9tICcuL3BhZ2UtbG9hZC5qcyc7XG5leHBvcnQge2hvbWVDb250YWluZXJ9O1xuXG5jb25zdCBob21lQ29udGFpbmVyID0gY3JlYXRlQ2FyZCgnaG9tZScpO1xuXG5cbmNvbnN0IHBUZXh0ID0gYE1pbGxpd2F5cywgYmV0dGVyIGtub3duIGFzIHRoZSBSZXN0YXVyYW50IGF0IHRoZSBFbmQgb2YgdGhlIFVuaXZlcnNlLCBcbmlzIGEgZml2ZSBzdGFyIHJlc3RhdXJhbnQgc2l0dWF0ZWQgYXQgdGhlIGVuZCBvZiB0aW1lIGFuZCBtYXR0ZXIuIFxuSXRzIG1haW4gYXR0cmFjdGlvbiBpcyBhbGxvd2luZyBkaW5lcnMgdG8gdmlldyBhIEduYWIgR2liLCBcbmJlZm9yZSBkZXNzZXJ0cyBhcmUgc2VydmVkLmA7XG5cbmNyZWF0ZVRleHRFbGVtZW50IChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyksIHBUZXh0LCBob21lQ29udGFpbmVyKTsiLCJpbXBvcnQge2NyZWF0ZUNvbnRhaW5lciwgY3JlYXRlSW1nLCBjcmVhdGVUZXh0RWxlbWVudCwgY3JlYXRlQ2FyZH0gZnJvbSAnLi9wYWdlLWxvYWQuanMnO1xuZXhwb3J0IHttZW51Q29udGFpbmVyfTtcblxuXG5jb25zdCBtZW51Q29udGFpbmVyID0gY3JlYXRlQ2FyZCgnbWVudScpO1xuXG5jb25zdCBjYXJkMSA9IGNyZWF0ZUNvbnRhaW5lcihtZW51Q29udGFpbmVyLCAnY2FyZCcpO1xuXG5mdW5jdGlvbiBuZXdNZW51SXRlbSAoY2FyZE51bWJlciwgaXRlbSwgc3JjLCBhbHQsIGluZ3JlZGllbnRzKSB7XG4gICAgY3JlYXRlSW1nKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpLCBzcmMsIDUwLCBhbHQsIGNhcmROdW1iZXIpO1xuICAgIGNyZWF0ZVRleHRFbGVtZW50KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCBpdGVtLCBjYXJkTnVtYmVyKTtcbiAgICBjcmVhdGVUZXh0RWxlbWVudChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyksIGluZ3JlZGllbnRzLCBjYXJkTnVtYmVyKTtcbn1cblxubmV3TWVudUl0ZW0oY2FyZDEsICdTcGFjZSBCdXJnZXInLCAnLi9pbWcvaGFtYnVyZ2VyLnN2ZycsICdQYXN0YSBncmFwaGljJywgXG4nanVpY3kgc3BhY2Vjb3csIG1pbGt5IHdheSBtYXlvLCBhc3Rlcm9pZCBsZXR0dWNlJyk7XG5cbmNvbnN0IGNhcmQyID0gY3JlYXRlQ29udGFpbmVyKG1lbnVDb250YWluZXIsICdjYXJkJyk7XG5cbm5ld01lbnVJdGVtKGNhcmQyLCAnU3BhY2UgQ3JvaXNzYW50JywgJy4vaW1nL2Zvb2QtY3JvaXNzYW50LnN2ZycsICdDcm9pc3NhbnQgZ3JhcGhpYycsIFxuJ2ZsYWt5LCBidXR0ZXJ5LCBkZWxpY2lvdXMnKTtcblxuY29uc3QgY2FyZDMgPSBjcmVhdGVDb250YWluZXIobWVudUNvbnRhaW5lciwgJ2NhcmQnKTtcblxubmV3TWVudUl0ZW0oY2FyZDMsICdNeXN0ZXJ5IERydW1zdGljaycsICcuL2ltZy9mb29kLWRydW1zdGljay5zdmcnLCAnRHJ1bXN0aWNrIGdyYXBoaWMnLCBcbidwYW4gZnJpZWQsIHN3ZWV0IG1lYXQsIG9yaWdpbiB1bmtub3duJyk7XG5cbmNvbnN0IGNhcmQ0ID0gY3JlYXRlQ29udGFpbmVyKG1lbnVDb250YWluZXIsICdjYXJkJyk7XG5cbm5ld01lbnVJdGVtKGNhcmQ0LCAnR2FsYXh5IE5vb2RsZXMnLCAnLi9pbWcvbm9vZGxlcy5zdmcnLCAnQm93bCBvZiBub29kbGVzIGdyYXBoaWMnLCBcbidmYW1vdXMgZ2FsYWN0aWMgZml2ZSBzcGljZSwgYmVlZiBicm90aCwgaG90IGNoaWxpcycpO1xuXG5jb25zdCBjYXJkNSA9IGNyZWF0ZUNvbnRhaW5lcihtZW51Q29udGFpbmVyLCAnY2FyZCcpO1xuXG5uZXdNZW51SXRlbShjYXJkNSwgJ01vb24gRG9nJywgJy4vaW1nL2Zvb2QtaG90LWRvZy5zdmcnLCAnSG90IGRvZyBncmFwaGljJywgXG4nY2hhcmNvYWwgZ3JpbGxlZCwgdG9hc3RlZCBidW4sIGZyaWVkIG9uaW9ucycpO1xuXG5jb25zdCBjYXJkNiA9IGNyZWF0ZUNvbnRhaW5lcihtZW51Q29udGFpbmVyLCAnY2FyZCcpO1xuXG5uZXdNZW51SXRlbShjYXJkNiwgJ0VhcnRoIFR1cmtleScsICcuL2ltZy9mb29kLXR1cmtleS5zdmcnLCAnQ29va2VkIHR1cmtleSBncmFwaGljJywgXG4nc2xvdyByb2FzdGVkLCBjcmlzcHksIHN1Y2N1bGVudCcpOyIsImV4cG9ydCB7Y3JlYXRlVGV4dEVsZW1lbnQsIGNyZWF0ZUltZywgY3JlYXRlQ29udGFpbmVyLCBjcmVhdGVDbGFzc1RleHRFbGVtZW50LCBjcmVhdGVDYXJkfTtcblxuY29uc3QgY3JlYXRlVGV4dEVsZW1lbnQgPSAoZWxlbWVudCwgdGV4dCwgcGFyZW50KSA9PiB7XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xufVxuXG5jb25zdCBjcmVhdGVDbGFzc1RleHRFbGVtZW50ID0gKGVsZW1lbnQsIHRleHQsIHBhcmVudCwgY3NzQ2xhc3MpID0+IHtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcbn1cblxuY29uc3QgY3JlYXRlSW1nID0gKGVsZW1lbnQsIHNyYywgd2lkdGgsIGFsdCwgcGFyZW50KSA9PiB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgc3JjKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIHdpZHRoKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImFsdFwiLCBhbHQpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbn1cblxuY29uc3QgY3JlYXRlQ29udGFpbmVyID0gKHBhcmVudCwgY3NzQ2xhc3MpID0+IHtcbiAgICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKG5ld0Rpdik7XG4gICAgcmV0dXJuIG5ld0Rpdjtcbn07XG5cbmNvbnN0IGNyZWF0ZUNhcmQgPSAoY3NzQ2xhc3MpID0+IHtcbiAgICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XG4gICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIHJldHVybiBuZXdEaXY7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7Y3JlYXRlQ29udGFpbmVyLCBjcmVhdGVUZXh0RWxlbWVudCwgY3JlYXRlQ2xhc3NUZXh0RWxlbWVudH0gZnJvbSAnLi9wYWdlLWxvYWQuanMnO1xuaW1wb3J0IHttZW51Q29udGFpbmVyfSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IHtob21lQ29udGFpbmVyfSBmcm9tICcuL2hvbWUuanMnO1xuXG5jb25zdCBwYWdlTG9hZEVsZW1lbnRzID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBkaXZDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuICAgIGNvbnN0IGRpdkhlYWRlciA9IGNyZWF0ZUNvbnRhaW5lcihkaXZDb250ZW50LCAnaGVhZGVyJyk7XG5cbiAgICBjcmVhdGVUZXh0RWxlbWVudChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpLCAnTWlsbGl3YXlzJywgZGl2SGVhZGVyKTtcbiAgICBjcmVhdGVDbGFzc1RleHRFbGVtZW50KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSwgJ0hvbWUnLCBkaXZIZWFkZXIsICdob21lSGVhZGVyJyk7XG4gICAgY3JlYXRlQ2xhc3NUZXh0RWxlbWVudChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksICdNZW51JywgZGl2SGVhZGVyLCAnbWVudUhlYWRlcicpO1xuICAgIGNyZWF0ZUNsYXNzVGV4dEVsZW1lbnQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLCAnQ29udGFjdCcsIGRpdkhlYWRlciwgJ2NvbnRhY3RIZWFkZXInKTtcblxuXG4gICAgZGl2Q29udGVudC5hcHBlbmRDaGlsZChob21lQ29udGFpbmVyKTtcbn0pKCk7XG5cbmNvbnN0IHJlbmRlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbWVudU9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuJylcbiAgICBtZW51T3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgIG9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChvcHRpb24pID0+IHJlbmRlclBhZ2Uob3B0aW9uKSk7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiByZW1vdmVBY3RpdmVQYWdlICgpIHtcbiAgICAgICAgY29uc3QgYWN0aXZlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpO1xuICAgICAgICBhY3RpdmVEaXYucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgLy9uZWVkIHRvIHNlbGVjdCB0aGUgd3JpdGUgcGFnZSBiYXNlZCBvbiB3aGljaCBzcGFuIHdhcyBjbGlja2VkXG4gICAgLy9pZiBzcGFuLmhvbWVIZWFkZXIgPT4gZGl2Q29udGVudC5hcHBlbmRDaGlsZChob21lQ29udGFpbmVyKTtcblxuICAgIGZ1bmN0aW9uIGFkZFNlbGVjdGVkUGFnZSAoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnVIZWFkZXInKSkge1xuICAgICAgICAgICAgZGl2Q29udGVudC5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclBhZ2UgKGVsZW1lbnQpIHtcbiAgICAgICAgcmVtb3ZlQWN0aXZlUGFnZSgpO1xuICAgICAgICBhZGRTZWxlY3RlZFBhZ2UoZWxlbWVudCk7XG4gICAgfVxuXG59KSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==