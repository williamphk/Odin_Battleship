# odin_Battleship
## Overview:
A recreation of the classic Battleship game built as a part of The Odin Project's curriculum. Implemented using Webpack and JavaScript, with an emphasis on "for loops" for ship placement and tracking. The live game can be previewed [here](https://williamphk.github.io/odin_Battleship/).

## Key Features:
- Drag and Drop Functionality: Players can drag and position their fleet on the game board.
- Heuristic Algorithm: Designed a strategy for the bot player that calculates ship location probabilities by analyzing adjacent hits and potential ship orientations, then predicts the most probable attack point.
- Responsive UI: Features like "How to Play" and a well-structured game board enhance user experience.

## Technical Highlights:

- Languages/Frameworks: HTML, CSS, JavaScript, Webpack.
- Game Logic Modules: Handle game initialization, player moves, bot moves, and game start.
- Factory Functions: Facilitate the creation of game boards, players, and individual ships.
- Event Handlers: Deal with various in-game events such as dragging ships, placing ships, and initiating game start.
- Layout Files: Responsible for rendering the header, main content, game board, and other UI components.

## Key Files for this Project:
### Game Logic
- gameLogics/initGame.js: Initializes the game state and sets up the game board.
- gameLogics/gameStart.js: Handles the game start logic.
- gameLogics/playerMove.js: Handles the logic for a player's move.
- gameLogics/botMove.js: Handles the logic for the bot's move.

### Factory Functions
- factories/createGameBoard.js: Creates a game board with function to calculate probability on the board.
- factories/createPlayer.js: Creates a player object.
- factories/createShip.js: Creates a ship object.

### Event Handlers
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
- layout/howToPlay.js:  Renders the "How to Play" section.
- layout/footer.js: Renders the footer.

## How to Play
To play the game, first arrange your ships on the game board. You can do this by dragging and dropping them onto the board. Once you have placed your ships, click the "Start Game" button to begin.

On your turn, click a cell on your opponent's board to guess if there is a ship there. If you hit a ship, a red "X" will appear on the cell. If you miss, a  dot will appear on the cell.

The game ends when one player has sunk all of their opponent's ships.

## Getting Started
To get a local copy up and running follow these simple steps:

- Clone the repository: git clone https://github.com/williamphk/odin_Battleship.git
- Navigate to the project directory: cd odin_Battleship
- Install the dependencies: npm install
- Build the project: npm run build
- Open dist/index.html in your browser.

## Acknowledgements
- [The Odin Project](https://www.theodinproject.com/)
