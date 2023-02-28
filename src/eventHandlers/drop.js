function drop(ev, boardPlayer, gameStart) {
  if (gameStart === true) return;
  let data = ev.dataTransfer.getData("target");
  let dataLength = ev.dataTransfer.getData("target-length");
  let originalLocationX = Number(ev.dataTransfer.getData("srcX"));
  let originalLocationY = Number(ev.dataTransfer.getData("srcY"));
  let targetX = Number(ev.target.dataset.x);
  let targetY = Number(ev.target.dataset.y);
  let maxX = 9;
  let maxY = 9;
  if (isNaN(targetX) || isNaN(targetY)) return;
  ev.preventDefault();
  let shipObj = boardPlayer.board[originalLocationX][originalLocationY];
  let spaceAvailable = true;

  if (shipObj.direction === "horizontal") {
    for (let i = 0; i < dataLength; i++) {
      console.log(targetX, targetY + i);
      console.log(boardPlayer.board[targetX][targetY + i]);
      if (
        maxY - targetY + 1 < dataLength ||
        (boardPlayer.board[targetX][targetY + i] !== null &&
          boardPlayer.board[targetX][targetY + i] !== shipObj) ||
        boardPlayer.board[targetX][targetY + i] === undefined
      ) {
        spaceAvailable = false;
      }
    }
    console.log(spaceAvailable);
    if (spaceAvailable === false) return;
    else {
      ev.target.appendChild(document.getElementById(data));
      boardPlayer.removeShip(
        originalLocationX,
        originalLocationY,
        shipObj,
        "horizontal"
      );
      boardPlayer.placeShip(targetX, targetY, shipObj, "horizontal");
    }
  } else if (shipObj.direction === "vertical") {
    for (let i = 0; i < dataLength; i++) {
      if (
        maxX - targetX + 1 < dataLength ||
        (boardPlayer.board[targetX + i][targetY] !== null &&
          boardPlayer.board[targetX + i][targetY] !== shipObj) ||
        boardPlayer.board[targetX + i][targetY] === undefined
      ) {
        spaceAvailable = false;
      }
    }
    console.log(spaceAvailable);
    if (spaceAvailable === false) return;
    else {
      ev.target.appendChild(document.getElementById(data));
      boardPlayer.removeShip(
        originalLocationX,
        originalLocationY,
        shipObj,
        "vertical"
      );
      boardPlayer.placeShip(targetX, targetY, shipObj, "vertical");
    }
  }
}

export { drop };
