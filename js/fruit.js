import Elem from "./elem.js";

export default class Fruit extends Elem {
    constructor(matrix, cords) {
        super(matrix, cords)
        this.value = 'fruit';
    }

}