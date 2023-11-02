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
    newDiv.classList.add('active');
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
        option.addEventListener('click', (option) => removeActivePage());
    });

    function removeActivePage () {
        const activeDiv = document.querySelector('.active');
        activeDiv.remove();
    }

    //need to select the write page based on which span was clicked
    //if span.homeHeader => divContent.appendChild(homeContainer);

})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNkU7QUFDdEQ7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxjQUFjLDhEQUFlOztBQUU3QjtBQUNBLElBQUksd0RBQVM7QUFDYixJQUFJLGdFQUFpQjtBQUNyQixJQUFJLGdFQUFpQjtBQUNyQjs7QUFFQTtBQUNBOztBQUVBLGNBQWMsOERBQWU7O0FBRTdCO0FBQ0E7O0FBRUEsY0FBYyw4REFBZTs7QUFFN0I7QUFDQTs7QUFFQSxjQUFjLDhEQUFlOztBQUU3QjtBQUNBOztBQUVBLGNBQWMsOERBQWU7O0FBRTdCO0FBQ0E7O0FBRUEsY0FBYyw4REFBZTs7QUFFN0I7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QytFOztBQUUvRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ3pCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ04wRjtBQUNsRDs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsOERBQWU7O0FBRXJDLElBQUksZ0VBQWlCO0FBQ3JCLElBQUkscUVBQXNCO0FBQzFCLElBQUkscUVBQXNCO0FBQzFCLElBQUkscUVBQXNCOzs7QUFHMUIsMkJBQTJCLG1EQUFhO0FBQ3hDLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsQ0FBQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVDb250YWluZXIsIGNyZWF0ZUltZywgY3JlYXRlVGV4dEVsZW1lbnR9IGZyb20gJy4vcGFnZS1sb2FkLmpzJztcbmV4cG9ydCB7bWVudUNvbnRhaW5lcn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUNhcmQoY3NzQ2xhc3MpIHtcbiAgICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XG4gICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIHJldHVybiBuZXdEaXY7XG59XG5cbmNvbnN0IG1lbnVDb250YWluZXIgPSBjcmVhdGVDYXJkKCdtZW51Jyk7XG5cbmNvbnN0IGNhcmQxID0gY3JlYXRlQ29udGFpbmVyKG1lbnVDb250YWluZXIsICdjYXJkJyk7XG5cbmZ1bmN0aW9uIG5ld01lbnVJdGVtIChjYXJkTnVtYmVyLCBpdGVtLCBzcmMsIGFsdCwgaW5ncmVkaWVudHMpIHtcbiAgICBjcmVhdGVJbWcoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyksIHNyYywgNTAsIGFsdCwgY2FyZE51bWJlcik7XG4gICAgY3JlYXRlVGV4dEVsZW1lbnQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIGl0ZW0sIGNhcmROdW1iZXIpO1xuICAgIGNyZWF0ZVRleHRFbGVtZW50KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSwgaW5ncmVkaWVudHMsIGNhcmROdW1iZXIpO1xufVxuXG5uZXdNZW51SXRlbShjYXJkMSwgJ1NwYWNlIEJ1cmdlcicsICcuL2ltZy9oYW1idXJnZXIuc3ZnJywgJ1Bhc3RhIGdyYXBoaWMnLCBcbidqdWljeSBzcGFjZWNvdywgbWlsa3kgd2F5IG1heW8sIGFzdGVyb2lkIGxldHR1Y2UnKTtcblxuY29uc3QgY2FyZDIgPSBjcmVhdGVDb250YWluZXIobWVudUNvbnRhaW5lciwgJ2NhcmQnKTtcblxubmV3TWVudUl0ZW0oY2FyZDIsICdTcGFjZSBDcm9pc3NhbnQnLCAnLi9pbWcvZm9vZC1jcm9pc3NhbnQuc3ZnJywgJ0Nyb2lzc2FudCBncmFwaGljJywgXG4nZmxha3ksIGJ1dHRlcnksIGRlbGljaW91cycpO1xuXG5jb25zdCBjYXJkMyA9IGNyZWF0ZUNvbnRhaW5lcihtZW51Q29udGFpbmVyLCAnY2FyZCcpO1xuXG5uZXdNZW51SXRlbShjYXJkMywgJ015c3RlcnkgRHJ1bXN0aWNrJywgJy4vaW1nL2Zvb2QtZHJ1bXN0aWNrLnN2ZycsICdEcnVtc3RpY2sgZ3JhcGhpYycsIFxuJ3BhbiBmcmllZCwgc3dlZXQgbWVhdCwgb3JpZ2luIHVua25vd24nKTtcblxuY29uc3QgY2FyZDQgPSBjcmVhdGVDb250YWluZXIobWVudUNvbnRhaW5lciwgJ2NhcmQnKTtcblxubmV3TWVudUl0ZW0oY2FyZDQsICdHYWxheHkgTm9vZGxlcycsICcuL2ltZy9ub29kbGVzLnN2ZycsICdCb3dsIG9mIG5vb2RsZXMgZ3JhcGhpYycsIFxuJ2ZhbW91cyBnYWxhY3RpYyBmaXZlIHNwaWNlLCBiZWVmIGJyb3RoLCBob3QgY2hpbGlzJyk7XG5cbmNvbnN0IGNhcmQ1ID0gY3JlYXRlQ29udGFpbmVyKG1lbnVDb250YWluZXIsICdjYXJkJyk7XG5cbm5ld01lbnVJdGVtKGNhcmQ1LCAnTW9vbiBEb2cnLCAnLi9pbWcvZm9vZC1ob3QtZG9nLnN2ZycsICdIb3QgZG9nIGdyYXBoaWMnLCBcbidjaGFyY29hbCBncmlsbGVkLCB0b2FzdGVkIGJ1biwgZnJpZWQgb25pb25zJyk7XG5cbmNvbnN0IGNhcmQ2ID0gY3JlYXRlQ29udGFpbmVyKG1lbnVDb250YWluZXIsICdjYXJkJyk7XG5cbm5ld01lbnVJdGVtKGNhcmQ2LCAnRWFydGggVHVya2V5JywgJy4vaW1nL2Zvb2QtdHVya2V5LnN2ZycsICdDb29rZWQgdHVya2V5IGdyYXBoaWMnLCBcbidzbG93IHJvYXN0ZWQsIGNyaXNweSwgc3VjY3VsZW50Jyk7IiwiZXhwb3J0IHtjcmVhdGVUZXh0RWxlbWVudCwgY3JlYXRlSW1nLCBjcmVhdGVDb250YWluZXIsIGNyZWF0ZUNsYXNzVGV4dEVsZW1lbnR9O1xuXG5jb25zdCBjcmVhdGVUZXh0RWxlbWVudCA9IChlbGVtZW50LCB0ZXh0LCBwYXJlbnQpID0+IHtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG59XG5cbmNvbnN0IGNyZWF0ZUNsYXNzVGV4dEVsZW1lbnQgPSAoZWxlbWVudCwgdGV4dCwgcGFyZW50LCBjc3NDbGFzcykgPT4ge1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xufVxuXG5jb25zdCBjcmVhdGVJbWcgPSAoZWxlbWVudCwgc3JjLCB3aWR0aCwgYWx0LCBwYXJlbnQpID0+IHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcInNyY1wiLCBzcmMpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgd2lkdGgpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiYWx0XCIsIGFsdCk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xufVxuXG5jb25zdCBjcmVhdGVDb250YWluZXIgPSAocGFyZW50LCBjc3NDbGFzcykgPT4ge1xuICAgIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobmV3RGl2KTtcbiAgICByZXR1cm4gbmV3RGl2O1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7Y3JlYXRlQ29udGFpbmVyLCBjcmVhdGVUZXh0RWxlbWVudCwgY3JlYXRlQ2xhc3NUZXh0RWxlbWVudH0gZnJvbSAnLi9wYWdlLWxvYWQuanMnO1xuaW1wb3J0IHttZW51Q29udGFpbmVyfSBmcm9tICcuL21lbnUuanMnO1xuXG5jb25zdCBwYWdlTG9hZEVsZW1lbnRzID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBkaXZDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuICAgIC8vIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgLy8gY29uc3QgcFRleHQgPSBgTWlsbGl3YXlzLCBiZXR0ZXIga25vd24gYXMgdGhlIFJlc3RhdXJhbnQgYXQgdGhlIEVuZCBvZiB0aGUgVW5pdmVyc2UsIFxuICAgIC8vIGlzIGEgZml2ZSBzdGFyIHJlc3RhdXJhbnQgc2l0dWF0ZWQgYXQgdGhlIGVuZCBvZiB0aW1lIGFuZCBtYXR0ZXIuIFxuICAgIC8vIEl0cyBtYWluIGF0dHJhY3Rpb24gaXMgYWxsb3dpbmcgZGluZXJzIHRvIHZpZXcgYSBHbmFiIEdpYiwgXG4gICAgLy8gYmVmb3JlIGRlc3NlcnRzIGFyZSBzZXJ2ZWQuYDtcbiAgICAvLyBjcmVhdGVUZXh0RWxlbWVudChwLCBwVGV4dCwgZGl2Q29udGVudCk7XG5cbiAgICBjb25zdCBkaXZIZWFkZXIgPSBjcmVhdGVDb250YWluZXIoZGl2Q29udGVudCwgJ2hlYWRlcicpO1xuXG4gICAgY3JlYXRlVGV4dEVsZW1lbnQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKSwgJ01pbGxpd2F5cycsIGRpdkhlYWRlcik7XG4gICAgY3JlYXRlQ2xhc3NUZXh0RWxlbWVudChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksICdIb21lJywgZGl2SGVhZGVyLCAnaG9tZUhlYWRlcicpO1xuICAgIGNyZWF0ZUNsYXNzVGV4dEVsZW1lbnQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLCAnTWVudScsIGRpdkhlYWRlciwgJ21lbnVIZWFkZXInKTtcbiAgICBjcmVhdGVDbGFzc1RleHRFbGVtZW50KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSwgJ0NvbnRhY3QnLCBkaXZIZWFkZXIsICdjb250YWN0SGVhZGVyJyk7XG5cblxuICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG59KSgpO1xuXG5jb25zdCByZW5kZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IG1lbnVPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc3BhbicpXG4gICAgbWVudU9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAob3B0aW9uKSA9PiByZW1vdmVBY3RpdmVQYWdlKCkpO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWN0aXZlUGFnZSAoKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKTtcbiAgICAgICAgYWN0aXZlRGl2LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIC8vbmVlZCB0byBzZWxlY3QgdGhlIHdyaXRlIHBhZ2UgYmFzZWQgb24gd2hpY2ggc3BhbiB3YXMgY2xpY2tlZFxuICAgIC8vaWYgc3Bhbi5ob21lSGVhZGVyID0+IGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZUNvbnRhaW5lcik7XG5cbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9