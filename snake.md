# SNAKE

Jedná se o klasickou hru Snake. V češtině známou pod názvem Had. Had sbírá na hracím poli jídlo (Food). Po snězení jídla vyroste o jeden článek těla. Když se had kousne do svého těla nebo narazí do zdi, hra končí.
<br><br>
Hra se restartuje/nastartuje při načtení okna. Zmáčknutím šipky pohybu se had rozpohybuje a tím začne hra.
<br><br>
Hráč bude pro pohyb používat šipky nebo WSAD. Současně by měl mít možnost využít tlačítko Pauza. Popř. možná i Restart, Start, atd.
<br><br>
Grafické rozhraní bude jednoduché. Čtvercové pole s barevným pozadím. Jídlo (Food) bude mít odlišnou výraznou barvu, had (Snake) bude mít též odlišnou výraznou barvu a obojí bude ve tvaru čtverečku. Budou se pohybovat po „čtvercové síti".

<br>

## Use case diagram

```mermaid
stateDiagram-v2
    [*] --> startGame
    startGame --> playGame
    playGame --> moveSnake
    moveSnake --> checkCrash
    checkCrash --> checkFood
    checkFood --> eatingFood
    checkFood --> moveSnake
    eatingFood --> updateSnake
    updateSnake --> moveSnake

    checkCrash --> gameOver

    gameOver --> [*]
```
<br>

## Class diagram

```mermaid
classDiagram
    index <|-- food
    index <|-- snake
    index <|-- game
    index <|-- grid
    food : +int getRandomFoodPosition
    food : +int expansion_rate
    snake : +int snakeBody
    snake : +int newSegments
    snake : +int snakeSpeed
    game : +int gameBoard
    game : +int secondSinceLastRender
    grid : +int grid_size
    class food{
      +getRandomFoodPosition()
    }
    class snake{
      +onSnake()
      +getSnakeHead()
      +expandSnake()
      +equalPositions()
      +addSegments()
    }
    class game{
      +currentTime()
      +updateSnake()
      +updateFood()
      +checkDeath()
      +drawSnake()
      +drawFood()
      +gameOver()
    }
    class grid{
      +randomGridPosition()
      +outsideGrid()
    }
```