import { randomX, randomY } from "../utils/random";

//creating an array of ships for player and bot
const createGameboard = () => {
  return {
    board: [
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ],
    placeShip(x, y, shipObj, direction, selectedSubDiv = 0) {
      let spaceAvailable = true;
      if (direction === "horizontal") {
        console.log("horizontal");
        for (let i = 0; i < shipObj.shipLength; i++) {
          console.log(
            "checking available",
            x,
            y + i - selectedSubDiv,
            " for ship ",
            shipObj
          );
          console.log("10", this.board[x][10]);
          if (
            (this.board[x][y + i - selectedSubDiv] !== null &&
              this.board[x][y + i - selectedSubDiv] !== shipObj) ||
            this.board[x][y + i - selectedSubDiv] === undefined
          ) {
            spaceAvailable = false;
          }
        }
        if (spaceAvailable) {
          console.log("placed!");
          this.board[x][y] = shipObj;
          for (let i = 0; i < shipObj.shipLength; i++) {
            this.board[x][y + i] = shipObj;
          }
        } else if (!spaceAvailable) {
          console.log("random!");
          this.placeShip(
            randomX(),
            randomY(),
            shipObj,
            direction,
            selectedSubDiv
          );
        }
      } else if (direction === "vertical") {
        console.log("vertical");

        for (let i = 0; i < shipObj.shipLength; i++) {
          console.log(
            "checking available",
            x + i - selectedSubDiv,
            y,
            " for ship ",
            shipObj
          );
          if (x + shipObj.shipLength > 9) {
            console.log("Out of range!" + x);
            spaceAvailable = false;
          } else if (
            (this.board[x + i - selectedSubDiv][y] !== null &&
              this.board[x + i - selectedSubDiv][y] !== shipObj) ||
            this.board[x + i - selectedSubDiv][y] === undefined
          ) {
            spaceAvailable = false;
          }
        }
        if (spaceAvailable) {
          console.log("placed!");
          this.board[x][y] = shipObj;
          for (let i = 0; i < shipObj.shipLength; i++) {
            this.board[x + i][y] = shipObj;
          }
        } else if (!spaceAvailable) {
          console.log("random!");
          this.placeShip(
            randomX(),
            randomY(),
            shipObj,
            direction,
            selectedSubDiv
          );
        }
        console.log(this.board);
      }
    },
    removeShip(x, y, shipObj, direction) {
      if (direction === "horizontal") {
        for (let i = 0; i < shipObj.shipLength; i++) {
          this.board[x][y + i] = null;
        }
      } else if (direction === "vertical") {
        for (let i = 0; i < shipObj.shipLength; i++) {
          this.board[x + i][y] = null;
        }
      }
    },
    receiveAttack(x, y) {
      if (
        this.board[x][y] === "ship" ||
        (typeof this.board[x][y] === "object" && this.board[x][y] != null)
      ) {
        this.board[x][y] = "hit";
      } else if (this.board[x][y] === null) {
        this.board[x][y] = "missed";
      }
    },
    isMiss(x, y) {
      return this.board[x][y] === "missed" ? true : false;
    },
    isHit(x, y) {
      return this.board[x][y] === "hit" ? true : false;
    },
    isAllShipSink() {
      return !this.board.some((arr) =>
        arr.some(
          (position) =>
            (typeof position === "object" && position !== null) ||
            position === "ship"
        )
      );
    },
    hitCount() {
      let count = 0;
      for (let i = 0; i < this.board.length; i++) {
        for (let j = 0; j < this.board[i].length; j++) {
          if (this.board[i][j] === "hit") {
            count++;
          }
        }
      }
      return count;
    },
  };
};

export { createGameboard };
