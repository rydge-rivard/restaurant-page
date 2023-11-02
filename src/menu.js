import {createContainer, createImg, createTextElement} from './page-load.js';
export {menuContainer};

function createCard(cssClass) {
    const newDiv = document.createElement('div');
    newDiv.classList.add(cssClass);
    return newDiv;
}

const menuContainer = createCard('test');

const card1 = createContainer(menuContainer, 'card');

//Menu has img, div, and p 

createTextElement(document.createElement('div'), 'Space Burger', card1);
createTextElement(document.createElement('p'), 
    'juicy spacecow, milky way mayo, asteroid lettuce', card1);
createImg(document.createElement('img'), './img/hamburger.svg', 50, 'Pasta graphic', card1);