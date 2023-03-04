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

//creating ships for player and bot
const playerShip1 = createShip("ship1", 2, "horizontal", "player");
const playerShip2 = createShip("ship2", 3, "horizontal", "player");
const playerShip3 = createShip("ship3", 3, "horizontal", "player");
const playerShip4 = createShip("ship4", 4, "horizontal", "player");
const playerShip5 = createShip("ship5", 5, "horizontal", "player");

const botShip1 = createShip("ship1", 2, "horizontal", "bot");
const botShip2 = createShip("ship2", 3, "horizontal", "bot");
const botShip3 = createShip("ship3", 3, "horizontal", "bot");
const botShip4 = createShip("ship4", 4, "horizontal", "bot");
const botShip5 = createShip("ship5", 5, "horizontal", "bot");

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

//placing ships on player gameboard
boardPlayer.placeShip(0, 0, playerShip1, "horizontal");
boardPlayer.placeShip(2, 0, playerShip2, "horizontal");
boardPlayer.placeShip(4, 0, playerShip3, "horizontal");
boardPlayer.placeShip(6, 0, playerShip4, "horizontal");
boardPlayer.placeShip(8, 0, playerShip5, "horizontal");

console.log(boardPlayer.board);
console.log(boardBot.board);
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
  document.getElementById("start-btn").innerHTML = "Restart";
  document.getElementById("start-btn").onclick = () => {
    window.location.reload();
  };
  const td = document.querySelectorAll(".battlefield-cell");
  td.forEach((cell) => {
    cell.style.borderTop = "0.5px solid rgb(0, 38, 255)";
    cell.style.borderLeft = "0.5px solid rgb(0, 38, 255)";
    cell.style.backgroundColor = "rgb(228, 228, 228)";
  });
  gameStart = true;
};
