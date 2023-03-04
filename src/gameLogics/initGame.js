//import factory functions
import { createPlayer } from "../factories/createPlayer";
import { createShip } from "../factories/createShip";
import { createGameboard } from "../factories/createGameboard";

//import game logic functions
import { gameStart } from "./gameStart";

//import event handler functions
import { shipClick } from "../eventHandlers/shipClick";
import { dragStart } from "../eventHandlers/dragStart";
import { dragOver } from "../eventHandlers/dragOver";
import { dragEnd } from "../eventHandlers/dragEnd";
import { drop } from "../eventHandlers/drop";
import { playerMove } from "./playerMove";
import { startClick } from "../eventHandlers/startClick";

const initGame = () => {
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

  let isGameStart = false;

  gameStart(
    playerShip1,
    playerShip2,
    playerShip3,
    playerShip4,
    playerShip5,
    botShip1,
    botShip2,
    botShip3,
    botShip4,
    botShip5,
    boardPlayer,
    boardBot
  );

  //creating players
  let player1 = createPlayer("Player");
  let player2 = createPlayer("Bot");

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
        isGameStart,
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
      shipClick(e, boardPlayer, isGameStart)
    );
    ships[i].addEventListener("dragstart", (e) => dragStart(e, isGameStart));
    ships[i].addEventListener("dragend", (e) => dragEnd(e, isGameStart));
  }

  const battlefieldCell = document.querySelectorAll(".battlefield-cell");
  for (let i = 0; i < battlefieldCell.length; i++) {
    battlefieldCell[i].addEventListener("dragover", (e) =>
      dragOver(e, isGameStart)
    );
    battlefieldCell[i].addEventListener("drop", (e) =>
      drop(e, boardPlayer, isGameStart, selectedSubDiv)
    );
  }

  document.getElementById("start-btn").addEventListener("click", (e) => {
    startClick(
      e,
      playerShip1,
      playerShip2,
      playerShip3,
      playerShip4,
      playerShip5,
      botShip1,
      botShip2,
      botShip3,
      botShip4,
      botShip5,
      boardPlayer,
      boardBot
    );
    isGameStart = !isGameStart;
    console.log(isGameStart);
  });
};

export { initGame };
