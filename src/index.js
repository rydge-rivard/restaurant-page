import {createContainer, createTextElement, createClassTextElement} from './page-load.js';
import {menuContainer} from './menu.js';
import {homeContainer} from './home.js';

const pageLoadElements = (function () {
    const divContent = document.querySelector('#content')
    const divHeader = createContainer(divContent, 'header');

    createTextElement(document.createElement('h1'), 'Milliways', divHeader);
    createClassTextElement(document.createElement('span'), 'Home', divHeader, 'homeHeader');
    createClassTextElement(document.createElement('span'), 'Menu', divHeader, 'menuHeader');
    createClassTextElement(document.createElement('span'), 'Contact', divHeader, 'contactHeader');


    divContent.appendChild(homeContainer);
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
            divContent.appendChild(menuContainer);
        } else if (element.classList.contains('homeHeader')) {
            divContent.appendChild(homeContainer);
        } else {

        }
    }

    function renderPage (element) {
        removeActivePage();
        addSelectedPage(element);
    }

})();