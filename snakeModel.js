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

    /*napis () {
        this.velocityX = 0;
        this.velocityY = -1;
    }*/
    
    
    /*up (event) {
        //this.text = "Jsem tu";
        //document.write(this.text);
        let key = event.code;
        //document.getElementById("echo").innerHTML = key;
        
        //document.write(key);

        if (key == "ArrowUp") {
            gameOver = true;
            this.text = "Jsem tu";
            document.write(this.text);
            this.text = "Pravda";

            this.velocityX = 0;
            this.velocityY = -1;

        }
        else {
            //this.velocityX = 1;
            //this.velocityY = 0;
            this.text = "Nepravda";
        }
        document.getElementById("echo").innerHTML = this.text;
    }*/

    /*down (event) {
        let key = event.code;
        if (key == "ArrowUp") {
            this.text = "Pravda";

            this.velocityX = 0;
            this.velocityY = -1;

        }
        else {
            //this.velocityX = 1;
            //this.velocityY = 0;
            this.text = "Nepravda";
        }
        document.getElementById("echo").innerHTML = this.text;
    }*/
    

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
        document.getElementById("pohybX").innerHTML = this.velocityX;
        document.getElementById("pohybY").innerHTML = this.velocityY;

        velX = this.velocityX;
        velY = this.velocityY;
        //return this.velocityY;

    }

    
        //document.write(this.text);
        //this.velocityX = 3;
        
        /*document.addEventListener("ArrowUp")
            this.text = "Ano";
            document.write(this.text);
        }else if (document.addEventListener("ArrowUp")) {
            this.text = "Ne";
            document.write(this.text);
        }
        else {
            document.write(this.text);
        }*/
        //this.text;
    

    changeDirection(e) {
        //document.getElementById("echo").innerHTML = kobra.snakeX;
        if (e.code == "ArrowUp" && this.velocityY != 1) {
            this.velocityX = 0;
            this.velocityY = -1;
        }
        else if (e.code == "ArrowDown" && this.velocityY != -1) {
            this.velocityX = 0;
            this.velocityY = 1;
        }
        else if (e.code == "ArrowLeft" && this.velocityX != 1) {
            this.velocityX = -1;
            this.velocityY = 0;
        }
        else if (e.code == "ArrowRight" && this.velocityX != -1) {
            this.velocityX = 1;
            this.velocityY = 0;
        }
        
    }
    

}        


    
    
    //changeDirection(e) 






class jidlo {
    
}

