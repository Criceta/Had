class Had {

    constructor(blockSize){
        this.snakeX = blockSize * 5;
        this.snakeY = blockSize * 5;

        this.velocityX = 0;
        this.velocityY = 0;

        this.snakeBody = [];
        this.text = "Směr";
    }

    pohyb (event) {
        let key = event.code;
        if (key == "ArrowUp" && this.velocityY != 1) {
            this.velocityX = 0;
            this.velocityY = -1;
            this.text = "Up";
        }
        else if (key == "ArrowDown" && this.velocityY != -1) {
            this.velocityX = 0;
            this.velocityY = 1;
            this.text = "Down";
        }
        else if (key == "ArrowLeft" && this.velocityX != 1) {
            this.velocityX = -1;
            this.velocityY = 0;
            this.text = "Left";
        }
        else if (key == "ArrowRight" && this.velocityX != -1) {
            this.velocityX = 1;
            this.velocityY = 0;
            this.text = "Right";
        }

        velX = this.velocityX;
        velY = this.velocityY;

    }
    
    konecHry () {
        if (this.snakeX < 0 || this.snakeX > cols*blockSize || this.snakeY < 0 || this.snakeY > rows*blockSize) {
            gameOver = true;
            alert("Narazil jsi hlavou do zdi.");
        }
    
        for (let i = 0; i < this.snakeBody.length; i++) {
            if (this.snakeX == this.snakeBody[i][0] && this.snakeY == this.snakeBody[i][1]){
                gameOver = true;
                alert("Zbaštil ses!");
            }
        }
    }
}        

class Jidlo {

    constructor(){
        this.foodX = Math.floor(Math.random() * cols) * blockSize;
        this.foodY = Math.floor(Math.random() * rows) * blockSize;
    }

    moveFood() {
        this.foodX = Math.floor(Math.random() * cols) * blockSize;
        this.foodY = Math.floor(Math.random() * rows) * blockSize;
    }

    ulovek () {
        if (kobra.snakeX == this.foodX && kobra.snakeY == this.foodY) {
            kobra.snakeBody.push([this.foodX, this.foodY])
            this.moveFood();


            lokalniUloziste.uloz("score", lokalniUloziste.skoreHodnota+1);

        }  
        for (let i = kobra.snakeBody.length-1; i > 0; i--) {
            kobra.snakeBody[i] = kobra.snakeBody[i-1];
        }
        if (kobra.snakeBody.length) {
            kobra.snakeBody[0] = [kobra.snakeX, kobra.snakeY];
        }  
    }

}

class LokalUloz {

        constructor() {
            if(typeof (Storage) == "undefined") {
                alert('Nepodporovane lokalni uloziste');
            }
            if (typeof localStorage.getItem ("highscore") == "undefined") {
                localStorage.setItem ("highscore", 0);
            }

            this.skoreHodnota  = 0;
            this.highskoreHodnota = 0;
        }

        uloz (klic, hodnota) {
            localStorage.setItem(klic, hodnota);
            this.skoreHodnota = hodnota;
        }

        vrat (klic) {
            return localStorage.getItem(klic);
        }

        HighSkore () {
            if (this.skoreHodnota > this.highskoreHodnota) {
                localStorage.setItem("highscore", this.skoreHodnota);
            }
        }

}