import { gameStart } from "../gameLogics/gameStart.js";
import {
  resetShipDivPosition,
  resetBoard,
  resetShipDivDirection,
} from "../layout/battlefield.js";

const startClick = (
  ev,
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
) => {
  // console.log("clicked");

  const td = document.getElementsByClassName("battlefield-cell");
  const draggable = document.querySelectorAll(".ship");

  switch (ev.target.innerHTML) {
    case "Start":
      console.log("Game started");
      ev.target.innerHTML = "Restart";
      for (let i = 0; i < td.length; i++) {
        td[i].classList.toggle("battlefield-cell--active");
      }
      draggable.forEach((ship) => {
        ship.draggable = false;
      });
      // console.log(boardPlayer.probabilityBoard);
      break;
    case "Restart":
      console.log("Game restarted");
      ev.target.innerHTML = "Start";
      for (let i = 0; i < td.length; i++) {
        td[i].classList.toggle("battlefield-cell--active");
      }
      draggable.forEach((ship) => {
        ship.draggable = true;
      });
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
      const shipDiv1 = document.getElementById("drag1");
      const shipDiv2 = document.getElementById("drag2");
      const shipDiv3 = document.getElementById("drag3");
      const shipDiv4 = document.getElementById("drag4");
      const shipDiv5 = document.getElementById("drag5");

      resetShipDivDirection();
      resetBoard();
      resetShipDivPosition(shipDiv1, shipDiv2, shipDiv3, shipDiv4, shipDiv5);
      boardPlayer.setProbabilityBoardToZero();
      boardPlayer.calculateProbability();

      const result = document.querySelector(".result");
      result.innerHTML = "";
      break;
  }
};

export { startClick };
