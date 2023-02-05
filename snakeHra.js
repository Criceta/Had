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
const lokalniUloziste = new LokalUloz();


window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d");

    
    lokalniUloziste.highskoreHodnota = localStorage.getItem("highscore");
    document.getElementById("HighScore").innerHTML =  lokalniUloziste.highskoreHodnota;
    localStorage.setItem("score", kobra.snakeBody.length);
    document.getElementById("Score").innerHTML = 0;

    document.addEventListener("keydown", kobra.pohyb);

    setInterval(update, 1000/9); //111.111 milliseconds
}

function update() {
    if (gameOver) {
        lokalniUloziste.HighSkore();
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

    document.getElementById("Score").innerHTML = lokalniUloziste.vrat("score");
}


