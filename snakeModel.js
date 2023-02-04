class Had {
    //snake head

    constructor(blockSize){
        this.snakeX = blockSize * 5;
        this.snakeY = blockSize * 5;

        this.velocityX = 0;
        this.velocityY = 0;

        this.snakeBody = [];
        this.text = "ahoj";
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

        document.getElementById("echo").innerHTML = this.text;
        //document.getElementById("pohybX").innerHTML = this.velocityX;
        //document.getElementById("pohybY").innerHTML = this.velocityY;

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

class jidlo {
    
}

