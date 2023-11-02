import {createContainer, createImg, createTextElement} from './page-load.js';
export {menuContainer};

function createCard(cssClass) {
    const newDiv = document.createElement('div');
    newDiv.classList.add(cssClass);
    return newDiv;
}

const menuContainer = createCard('test');

createContainer(menuContainer, 'card');