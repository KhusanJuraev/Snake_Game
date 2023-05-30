import Matrix from "./matrix.js";
import Snake from "./snake.js";
import Fruit from "./fruit.js";
import Wall from "./wall.js";
import Generate from "./generate.js";

window.onload = function (e) {
    let div = document.querySelector('.fields'),
        matrix = new Matrix(div),
        wall = new Wall(matrix, [[1, 10], [2, 10], [3, 10], [4, 10], [5, 10], [6, 10], [7, 10], [8, 10]]),
        snake = new Snake(matrix, [[3, 1], [2, 1], [1, 1]], 'right'),
        score = 0;
    document.getElementById('score').innerText = `${score}`

    matrix.calcWidthMatrix();
    matrix.create();

    (new Fruit(matrix, [[5, 8], [7, 5], [12, 10], [15, 20]])).show();

    wall.show();
    snake.show();

    let timer = setInterval(() => {
        snake.move();

        if (!snake.alive) {
            clearInterval(timer)
            alert(`Game Over! Score: ${score}`)
        }

        if (snake.eaten) {
            score++;
            document.getElementById('score').innerText = `Score: ${score}`

            let x, y;

            do {
                x = Generate.random(1, matrix.cols);
                y = Generate.random(1, matrix.rows);
            } while(matrix.getCell(x, y) !== '')

            (new Fruit(matrix, [[x, y], [x, y], [x, y], [x, y]])).show();
        }
    }, 100);

    document.addEventListener('keydown', function (event) {
        switch (event.key) {
            case "ArrowLeft":
                if (snake.course !== 'right')
                    snake.newCourse = 'left'
                break;
            case "ArrowRight":
                if (snake.course !== 'left')
                    snake.newCourse = 'right'
                break;
            case "ArrowUp":
                if (snake.course !== 'down')
                    snake.newCourse = 'up'
                break;
            case "ArrowDown":
                if (snake.course !== 'up')
                    snake.newCourse = 'down'
                break;
        }
    });
};

