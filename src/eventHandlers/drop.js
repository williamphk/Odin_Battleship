function drop(ev, boardPlayer, gameStart, selectedSubDiv) {
  console.log("drop");
  if (gameStart === true) return;
  ev.preventDefault();
  let data = ev.dataTransfer.getData("target");
  let dataLength = ev.dataTransfer.getData("target-length");
  let originalLocationX = Number(ev.dataTransfer.getData("srcX"));
  let originalLocationY = Number(ev.dataTransfer.getData("srcY"));
  let targetX = Number(ev.target.dataset.x);
  let targetY = Number(ev.target.dataset.y);
  if (isNaN(targetX) || isNaN(targetY)) return;
  let shipObj = boardPlayer.board[originalLocationX][originalLocationY];
  let spaceAvailable = true;
  if (shipObj.direction === "horizontal") {
    for (let i = 0; i < dataLength; i++) {
      if (
        (boardPlayer.board[targetX][targetY + i - selectedSubDiv + 1] !==
          null &&
          boardPlayer.board[targetX][targetY + i - selectedSubDiv + 1] !==
            shipObj) ||
        boardPlayer.board[targetX][targetY + i - selectedSubDiv + 1] ===
          undefined
      ) {
        spaceAvailable = false;
      }
    }
    console.log(spaceAvailable);
    if (!spaceAvailable) return;
    else if (spaceAvailable) {
      if (selectedSubDiv == 2) {
        targetX = ev.target.dataset.x;
        targetY = ev.target.dataset.y - 1;
      } else if (selectedSubDiv == 3) {
        targetX = ev.target.dataset.x;
        targetY = ev.target.dataset.y - 2;
      } else if (selectedSubDiv == 4) {
        targetX = ev.target.dataset.x;
        targetY = ev.target.dataset.y - 3;
      }
      const targetCell = document.querySelector(
        `.battle-cell-content.battle-cell-content__player[data-x="${targetX}"][data-y="${targetY}"]`
      );
      targetCell.appendChild(document.getElementById(data));
      boardPlayer.removeShip(
        originalLocationX,
        originalLocationY,
        shipObj,
        "horizontal"
      );
      boardPlayer.placeShip(targetX, targetY, shipObj, "horizontal");
      console.log(boardPlayer.board);
    }
  } else if (shipObj.direction === "vertical") {
    for (let i = 0; i < dataLength; i++) {
      if (
        (boardPlayer.board[targetX + i - selectedSubDiv + 1][targetY] !==
          null &&
          boardPlayer.board[targetX + i - selectedSubDiv + 1][targetY] !==
            shipObj) ||
        boardPlayer.board[targetX + i - selectedSubDiv + 1][targetY] ===
          undefined
      ) {
        spaceAvailable = false;
      }
    }
    console.log(spaceAvailable);
    if (!spaceAvailable) return;
    else if (spaceAvailable) {
      if (selectedSubDiv == 2) {
        targetX = ev.target.dataset.x - 1;
        targetY = ev.target.dataset.y;
      } else if (selectedSubDiv == 3) {
        targetX = ev.target.dataset.x - 2;
        targetY = ev.target.dataset.y;
      } else if (selectedSubDiv == 4) {
        targetX = ev.target.dataset.x - 3;
        targetY = ev.target.dataset.y;
      }
      const targetCell = document.querySelector(
        `.battle-cell-content.battle-cell-content__player[data-x="${targetX}"][data-y="${targetY}"]`
      );
      targetCell.appendChild(document.getElementById(data));
      boardPlayer.removeShip(
        originalLocationX,
        originalLocationY,
        shipObj,
        "vertical"
      );
      boardPlayer.placeShip(targetX, targetY, shipObj, "vertical");
      console.log(boardPlayer.board);
    }
  }
}

export { drop };
