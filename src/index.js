//import layout functions
import { header } from "./layout/header";
import { main } from "./layout/main";
import { footer } from "./layout/footer";

//import factory functions
import { createShip } from "./factories/createShip";
import { createGameboard } from "./factories/createGameboard";
import { createPlayer } from "./factories/createPlayer";

//import event handler functions
import { shipClick } from "./eventHandlers/shipClick";
import { dragStart } from "./eventHandlers/dragStart";
import { dragOver } from "./eventHandlers/dragOver";
import { dragEnd } from "./eventHandlers/dragEnd";
import { drop } from "./eventHandlers/drop";
import { playerMove } from "./gameLogics/playerMove";

//import helper functions
import { randomX, randomY, randomDirection } from "./utils/random";

header();
main();
footer();

let gameStart = false;
let isGameEnd = false;

//creating ships for player and bot
const playerShip1 = createShip("ship1", 1, "horizontal", "player");
const playerShip2 = createShip("ship2", 1, "horizontal", "player");
const playerShip3 = createShip("ship3", 1, "horizontal", "player");
const playerShip4 = createShip("ship4", 1, "horizontal", "player");
const playerShip5 = createShip("ship5", 2, "horizontal", "player");
const playerShip6 = createShip("ship6", 2, "horizontal", "player");
const playerShip7 = createShip("ship7", 2, "horizontal", "player");
const playerShip8 = createShip("ship8", 3, "horizontal", "player");
const playerShip9 = createShip("ship9", 3, "horizontal", "player");
const playerShip10 = createShip("ship10", 4, "horizontal", "player");

const botShip1 = createShip("ship1", 1, "horizontal", "bot");
const botShip2 = createShip("ship2", 1, "horizontal", "bot");
const botShip3 = createShip("ship3", 1, "horizontal", "bot");
const botShip4 = createShip("ship4", 1, "horizontal", "bot");
const botShip5 = createShip("ship5", 2, "horizontal", "bot");
const botShip6 = createShip("ship6", 2, "horizontal", "bot");
const botShip7 = createShip("ship7", 2, "horizontal", "bot");
const botShip8 = createShip("ship8", 3, "horizontal", "bot");
const botShip9 = createShip("ship9", 3, "horizontal", "bot");
const botShip10 = createShip("ship10", 4, "horizontal", "bot");

//creating gameboard for player and bot
let boardPlayer = createGameboard();
let boardBot = createGameboard();

console.log(boardPlayer);
console.log(boardBot);

//placing ships on bot gameboard
boardBot.placeShip(randomX(), randomY(), botShip1, randomDirection());
boardBot.placeShip(randomX(), randomY(), botShip2, randomDirection());
boardBot.placeShip(randomX(), randomY(), botShip3, randomDirection());
boardBot.placeShip(randomX(), randomY(), botShip4, randomDirection());
boardBot.placeShip(randomX(), randomY(), botShip5, randomDirection());
boardBot.placeShip(randomX(), randomY(), botShip6, randomDirection());
boardBot.placeShip(randomX(), randomY(), botShip7, randomDirection());
boardBot.placeShip(randomX(), randomY(), botShip8, randomDirection());
boardBot.placeShip(randomX(), randomY(), botShip9, randomDirection());
boardBot.placeShip(randomX(), randomY(), botShip10, randomDirection());

//placing ships on player gameboard
boardPlayer.placeShip(0, 0, playerShip1, "horizontal");
boardPlayer.placeShip(0, 3, playerShip2, "horizontal");
boardPlayer.placeShip(0, 6, playerShip3, "horizontal");
boardPlayer.placeShip(0, 9, playerShip4, "horizontal");
boardPlayer.placeShip(2, 1, playerShip5, "horizontal");
boardPlayer.placeShip(2, 7, playerShip6, "horizontal");
boardPlayer.placeShip(3, 4, playerShip7, "horizontal");
boardPlayer.placeShip(6, 1, playerShip8, "horizontal");
boardPlayer.placeShip(6, 6, playerShip9, "horizontal");
boardPlayer.placeShip(8, 3, playerShip10, "horizontal");

console.log(boardPlayer.board);

//creating players
let player1 = createPlayer("Player");
let player2 = createPlayer("Bot");

console.log(player1);

const gameLogic = (() => {
  let turn = player1.name;
  return { turn: turn };
})();

const battleCellContentBot = document.querySelectorAll(
  ".battle-cell-content__bot"
);

battleCellContentBot.forEach((cell, index) => {
  cell.addEventListener("click", () =>
    playerMove(
      cell,
      index,
      gameStart,
      gameLogic,
      boardBot,
      boardPlayer,
      isGameEnd,
      player1,
      player2
    )
  );
});

let selectedSubDiv = null;

const shipSubDiv = document.querySelectorAll(".ship-sub-div");
for (let i = 0; i < shipSubDiv.length; i++) {
  shipSubDiv[i].addEventListener("mouseover", (e) => {
    selectedSubDiv = e.target.getAttribute("data-div");
    console.log(selectedSubDiv);
  });
}

const ships = document.querySelectorAll(".ship");
for (let i = 0; i < ships.length; i++) {
  ships[i].addEventListener("click", (e) =>
    shipClick(e, boardPlayer, gameStart)
  );
  ships[i].addEventListener("dragstart", (e) => dragStart(e, gameStart));
  ships[i].addEventListener("dragend", (e) => dragEnd(e, gameStart));
}

const battlefieldCell = document.querySelectorAll(".battlefield-cell");
for (let i = 0; i < battlefieldCell.length; i++) {
  battlefieldCell[i].addEventListener("dragover", (e) =>
    dragOver(e, gameStart)
  );
  battlefieldCell[i].addEventListener("drop", (e) =>
    drop(e, boardPlayer, gameStart, selectedSubDiv)
  );
}

document.getElementById("start-btn").onclick = () => {
  const td = document.querySelectorAll(".battlefield-cell");
  td.forEach((cell) => {
    cell.style.borderTop = "0.5px solid rgb(0, 38, 255)";
    cell.style.borderLeft = "0.5px solid rgb(0, 38, 255)";
    cell.style.backgroundColor = "rgb(228, 228, 228)";
  });
  gameStart = true;
};
