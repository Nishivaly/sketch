generateGrid(16);

function generateGrid(size) {
    const container = document.querySelector('.container');

    const square = document.createElement('div');
    square.setAttribute('class', 'square');

    const row = document.createElement('div');
    row.setAttribute('class', 'row');

    for (let i = 0; i < size; i++) {
        const cloneRow = row.cloneNode();
        container.appendChild(cloneRow);

        for (let j = 0; j < size; j++) {
            const cloneSquare = square.cloneNode();
            cloneRow.appendChild(cloneSquare);
        };
    };
};
