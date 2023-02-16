import { update as updateSnake, draw as drawSnake,
    SNAKE_SPEED } from "./snake.js";

let lastRenderTime=0;
const gameBoard = document.getElementById('game-board');

function main(currentTime) {    
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) {
        return;
    }
    console.log("Rendering");
    lastRenderTime = currentTime;

    update();
    draw();

    // console.log
}

window.requestAnimationFrame(main);

// update the snake and food
function update() {
    updateSnake();
}

// draw/render the snake and food
function draw() 
{
    gameBoard.innerHTML='';
    drawSnake(gameBoard);
}