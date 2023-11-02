import {createImg, createTextElement} from './page-load.js';

const pageLoadElements = (function () {
    const divContent = document.querySelector('#content')
    const p = document.createElement('p');
    const pText = `Milliways, better known as the Restaurant at the End of the Universe, 
    is a five star restaurant situated at the end of time and matter. 
    Its main attraction is allowing diners to view a Gnab Gib, 
    before desserts are served.`;
    
    const h1 = document.createElement('h1');
    const h1Text = 'Milliways';

    const img = document.createElement('img');

    createTextElement(h1, h1Text, divContent);
    createTextElement(p, pText, divContent);

    // createImg(img, './bar.jpg', '800', 'Bar with wooden walls.', divContent);
})();