# odin_Battleship
This repository is a project for The Odin Project's [curriculum](https://www.theodinproject.com/lessons/javascript-battleship). It demonstrates the use of Webpack and JavaScript to recreate the game of Battleship.

Live preview: https://williamphk.github.io/odin_Battleship/

### About this project
Battleship is a guessing game played by two players. Each player has a game board with ships arranged on it, and they take turns guessing the locations of the opponent's ships. The first player to sink all of their opponent's ships wins the game.

### Built With
- HTML
- CSS
- JavaScript
- Webpack

### Key Files for this Project:
#### Game Logic
- gameLogics/initGame.js: Initializes the game state and sets up the game board.
- gameLogics/gameStart.js: Handles the game start logic.
- gameLogics/playerMove.js: Handles the logic for a player's move.
- gameLogics/botMove.js: Handles the logic for the bot's move.

#### Factory Functions
- factories/createGameBoard.js: Creates a game board.
- factories/createPlayer.js: Creates a player object.
- factories/createShip.js: Creates a ship object.

#### Event Handlers
- eventHandlers/dragStart.js: Handles the drag start event.
- eventHandlers/dragOver.js: Handles the drag over event.
- eventHandlers/dragEnd.js: Handles the drag end event.
- eventHandlers/drop.js: Handles the drop event.
- eventHandlers/shipClick.js: Handles the ship click event.
- eventHandlers/startClick.js: Handles the start button click event.
- eventHandlers/navClick.js: Handles the navigation button click event.

### Layout
- layout/header.js: Renders the header.
- layout/main.js: Renders the main content.
- layout/battlefield.js: Renders the game board.
- layout/outToPlay.js: Renders the "out to play" message.
- layout/footer.js: Renders the footer.
