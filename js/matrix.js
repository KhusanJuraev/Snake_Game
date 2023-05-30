export default class Matrix {
    constructor(elem, rows = 20, cols = 20) {
        this.elem = elem;
        this.cells = [];
        this.rows = rows;
        this.cols = cols;
        this.widthMatrix = 20 * this.rows + 5;
    }
    create() {
        for (let i = 0; i < this.rows * this.cols; i++) {
            let div = document.createElement('div');
            div.setAttribute('data-game', '')
            this.elem.appendChild(div);
            this.cells[i] = '';
        }
    }
    getCell(x, y) {
        let num = calcNum(x, y);
        return this.cells[num];
    }

    setCell(x, y, val) {
        let num = calcNum(x, y);
        this.cells[num] = val;
        this.elem.children[num].setAttribute('data-game', val);
    }

    calcWidthMatrix() {
        document.querySelector('.fields').style.width = `${this.widthMatrix}px`
    }
}
function calcNum(x, y) {
    if (x && y)
        return (y - 1)  * 20 + x - 1
    else
        return Math.floor(Math.random() * 400);
}