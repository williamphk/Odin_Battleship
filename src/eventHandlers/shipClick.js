function shipClick(ev, boardSelf, gameStart) {
  if (gameStart === true) return;
  let shipX = Number(ev.srcElement.parentElement.attributes[1].value);
  let shipY = Number(ev.srcElement.parentElement.attributes[2].value);
  let shipObj = boardSelf.board[shipX][shipY];
  let shipLength = Number(ev.target.dataset.length);
  let shipSize = 32 * shipLength + shipLength - 1;
  let maxX = 9;
  let maxY = 9;
  let spaceAvailable = true;
  if (shipObj.direction === "horizontal") {
    for (let i = 1; i < shipObj.shipLength; i++) {
      if (
        maxX - shipX + 1 < shipLength ||
        boardSelf.board[shipX + i][shipY] !== null ||
        boardSelf.board[shipX + i][shipY] === undefined
      ) {
        spaceAvailable = false;
      }
    }
    console.log(spaceAvailable);
    if (spaceAvailable === false) return;
    else {
      ev.target.style.width = "32px";
      ev.target.style.height = shipSize + "px";
      boardSelf.removeShip(shipX, shipY, shipObj, "horizontal");
      boardSelf.placeShip(shipX, shipY, shipObj, "vertical");
      shipObj.direction = "vertical";
    }
  } else if (shipObj.direction === "vertical") {
    for (let i = 1; i < shipObj.shipLength; i++) {
      if (
        maxY - shipY + 1 < shipLength ||
        boardSelf.board[shipX][shipY + i] !== null ||
        boardSelf.board[shipX][shipY + i] === undefined
      ) {
        spaceAvailable = false;
      }
    }
    console.log(spaceAvailable);
    if (spaceAvailable === false) return;
    else {
      ev.target.style.width = shipSize + "px";
      ev.target.style.height = "32px";
      boardSelf.removeShip(shipX, shipY, shipObj, "vertical");
      boardSelf.placeShip(shipX, shipY, shipObj, "horizontal");
      shipObj.direction = "horizontal";
    }
  }
}

export { shipClick };
