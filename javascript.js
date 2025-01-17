const container = document.querySelector('.container');
container.addEventListener('mouseenter', event => {
    if (event.target.classList.contains('square')) {
        event.target.classList.add('hovered');

    };
}, true);

const genButton = document.querySelector('#gen-btn');
genButton.addEventListener('click', () => {
    while (true) {
        const size = prompt('Enter size of grid (max: 100)');
        if (size <= 100) {
            generateGrid(size);
            break;
        };
    }
});

function generateGrid(size) {
    container.replaceChildren();

    const square = document.createElement('div');
    square.classList.add('square');

    const row = document.createElement('div');
    row.classList.add('row');

    for (let i = 0; i < size; i++) {
        const cloneRow = row.cloneNode();
        container.appendChild(cloneRow);

        for (let j = 0; j < size; j++) {
            const cloneSquare = square.cloneNode();
            cloneRow.appendChild(cloneSquare);
        };
    };
};