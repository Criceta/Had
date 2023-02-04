var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context;
var gameOver;

var velX = 0;
var velY = 0;

const kobra = new Had(25);
const hlodavec = new Jidlo();

window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d");

    
    //document.getElementById("echo").innerHTML = kobra.snakeX;


    document.addEventListener("keydown", kobra.pohyb);
    document.getElementById("echo").innerHTML = kobra.text;

    setInterval(update, 1000/9); //111.111 milliseconds
    //document.getElementById("echo").innerHTML = kobra.velocityY;
    
}

function update() {
    if (gameOver) {
        return;
    }

    context.fillStyle="darkolivegreen";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle="coral";
    context.fillRect(hlodavec.foodX, hlodavec.foodY, blockSize, blockSize);

    hlodavec.ulovek();

    context.fillStyle="powderblue";
    kobra.snakeX += velX * blockSize;
    kobra.snakeY += velY * blockSize;
    context.fillRect(kobra.snakeX, kobra.snakeY, blockSize, blockSize);
    

    context.fillStyle="midnightblue";
    for (let i = 0; i < kobra.snakeBody.length; i++) {
        context.fillRect(kobra.snakeBody[i][0], kobra.snakeBody[i][1], blockSize, blockSize);

        
    }

    kobra.konecHry();

}


