import { randomX, randomY } from "./random.js";

const botMove = (x, y, boardSelf, gameLogic, player1, boardRival) => {
  if (boardSelf.isHit(x, y) || boardSelf.isMiss(x, y)) {
    botMove(randomX(), randomY(), boardSelf, gameLogic, player1, boardRival);
  } else {
    boardSelf.receiveAttack(x, y);
    let cell = document.querySelector(
      `[class$="battle-cell-content battle-cell-content__self"][data-x="${x}"][data-y="${y}"]`
    );
    let shipDiv = cell.innerHTML;
    const result = document.querySelector(".result");
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
        const hitCount = document.getElementById("hit-count");
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

export { botMove };
