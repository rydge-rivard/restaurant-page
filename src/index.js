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
            divContent.appendChild(menuContainer);
        }
    }

    function renderPage (element) {
        removeActivePage();
        addSelectedPage(element);
    }

})();