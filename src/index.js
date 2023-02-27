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
import { rivalCellClick } from "./eventHandlers/rivalCellClick";

//import helper functions
import { dom } from "./utils/dom";
import { randomX, randomY, randomDirection } from "./utils/random";

dom();

let gameStart = false;
let isGameEnd = false;

//creating ships for self and rival
const selfShip1 = createShip("ship1", 1, "horizontal", "self");
const selfShip2 = createShip("ship2", 1, "horizontal", "self");
const selfShip3 = createShip("ship3", 1, "horizontal", "self");
const selfShip4 = createShip("ship4", 1, "horizontal", "self");
const selfShip5 = createShip("ship5", 2, "horizontal", "self");
const selfShip6 = createShip("ship6", 2, "horizontal", "self");
const selfShip7 = createShip("ship7", 2, "horizontal", "self");
const selfShip8 = createShip("ship8", 3, "horizontal", "self");
const selfShip9 = createShip("ship9", 3, "horizontal", "self");
const selfShip10 = createShip("ship10", 4, "horizontal", "self");

const rivalShip1 = createShip("ship1", 1, "horizontal", "rival");
const rivalShip2 = createShip("ship2", 1, "horizontal", "rival");
const rivalShip3 = createShip("ship3", 1, "horizontal", "rival");
const rivalShip4 = createShip("ship4", 1, "horizontal", "rival");
const rivalShip5 = createShip("ship5", 2, "horizontal", "rival");
const rivalShip6 = createShip("ship6", 2, "horizontal", "rival");
const rivalShip7 = createShip("ship7", 2, "horizontal", "rival");
const rivalShip8 = createShip("ship8", 3, "horizontal", "rival");
const rivalShip9 = createShip("ship9", 3, "horizontal", "rival");
const rivalShip10 = createShip("ship10", 4, "horizontal", "rival");

//creating gameboard for self and rival
let boardSelf = createGameboard();
let boardRival = createGameboard();

console.log(boardSelf);
console.log(boardRival);

//placing ships on rival gameboard
boardRival.placeShip(randomX(), randomY(), selfShip1, randomDirection());
boardRival.placeShip(randomX(), randomY(), selfShip2, randomDirection());
boardRival.placeShip(randomX(), randomY(), selfShip3, randomDirection());
boardRival.placeShip(randomX(), randomY(), selfShip4, randomDirection());
boardRival.placeShip(randomX(), randomY(), selfShip5, randomDirection());
boardRival.placeShip(randomX(), randomY(), selfShip6, randomDirection());
boardRival.placeShip(randomX(), randomY(), selfShip7, randomDirection());
boardRival.placeShip(randomX(), randomY(), selfShip8, randomDirection());
boardRival.placeShip(randomX(), randomY(), selfShip9, randomDirection());
boardRival.placeShip(randomX(), randomY(), selfShip10, randomDirection());

//placing ships on self gameboard
boardSelf.placeShip(0, 0, rivalShip1, "horizontal");
boardSelf.placeShip(0, 3, rivalShip2, "horizontal");
boardSelf.placeShip(0, 6, rivalShip3, "horizontal");
boardSelf.placeShip(0, 9, rivalShip4, "horizontal");
boardSelf.placeShip(2, 1, rivalShip5, "horizontal");
boardSelf.placeShip(2, 7, rivalShip6, "horizontal");
boardSelf.placeShip(3, 4, rivalShip7, "horizontal");
boardSelf.placeShip(6, 1, rivalShip8, "horizontal");
boardSelf.placeShip(6, 6, rivalShip9, "horizontal");
boardSelf.placeShip(8, 3, rivalShip10, "horizontal");

//creating players
let player1 = createPlayer("Player");
let player2 = createPlayer("Bot");

console.log(player1);

const gameLogic = (() => {
  let turn = player1.name;
  return { turn: turn };
})();

const battleCellContentRival = document.querySelectorAll(
  ".battle-cell-content__rival"
);

battleCellContentRival.forEach((cell, index) => {
  cell.addEventListener("click", () =>
    rivalCellClick(
      cell,
      index,
      gameStart,
      gameLogic,
      boardRival,
      boardSelf,
      isGameEnd,
      player1,
      player2
    )
  );
});

const ships = document.querySelectorAll(".ship");
for (let i = 0; i < ships.length; i++) {
  ships[i].addEventListener("click", (e) => shipClick(e, boardSelf, gameStart));
  ships[i].addEventListener("dragstart", (e) => dragStart(e, gameStart));
  ships[i].addEventListener("dragend", (e) => dragEnd(e, gameStart));
}

const battlefieldCell = document.querySelectorAll(".battlefield-cell");
for (let i = 0; i < battlefieldCell.length; i++) {
  battlefieldCell[i].addEventListener("dragover", (e) =>
    dragOver(e, gameStart)
  );
  battlefieldCell[i].addEventListener("drop", (e) =>
    drop(e, boardSelf, gameStart)
  );
}

document.getElementById("start-btn").onclick = () => {
  gameStart = true;
};
