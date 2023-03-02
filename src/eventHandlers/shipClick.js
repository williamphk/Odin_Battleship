const shipClick = (ev, boardPlayer, gameStart) => {
  if (gameStart === true) return;
  let shipX = Number(
    ev.srcElement.parentElement.parentElement.attributes[1].value
  );
  let shipY = Number(
    ev.srcElement.parentElement.parentElement.attributes[2].value
  );
  let shipObj = boardPlayer.board[shipX][shipY];
  let shipLength = Number(ev.srcElement.parentElement.dataset.length);
  let shipSize = 32 * shipLength + shipLength - 1;
  let spaceAvailable = true;
  if (shipObj.direction === "horizontal") {
    for (let i = 1; i < shipObj.shipLength; i++) {
      if (
        boardPlayer.board[shipX + i][shipY] !== null ||
        boardPlayer.board[shipX + i][shipY] === undefined
      ) {
        spaceAvailable = false;
      }
    }
    console.log(spaceAvailable);
    if (spaceAvailable === false) return;
    else {
      ev.srcElement.parentElement.style.flexDirection = "column";
      ev.srcElement.parentElement.style.width = "32px";
      ev.srcElement.parentElement.style.height = shipSize + "px";
      boardPlayer.removeShip(shipX, shipY, shipObj, "horizontal");
      boardPlayer.placeShip(shipX, shipY, shipObj, "vertical");
      shipObj.direction = "vertical";
    }
  } else if (shipObj.direction === "vertical") {
    for (let i = 1; i < shipObj.shipLength; i++) {
      if (
        boardPlayer.board[shipX][shipY + i] !== null ||
        boardPlayer.board[shipX][shipY + i] === undefined
      ) {
        spaceAvailable = false;
      }
    }
    console.log(spaceAvailable);
    if (spaceAvailable === false) return;
    else {
      ev.srcElement.parentElement.style.flexDirection = "row";
      ev.srcElement.parentElement.style.width = shipSize + "px";
      ev.srcElement.parentElement.style.height = "32px";
      boardPlayer.removeShip(shipX, shipY, shipObj, "vertical");
      boardPlayer.placeShip(shipX, shipY, shipObj, "horizontal");
      shipObj.direction = "horizontal";
    }
  }
};

export { shipClick };
