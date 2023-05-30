import Elem from "./elem.js";

export default class Wall extends Elem {
    constructor(matrix, cords) {
        super(matrix, cords)
        this.value = 'wall';
    };
};