export default class Elem {
    constructor(matrix, cords) {
        this.matrix = matrix;
        this.cords = cords;
        this.value = '';
    }

    show() {
        for (let cord of this.cords) {
            this.matrix.setCell(cord[0], cord[1], this.value);
        }
    }
}