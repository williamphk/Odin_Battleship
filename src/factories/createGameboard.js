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
    placeShip(x, y, shipObj, direction) {
      let spaceAvailable = true;
      if (direction === "horizontal") {
        for (let i = 0; i < shipObj.shipLength; i++) {
          if (
            this.board[x][y + i] !== null ||
            this.board[x][y + i] === undefined
          ) {
            spaceAvailable = false;
          }
        }
        if (spaceAvailable) {
          for (let i = 0; i < shipObj.shipLength; i++) {
            this.board[x][y + i] = shipObj;
          }
          this.board[x][y] = shipObj;
        } else if (!spaceAvailable) {
          this.placeShip(randomX(), randomY(), shipObj, direction);
        }
      } else if (direction === "vertical") {
        for (let i = 0; i < shipObj.shipLength; i++) {
          if (this.board[x + i]?.[y] || this.board[x + i]?.[y] === undefined) {
            spaceAvailable = false;
          }
        }
        if (spaceAvailable) {
          for (let i = 0; i < shipObj.shipLength; i++) {
            this.board[x + i][y] = shipObj;
          }
          this.board[x][y] = shipObj;
        } else if (!spaceAvailable) {
          this.placeShip(randomX(), randomY(), shipObj, direction);
        }
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