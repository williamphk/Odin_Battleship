//import factory functions
import { createShip } from "./factories/createShip";
import { createGameboard } from "./factories/createGameboard";
import { createPlayer } from "./factories/createPlayer";

//import event handler functions
import { shipClick } from "./eventsHandlers/shipClick";
import { dragStart } from "./eventsHandlers/dragStart";
import { dragOver } from "./eventsHandlers/dragOver";
import { dragEnd } from "./eventsHandlers/dragEnd";
import { drop } from "./eventsHandlers/drop";

//import helper functions
import { dom } from "./utils/dom";
import { randomX, randomY, randomDirection } from "./utils/random";

dom();

let gameStart = false;
let isGameEnd = false;

const hitCount = document.getElementById("hit-count");

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

console.log(selfShip1);

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
let player2 = createPlayer("AI");

console.log(player1);

const battleCellContentRival = document.querySelectorAll(
  ".battle-cell-content__rival"
);
const battleCellContentSelf = document.querySelectorAll(
  ".battle-cell-content__self"
);

const result = document.querySelector(".result");

battleCellContentRival.forEach((cell, index) => {
  cell.addEventListener("click", (e) => {
    if (!gameStart) return;
    if (gameLogic.turn === player2.name) return;
    if (cell.innerHTML === "。") return;
    hitCount.innerHTML = `You hit: ${boardRival.hitCount()} AI hit: ${boardSelf.hitCount()}`;
    if (isGameEnd) return;
    else {
      cell.innerHTML = "。";
      boardRival.receiveAttack(
        battleCellContentRival[index].dataset.x,
        battleCellContentRival[index].dataset.y
      );
      if (boardRival.isAllShipSink()) {
        result.innerHTML = "You win";
        hitCount.innerHTML = `You hit: ${boardRival.hitCount()} AI hit: ${boardSelf.hitCount()}`;
        isGameEnd = true;
        document.getElementById("start-btn").innerHTML = "Restart";
        document.getElementById("start-btn").onclick = () => {
          window.location.reload();
        };
      } else {
        gameLogic.turn = player2.name;
        AIMove(randomX(), randomY());
      }
    }
  });
});

const gameLogic = (() => {
  let turn = player1.name;
  return { turn: turn };
})();

const AIMove = (x, y) => {
  if (boardSelf.isHit(x, y) || boardSelf.isMiss(x, y)) {
    AIMove(randomX(), randomY());
  } else {
    boardSelf.receiveAttack(x, y);
    let cell = document.querySelector(
      `[class$="battle-cell-content battle-cell-content__self"][data-x="${x}"][data-y="${y}"]`
    );
    let shipDiv = cell.innerHTML;
    if (boardSelf.isHit(x, y)) {
      console.log("x", x, "y", y);
      if (shipDiv) {
        var div = document.createElement("div");
        div.style.backgroundColor = "red";
        div.style.position = "absolute";
        div.style.top = "0";
        div.style.width = "100%";
        div.style.height = "100%";
        div.style.zIndex = "10";
        div.innerHTML = "H";
        cell.appendChild(div);
        hitCount.innerHTML = `You hit: ${boardRival.hitCount()} AI hit: ${boardSelf.hitCount()}`;
      } else {
        cell.style.position = "relative";
        cell.innerHTML = "H";
        cell.style.zIndex = "3";
        cell.style.backgroundColor = "red";
      }
    } else if (boardSelf.isMiss(x, y)) {
      cell.innerHTML = "M";
    }
    if (boardSelf.isAllShipSink()) {
      result.innerHTML = "AI win";
      isGameEnd = true;
      document.getElementById("start-btn").innerHTML = "Restart";
      document.getElementById("start-btn").onclick = () => {
        window.location.reload();
      };
    } else {
      gameLogic.turn = player1.name;
    }
  }
};

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
