import {createContainer, createTextElement, createCard} from './page-load.js';
export {contactContainer};

const contactContainer = createCard('contact');


const pText = `Get in touch!`;

createTextElement (document.createElement('p'), pText, contactContainer);