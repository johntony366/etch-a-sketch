const grid = document.querySelector('body #grid');
const btn = document.querySelector('button');

function createGrid(n) {
    grid.replaceChildren();
    for (let i = 0; i < n**2; ++i) {
        const div = document.createElement('div');
        div.setAttribute('class', 'gridElement')
        div.style.width = `${100 / n}%`;
        div.addEventListener('mouseover', () => {
            div.classList.add('active');
        })
        grid.appendChild(div);
    }
}

function resizeGrid() {
    const n = Number(prompt('Enter new number of squares per side: '));
    if (n > 100 || n <= 0) {
        alert("Please enter a number between 0 and 100");
    }
    createGrid(n);
}

btn.addEventListener('click', resizeGrid);
createGrid(16);