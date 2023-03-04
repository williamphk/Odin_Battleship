import { botMove } from "./botMove";
import { randomX, randomY } from "../utils/random.js";

let isGameEnd = false;

const playerMove = (
  cell,
  index,
  gameStart,
  gameLogic,
  boardBot,
  boardPlayer,
  player1,
  player2
) => {
  if (!gameStart) return;
  if (gameLogic.turn === player2.name) return;
  if (cell.innerHTML === "。") return;
  if (isGameEnd) return;

  const battleCellContentBot = document.querySelectorAll(
    ".battle-cell-content__bot"
  );
  const result = document.querySelector(".result");

  boardBot.receiveAttack(
    battleCellContentBot[index].dataset.x,
    battleCellContentBot[index].dataset.y
  );
  if (
    boardBot.isHit(
      battleCellContentBot[index].dataset.x,
      battleCellContentBot[index].dataset.y
    )
  ) {
    cell.innerHTML = "X";
    cell.style.backgroundColor = "red";
  } else if (
    boardBot.isMiss(
      battleCellContentBot[index].dataset.x,
      battleCellContentBot[index].dataset.y
    )
  ) {
    cell.innerHTML = "。";
  }
  if (boardBot.isAllShipSink()) {
    result.innerHTML = "You win";
    isGameEnd = true;
  } else {
    gameLogic.turn = player2.name;
    botMove(
      randomX(),
      randomY(),
      boardPlayer,
      gameLogic,
      player1,
      boardBot,
      isGameEnd
    );
  }
};

export { playerMove };
