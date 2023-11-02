import {createContainer, createImg, createTextElement} from './page-load.js';

const pageLoadElements = (function () {
    const divContent = document.querySelector('#content')
    const p = document.createElement('p');
    const pText = `Milliways, better known as the Restaurant at the End of the Universe, 
    is a five star restaurant situated at the end of time and matter. 
    Its main attraction is allowing diners to view a Gnab Gib, 
    before desserts are served.`;

    const img = document.createElement('img');

    // const divContainer = divContent.querySelector('.header')
    createContainer(divContent, 'header');
    createTextElement(document.createElement('h1'), 'Milliways', divContent);
    createTextElement(document.createElement('h3'), 'Home', divContent);
    createTextElement(document.createElement('h3'), 'Menu', divContent);
    createTextElement(document.createElement('h3'), 'Contact', divContent);

    createTextElement(p, pText, divContent);

    // createImg(img, './bar.jpg', '800', 'Bar with wooden walls.', divContent);
})();