const createShip = (shipName, shipLength, direction, group) => {
  if (shipLength > 5 || shipLength < 1) {
    throw new Error("Wrong Length");
  } else
    return {
      //shipName is the name of the ship
      shipName: shipName,
      //shipLength is the length of the ship
      shipLength: shipLength,
      //direction is either horizontal or vertical
      direction: direction,
      //group is either player or bot
      group: group,
      //creating an array of length shipLength filled with undefined values
      array: [...Array(shipLength)],
      //hitPosition is the position of the ship that is hit
      hit(hitPosition) {
        if (hitPosition >= this.array.shipLength || hitPosition < 0) {
          throw new Error("Wrong Position");
        }
        this.array[hitPosition] = "hit";
      },
      //checks if all the positions in the array are hit
      isSink() {
        return this.array.every((position) => position === "hit");
      },
    };
};

export { createShip };
