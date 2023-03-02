import { botMove } from "./botMove";
import { randomX, randomY } from "../utils/random.js";

const playerMove = (
  cell,
  index,
  gameStart,
  gameLogic,
  boardBot,
  boardPlayer,
  isGameEnd,
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

  cell.innerHTML = "。";
  boardBot.receiveAttack(
    battleCellContentBot[index].dataset.x,
    battleCellContentBot[index].dataset.y
  );
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
