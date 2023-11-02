import {createContainer, createImg, createTextElement} from './page-load.js';
import {menuContainer} from './menu.js';

const pageLoadElements = (function () {
    const divContent = document.querySelector('#content')
    const p = document.createElement('p');
    const pText = `Milliways, better known as the Restaurant at the End of the Universe, 
    is a five star restaurant situated at the end of time and matter. 
    Its main attraction is allowing diners to view a Gnab Gib, 
    before desserts are served.`;

    const divHeader = createContainer(divContent, 'header');

    createTextElement(document.createElement('h1'), 'Milliways', divHeader);
    createTextElement(document.createElement('span'), 'Home', divHeader);
    createTextElement(document.createElement('span'), 'Menu', divHeader);
    createTextElement(document.createElement('span'), 'Contact', divHeader);

    createTextElement(p, pText, divContent);

    divContent.appendChild(menuContainer);
})();