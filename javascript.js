const container = document.querySelector('.container');
const square = document.createElement('div');
square.setAttribute('class', 'square');


for (let i = 0; i < 16; i++) {
    const cloneSquare = square.cloneNode();
    container.appendChild(cloneSquare);
}
