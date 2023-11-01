export {createH1};

// const pageLoadElements = (function () {
//     const img = document.createElement('img');
//     const p = document.createElement('p');
//     const divContent = document.querySelector('#content')
//     console.log('init working')

//     function createImg () {
//         divContent.appendChild(img);
//     }

//     function createP () {
//         p.textContent = `Milliways, better known as the Restaurant at the End of the Universe, 
//         is a five star restaurant situated at the end of time and matter. 
//         Its main attraction is allowing diners to view a Gnab Gib, 
//         before desserts are served.`;
//         divContent.appendChild(p);
//     }

//     return {
//         createP: createP,
//         createImg: createImg,
//     }
// })();

const createH1 = () => {
    const divContent = document.querySelector('#content')
    const h1 = document.createElement('h1');
    console.log('enter function')
    h1.textContent = 'Milliways';
    divContent.appendChild(h1);
}