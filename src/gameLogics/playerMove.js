import { botMove } from "./botMove";
import { randomX, randomY } from "../utils/random.js";
import { setIsGameEnd } from "./initGame";

const playerMove = (
  cell,
  index,
  isGameStart,
  isGameEnd,
  gameLogic,
  boardBot,
  boardPlayer,
  player1,
  player2
) => {
  if (!isGameStart) return;
  if (gameLogic.turn === player2.name) return;
  if (cell.innerHTML === "。" || cell.innerHTML === "X") return;
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
    result.innerHTML = "You won!";
    setIsGameEnd(true);
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
