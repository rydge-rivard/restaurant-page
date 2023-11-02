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

const card2 = createContainer(menuContainer, 'card');

newMenuItem(card2, 'Space Croissant', './img/food-croissant.svg', 'Croissant graphic', 
'flaky, buttery, delicious');

const card3 = createContainer(menuContainer, 'card');

newMenuItem(card3, 'Mystery Drumstick', './img/food-drumstick.svg', 'Drumstick graphic', 
'pan fried, sweet meat, origin unknown');

const card4 = createContainer(menuContainer, 'card');

newMenuItem(card4, 'Galaxy Noodles', './img/noodles.svg', 'Bowl of noodles graphic', 
'famous galactic five spice, beef broth, hot chilis');

const card5 = createContainer(menuContainer, 'card');

newMenuItem(card5, 'Moon Dog', './img/food-hot-dog.svg', 'Hot dog graphic', 
'charcoal grilled, toasted bun, fried onions');

const card6 = createContainer(menuContainer, 'card');

newMenuItem(card6, 'Earth Turkey', './img/food-turkey.svg', 'Cooked turkey graphic', 
'slow roasted, crispy, succulent');