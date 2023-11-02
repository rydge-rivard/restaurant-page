import {createContainer, createTextElement, createClassTextElement} from './page-load.js';
import {menuContainer} from './menu.js';

const pageLoadElements = (function () {
    const divContent = document.querySelector('#content')
    // const p = document.createElement('p');
    // const pText = `Milliways, better known as the Restaurant at the End of the Universe, 
    // is a five star restaurant situated at the end of time and matter. 
    // Its main attraction is allowing diners to view a Gnab Gib, 
    // before desserts are served.`;
    // createTextElement(p, pText, divContent);

    const divHeader = createContainer(divContent, 'header');

    createTextElement(document.createElement('h1'), 'Milliways', divHeader);
    createClassTextElement(document.createElement('span'), 'Home', divHeader, 'homeHeader');
    createClassTextElement(document.createElement('span'), 'Menu', divHeader, 'menuHeader');
    createClassTextElement(document.createElement('span'), 'Contact', divHeader, 'contactHeader');


    divContent.appendChild(menuContainer);
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