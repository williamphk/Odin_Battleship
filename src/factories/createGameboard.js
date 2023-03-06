import { randomX, randomY } from "../utils/random";

//creating an array of ships for player and bot
const createGameboard = (shipArray) => {
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
        //console.log("horizontal");
        for (let i = 0; i < shipObj.shipLength; i++) {
          //console.log("checking available", x, y + i, " for ship ", shipObj);
          //console.log("10", this.board[x][10]);
          if (
            (this.board[x][y + i] !== null &&
              this.board[x][y + i] !== shipObj) ||
            this.board[x][y + i] === undefined
          ) {
            spaceAvailable = false;
          }
        }
        if (spaceAvailable) {
          //console.log("placed!");
          this.board[x][y] = shipObj;
          for (let i = 0; i < shipObj.shipLength; i++) {
            this.board[x][y + i] = shipObj;
          }
        } else if (!spaceAvailable) {
          //console.log("random!");
          this.placeShip(randomX(), randomY(), shipObj, direction);
        }
      } else if (direction === "vertical") {
        //console.log("vertical");

        for (let i = 0; i < shipObj.shipLength; i++) {
          //console.log("checking available", x + i, y, " for ship ", shipObj);
          if (x + shipObj.shipLength - 1 > 9) {
            //console.log("Out of range!" + x + shipObj.shipLength - 1);
            spaceAvailable = false;
          } else if (
            (this.board[x + i][y] !== null &&
              this.board[x + i][y] !== shipObj) ||
            this.board[x + i][y] === undefined
          ) {
            spaceAvailable = false;
          }
        }
        if (spaceAvailable) {
          //console.log("placed!");
          this.board[x][y] = shipObj;
          for (let i = 0; i < shipObj.shipLength; i++) {
            this.board[x + i][y] = shipObj;
          }
        } else if (!spaceAvailable) {
          //console.log("random!");
          this.placeShip(randomX(), randomY(), shipObj, direction);
        }
        //console.log(this.board);
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
    resetBoard() {
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          this.board[i][j] = null;
        }
      }
    },
    probabilityBoard: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    calculateProbability() {
      let currentLength = 0;
      let horizontalSpaceAvailable = true;
      let verticalSpaceAvailable = true;
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          if (this.board[i][j] === "hit" || this.board[i][j] === "missed") {
            this.probabilityBoard[i][j] = 0;
            continue;
          }
          for (let k = 0; k < shipArray.length; k++) {
            if (shipArray[k].isSink === true) {
              continue;
            }
            currentLength = shipArray[k].shipLength;
            // horizontal
            for (let l = 0; l < currentLength; l++) {
              if (
                this.board[i][j + l] === "hit" ||
                this.board[i][j + l] === "missed" ||
                this.board[i][j + l] === undefined
              ) {
                horizontalSpaceAvailable = false;
              }
            }
            if (horizontalSpaceAvailable) {
              for (let m = 0; m < currentLength; m++) {
                this.probabilityBoard[i][j + m]++;
                // console.log(
                //   i,
                //   j + m,
                //   "horizontal added 1",
                //   currentLength,
                //   horizontalSpaceAvailable
                // );
              }
            } else if (!horizontalSpaceAvailable) {
              // console.log(i, j, currentLength, "horizontalSpace = false");
              // console.log(this.board[0][9]);
              horizontalSpaceAvailable = true;
            }
            // vertical
            for (let l = 0; l < currentLength; l++) {
              if (i + currentLength > 10) {
                verticalSpaceAvailable = false;
              } else if (
                this.board[i + currentLength - 1][j] === "hit" ||
                this.board[i + currentLength - 1][j] === "missed" ||
                this.board[i + currentLength - 1][j] === undefined
              ) {
                verticalSpaceAvailable = false;
              }
            }
            if (verticalSpaceAvailable) {
              for (let l = 0; l < currentLength; l++) {
                this.probabilityBoard[i + l][j]++;
                // console.log(
                //   i + l,
                //   j,
                //   "vertical added 1",
                //   currentLength,
                //   verticalSpaceAvailable
                // );
              }
            } else if (!verticalSpaceAvailable) {
              // console.log(
              //   i,
              //   j,
              //   currentLength,
              //   "verticalSpaceAvailable = false"
              // );
              verticalSpaceAvailable = true;
            }
          }
        }
      }
    },
    bestNextMove() {
      let max = 0;
      let x = 0;
      let y = 0;
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          if (this.probabilityBoard[i][j] > max) {
            max = this.probabilityBoard[i][j];
            x = i;
            y = j;
          }
        }
      }
      return [x, y];
    },
    setProbabilityBoardToZero() {
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          this.probabilityBoard[i][j] = 0;
        }
      }
    },
  };
};

export { createGameboard };
