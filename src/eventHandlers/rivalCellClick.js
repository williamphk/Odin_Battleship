import { randomX, randomY } from "../utils/random";
import { botMove } from "../utils/botMove";

function rivalCellClick(
  cell,
  index,
  gameStart,
  gameLogic,
  boardRival,
  boardSelf,
  isGameEnd,
  player1,
  player2
) {
  if (!gameStart) return;
  if (gameLogic.turn === player2.name) return;
  if (cell.innerHTML === "。") return;
  const hitCount = document.getElementById("hit-count");
  hitCount.innerHTML = `You hit: ${boardRival.hitCount()} AI hit: ${boardSelf.hitCount()}`;
  const battleCellContentRival = document.querySelectorAll(
    ".battle-cell-content__rival"
  );
  const result = document.querySelector(".result");
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
      botMove(randomX(), randomY(), boardSelf, gameLogic, player1, boardRival);
    }
  }
}

export { rivalCellClick };
