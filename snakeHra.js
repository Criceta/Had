var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context;
var gameOver;

const kobra = new Had(25);

window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d");

    
    //document.getElementById("echo").innerHTML = kobra.snakeX;

    /*placeFood();*/

    //document.addEventListener("keydown", kobra.up);
    document.addEventListener("keydown", kobra.pohyb);
    document.getElementById("echo").innerHTML = "Směr";

    
    
 
    setInterval(update, 1000/9); //111.111 milliseconds
    //document.getElementById("echo").innerHTML = kobra.velocityY;
    
}

function update() {
    
    //document.addEventListener("ArrowDown", kobra.down);
    //document.addEventListener("ArrowLeft", kobra.left);
    //document.addEventListener("ArrowRight", kobra.right);

    //document.addEventListener("keydown", kobra.napis());

    //kobra.text = "blabla";
    
    //document.getElementById("echo").innerHTML = kobra.snakeX;

    
    context.fillStyle="darkolivegreen";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle="powderblue";
    kobra.snakeX += kobra.velocityX * blockSize;
    kobra.snakeY += kobra.velocityY * blockSize;
    context.fillRect(kobra.snakeX, kobra.snakeY, blockSize, blockSize);
    

    context.fillStyle="midnightblue";
    for (let i = 0; i < kobra.snakeBody.length; i++) {
        context.fillRect(kobra.snakeBody[i][0], kobra.snakeBody[i][1], blockSize, blockSize);
    }
}


