import Elem from "./elem.js";

export default class Snake extends Elem{
    constructor(matrix, cords, course) {
        super(matrix, cords);
        this.matrix = matrix;
        this.value = 'snake'
        this.course = course;
        this.newCourse = course;
        this.alive = true;
        this.eaten = false;
    };

    move() {
        if (!this.alive) return;

        let head = this.cords[0].slice();

        this.eaten = false;
        this.course = this.newCourse

        switch (this.course) {
            case 'right':
                head[0]++;
                break;
            case 'left':
                head[0]--;
                break;
            case 'up':
                head[1]--;
                break;
            case 'down':
                head[1]++;
                break;
        }

        if (!this.checkAlive(head)) {
              this.alive = false;
              return;
        }

        let find = this.matrix.getCell(head[0], head[1]);

        if (find === 'wall' || find === 'snake') {
            this.alive = false;
            return;
        }

        if (find === 'fruit') {
            this.eaten = true
        } else {
            let tail = this.cords.pop();
            this.matrix.setCell(tail[0], tail[1], '');
        }

        this.cords.unshift(head)
        this.matrix.setCell(head[0], head[1], 'snake');
    };
    
    checkAlive(head) {
        return head[0] >= 1 && head[0] <= this.matrix.cols &&
               head[1] >= 1 && head[1] <= this.matrix.rows;
    };
};