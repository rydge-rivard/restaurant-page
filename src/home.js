import {createContainer, createTextElement, createCard} from './page-load.js';
export {homeContainer};

const homeContainer = createCard('home');


const pText = `Milliways, better known as the Restaurant at the End of the Universe, 
is a five star restaurant situated at the end of time and matter. 
Its main attraction is allowing diners to view a Gnab Gib, 
before desserts are served.`;

createTextElement (document.createElement('p'), pText, homeContainer);