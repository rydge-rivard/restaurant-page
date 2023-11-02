export {createTextElement, createImg, createContainer, createClassTextElement, createCard};

const createTextElement = (element, text, parent) => {
    element.textContent = text;
    parent.appendChild(element);
}

const createClassTextElement = (element, text, parent, cssClass) => {
    element.textContent = text;
    parent.appendChild(element);
    element.classList.add(cssClass);
}

const createImg = (element, src, width, alt, parent) => {
    element.setAttribute("src", src);
    element.setAttribute("width", width);
    element.setAttribute("alt", alt);
    parent.appendChild(element);
}

const createContainer = (parent, cssClass) => {
    const newDiv = document.createElement('div');
    newDiv.classList.add(cssClass);
    parent.appendChild(newDiv);
    return newDiv;
};

const createCard = (cssClass) => {
    const newDiv = document.createElement('div');
    newDiv.classList.add(cssClass);
    newDiv.classList.add('active');
    return newDiv;
}
