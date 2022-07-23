const grid = document.querySelector('body #grid');
const btn = document.querySelector('button');
const color = document.querySelector('input');

function createGrid(n) {
    grid.replaceChildren();
    for (let i = 0; i < n**2; ++i) {
        const div = document.createElement('div');
        div.setAttribute('class', 'gridElement')
        div.style.width = `${100 / n}%`;
        let draw = false;
        div.addEventListener('mousedown', (e) => {
            console.log(e);
            draw = true;
        })
        div.addEventListener('hover', (e) => {
            if (true) {
                console.log(e);
                div.classList.add('active');
                div.style.backgroundColor = color.value;
            }
        })
        div.addEventListener('mouseup', () => {
            draw = false;
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