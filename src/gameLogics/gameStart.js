//import helper functions
import { randomX, randomY, randomDirection } from "../utils/random";

const gameStart = (
  playerShip1,
  playerShip2,
  playerShip3,
  playerShip4,
  playerShip5,
  botShip1,
  botShip2,
  botShip3,
  botShip4,
  botShip5,
  boardPlayer,
  boardBot
) => {
  boardPlayer.resetBoard();
  boardBot.resetBoard();

  //placing ships on bot gameboard
  boardBot.placeShip(randomX(), randomY(), botShip1, randomDirection());
  boardBot.placeShip(randomX(), randomY(), botShip2, randomDirection());
  boardBot.placeShip(randomX(), randomY(), botShip3, randomDirection());
  boardBot.placeShip(randomX(), randomY(), botShip4, randomDirection());
  boardBot.placeShip(randomX(), randomY(), botShip5, randomDirection());

  //placing ships on player gameboard
  boardPlayer.placeShip(0, 0, playerShip1, "horizontal");
  boardPlayer.placeShip(2, 0, playerShip2, "horizontal");
  boardPlayer.placeShip(4, 0, playerShip3, "horizontal");
  boardPlayer.placeShip(6, 0, playerShip4, "horizontal");
  boardPlayer.placeShip(8, 0, playerShip5, "horizontal");

  //console.log(boardPlayer.board);
  //console.log(boardBot.board);
};

export { gameStart };
