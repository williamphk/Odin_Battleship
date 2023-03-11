# odin_Battleship
This repository is a project for The Odin Project's [curriculum](https://www.theodinproject.com/lessons/javascript-battleship). It demonstrates the use of Webpack and JavaScript to recreate the game of Battleship. This proeject use "for loop" extensively placing ships and tracking ships' locations.

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
- factories/createGameBoard.js: Creates a game board with function to calculate probability on the board.
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

#### Layout
- layout/header.js: Renders the header.
- layout/main.js: Renders the main content.
- layout/battlefield.js: Renders the game board.
- layout/howToPlay.js:  Renders the "How to Play" section.
- layout/footer.js: Renders the footer.

### How to Play
To play the game, first arrange your ships on the game board. You can do this by dragging and dropping them onto the board. Once you have placed your ships, click the "Start Game" button to begin.

On your turn, click a cell on your opponent's board to guess if there is a ship there. If you hit a ship, a red "X" will appear on the cell. If you miss, a  dot will appear on the cell.

The game ends when one player has sunk all of their opponent's ships.

### Getting Started
To get a local copy up and running follow these simple steps:

- Clone the repository: git clone https://github.com/williamphk/odin_Battleship.git
- Navigate to the project directory: cd odin_Battleship
- Install the dependencies: npm install
- Build the project: npm run build
- Open dist/index.html in your browser.

### Acknowledgements
- [The Odin Project](https://www.theodinproject.com/)
