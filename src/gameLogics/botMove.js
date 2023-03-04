import { randomX, randomY } from "../utils/random.js";

const botMove = (
  x,
  y,
  boardPlayer,
  gameLogic,
  player1,
  boardBot,
  isGameEnd
) => {
  if (boardPlayer.isHit(x, y) || boardPlayer.isMiss(x, y)) {
    botMove(randomX(), randomY(), boardPlayer, gameLogic, player1, boardBot);
  } else {
    boardPlayer.receiveAttack(x, y);
    let cell = document.querySelector(
      `[class$="battle-cell-content battle-cell-content__player"][data-x="${x}"][data-y="${y}"]`
    );
    let shipDiv = cell.innerHTML;
    const result = document.querySelector(".result");
    if (boardPlayer.isHit(x, y)) {
      console.log("x", x, "y", y);
      if (shipDiv) {
        var div = document.createElement("div");
        div.style.backgroundColor = "red";
        div.style.position = "absolute";
        div.style.top = "0";
        div.style.width = "100%";
        div.style.height = "100%";
        div.style.zIndex = "10";
        div.innerHTML = "X";
        cell.appendChild(div);
      } else {
        cell.style.position = "relative";
        cell.innerHTML = "X";
        cell.style.zIndex = "3";
        cell.style.backgroundColor = "red";
      }
    } else if (boardPlayer.isMiss(x, y)) {
      cell.innerHTML = "。";
    }
    if (boardPlayer.isAllShipSink()) {
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

export { botMove };
