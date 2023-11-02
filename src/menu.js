import {createContainer, createImg, createTextElement} from './page-load.js';
export {menuContainer};

function createCard(cssClass) {
    const newDiv = document.createElement('div');
    newDiv.classList.add(cssClass);
    return newDiv;
}

const menuContainer = createCard('menu');

const card1 = createContainer(menuContainer, 'card');

function newMenuItem (cardNumber, item, src, alt, ingredients) {
    createImg(document.createElement('img'), src, 50, alt, cardNumber);
    createTextElement(document.createElement('div'), item, cardNumber);
    createTextElement(document.createElement('p'), ingredients, cardNumber);
}

newMenuItem(card1, 'Space Burger', './img/hamburger.svg', 'Pasta graphic', 
'juicy spacecow, milky way mayo, asteroid lettuce');

