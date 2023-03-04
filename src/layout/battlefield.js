import { createShipDiv } from "../utils/createShipDiv.js";
import { createShipSubDiv } from "../utils/createShipDiv.js";

const battiefield = () => {
  const game = document.createElement("div");
  game.className = "game";
  game.style.display = "flex";
  game.style.flexDirection = "column";
  game.style.alignItems = "center";
  game.style.gap = "20px";

  const result = document.createElement("h3");
  result.className = "result";

  game.appendChild(result);

  const battlefields = document.createElement("div");
  battlefields.className = "battlefields";

  const playerBattlefield = document.createElement("div");
  const botBattlefield = document.createElement("div");

  const playerBattlefieldTitle = document.createElement("h2");
  const botBattlefieldTitle = document.createElement("h2");

  playerBattlefieldTitle.innerHTML = "Your board";
  botBattlefieldTitle.innerHTML = "Enemy's board";

  playerBattlefield.appendChild(playerBattlefieldTitle);
  botBattlefield.appendChild(botBattlefieldTitle);

  battlefields.appendChild(playerBattlefield);
  battlefields.appendChild(botBattlefield);

  const main = document.querySelector("main");
  game.appendChild(battlefields);
  main.appendChild(game);

  playerBattlefield.className = "player-battlefield";
  botBattlefield.className = "bot-battlefield";

  const tablePlayer = document.createElement("table");
  const tableBot = document.createElement("table");

  console.log(tablePlayer, tableBot);
  tablePlayer.className = "battlefield-table-container__player";
  tableBot.className = "battlefield-table-container__bot";

  playerBattlefield.appendChild(tablePlayer);
  botBattlefield.appendChild(tableBot);

  for (let i = 0; i < 10; i++) {
    const trPlayer = document.createElement("tr");
    const trBot = document.createElement("tr");

    trPlayer.className = "battiefield-row__player";
    trBot.className = "battiefield-row__bot";

    tablePlayer.appendChild(trPlayer);
    tableBot.appendChild(trBot);

    for (let j = 0; j < 10; j++) {
      const tdPlayer = document.createElement("td");
      const tdBot = document.createElement("td");

      tdPlayer.className = "battlefield-cell";
      tdBot.className = "battlefield-cell";

      const divCellPlayer = document.createElement("div");
      const divCellBot = document.createElement("div");

      divCellPlayer.className =
        "battle-cell-content battle-cell-content__player";
      divCellBot.className = "battle-cell-content battle-cell-content__bot";

      divCellPlayer.dataset.x = i;
      divCellPlayer.dataset.y = j;

      divCellBot.dataset.x = i;
      divCellBot.dataset.y = j;

      trPlayer.appendChild(tdPlayer);
      trBot.appendChild(tdBot);

      tdPlayer.appendChild(divCellPlayer);
      tdBot.appendChild(divCellBot);
    }
  }

  const shipDiv1 = createShipDiv(1, 2, "64.25px");
  const shipDiv2 = createShipDiv(2, 3, "96.6px");
  const shipDiv3 = createShipDiv(3, 3, "96.6px");
  const shipDiv4 = createShipDiv(4, 4, "129px");
  const shipDiv5 = createShipDiv(5, 5, "161.2px");

  const shipSubDiv11 = createShipSubDiv(1);
  const shipSubDiv12 = createShipSubDiv(2);
  const shipSubDiv21 = createShipSubDiv(1);
  const shipSubDiv22 = createShipSubDiv(2);
  const shipSubDiv23 = createShipSubDiv(3);
  const shipSubDiv31 = createShipSubDiv(1);
  const shipSubDiv32 = createShipSubDiv(2);
  const shipSubDiv33 = createShipSubDiv(3);
  const shipSubDiv41 = createShipSubDiv(1);
  const shipSubDiv42 = createShipSubDiv(2);
  const shipSubDiv43 = createShipSubDiv(3);
  const shipSubDiv44 = createShipSubDiv(4);
  const shipSubDiv51 = createShipSubDiv(1);
  const shipSubDiv52 = createShipSubDiv(2);
  const shipSubDiv53 = createShipSubDiv(3);
  const shipSubDiv54 = createShipSubDiv(4);
  const shipSubDiv55 = createShipSubDiv(5);

  shipDiv1.appendChild(shipSubDiv11);
  shipDiv1.appendChild(shipSubDiv12);
  shipDiv2.appendChild(shipSubDiv21);
  shipDiv2.appendChild(shipSubDiv22);
  shipDiv2.appendChild(shipSubDiv23);
  shipDiv3.appendChild(shipSubDiv31);
  shipDiv3.appendChild(shipSubDiv32);
  shipDiv3.appendChild(shipSubDiv33);
  shipDiv4.appendChild(shipSubDiv41);
  shipDiv4.appendChild(shipSubDiv42);
  shipDiv4.appendChild(shipSubDiv43);
  shipDiv4.appendChild(shipSubDiv44);
  shipDiv5.appendChild(shipSubDiv51);
  shipDiv5.appendChild(shipSubDiv52);
  shipDiv5.appendChild(shipSubDiv53);
  shipDiv5.appendChild(shipSubDiv54);
  shipDiv5.appendChild(shipSubDiv55);

  resetShipDivPosition(shipDiv1, shipDiv2, shipDiv3, shipDiv4, shipDiv5);

  const startBtn = document.createElement("button");
  startBtn.className = "start-btn";
  startBtn.id = "start-btn";
  startBtn.textContent = "Start";

  game.appendChild(startBtn);
};

const resetShipDivDirection = () => {
  console.log("resetShipDivDirection");
  const shipDivs = document.querySelectorAll(".ship");
  shipDivs.forEach((shipDiv) => {
    let shipSize = shipDiv.dataset.length * 32;
    console.log(shipSize);
    shipDiv.style.flexDirection = "row";
    shipDiv.style.width = shipSize + "px";
    shipDiv.style.height = "32px";
  });
};

const resetShipDivPosition = (
  shipDiv1,
  shipDiv2,
  shipDiv3,
  shipDiv4,
  shipDiv5
) => {
  const cellWithShip1 = document.querySelector(
    '.battle-cell-content.battle-cell-content__player[data-x="0"][data-y="0"]'
  );
  cellWithShip1.appendChild(shipDiv1);

  const cellWithShip2 = document.querySelector(
    '.battle-cell-content.battle-cell-content__player[data-x="2"][data-y="0"]'
  );
  cellWithShip2.appendChild(shipDiv2);

  const cellWithShip3 = document.querySelector(
    '.battle-cell-content.battle-cell-content__player[data-x="4"][data-y="0"]'
  );
  cellWithShip3.appendChild(shipDiv3);

  const cellWithShip4 = document.querySelector(
    '.battle-cell-content.battle-cell-content__player[data-x="6"][data-y="0"]'
  );
  cellWithShip4.appendChild(shipDiv4);

  const cellWithShip5 = document.querySelector(
    '.battle-cell-content.battle-cell-content__player[data-x="8"][data-y="0"]'
  );
  cellWithShip5.appendChild(shipDiv5);
};

const resetBoard = () => {
  const battleCellContent = document.querySelectorAll(".battle-cell-content");
  battleCellContent.forEach((cell) => {
    cell.innerHTML = "";
    cell.style.removeProperty("background-color");
    cell.style.removeProperty("z-index");
    cell.style.removeProperty("position");
  });
};

export { battiefield, resetShipDivDirection, resetShipDivPosition, resetBoard };
