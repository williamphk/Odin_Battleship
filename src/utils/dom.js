import { createShipDiv } from "./createShipDiv.js";
import { createShipSubDiv } from "./createShipDiv.js";

function dom() {
  console.log("dom");
  const playerBattlefield = document.querySelector(".player-battlefield");
  const botBattlefield = document.querySelector(".bot-battlefield");

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

  const shipDiv1 = createShipDiv(1, 1, "32px");
  const shipDiv2 = createShipDiv(2, 1, "32px");
  const shipDiv3 = createShipDiv(3, 1, "32px");
  const shipDiv4 = createShipDiv(4, 1, "32px");
  const shipDiv5 = createShipDiv(5, 2, "65px");
  const shipDiv6 = createShipDiv(6, 2, "65px");
  const shipDiv7 = createShipDiv(7, 2, "65px");
  const shipDiv8 = createShipDiv(8, 3, "98px");
  const shipDiv9 = createShipDiv(9, 3, "98px");
  const shipDiv10 = createShipDiv(10, 4, "131px");

  const shipSubDiv11 = createShipSubDiv(1);
  const shipSubDiv21 = createShipSubDiv(1);
  const shipSubDiv31 = createShipSubDiv(1);
  const shipSubDiv41 = createShipSubDiv(1);
  const shipSubDiv51 = createShipSubDiv(1);
  const shipSubDiv52 = createShipSubDiv(2);
  const shipSubDiv61 = createShipSubDiv(1);
  const shipSubDiv62 = createShipSubDiv(2);
  const shipSubDiv71 = createShipSubDiv(1);
  const shipSubDiv72 = createShipSubDiv(2);
  const shipSubDiv81 = createShipSubDiv(1);
  const shipSubDiv82 = createShipSubDiv(2);
  const shipSubDiv83 = createShipSubDiv(3);
  const shipSubDiv91 = createShipSubDiv(1);
  const shipSubDiv92 = createShipSubDiv(2);
  const shipSubDiv93 = createShipSubDiv(3);
  const shipSubDiv101 = createShipSubDiv(1);
  const shipSubDiv102 = createShipSubDiv(2);
  const shipSubDiv103 = createShipSubDiv(3);
  const shipSubDiv104 = createShipSubDiv(4);

  shipDiv1.appendChild(shipSubDiv11);
  shipDiv2.appendChild(shipSubDiv21);
  shipDiv3.appendChild(shipSubDiv31);
  shipDiv4.appendChild(shipSubDiv41);
  shipDiv5.appendChild(shipSubDiv51);
  shipDiv5.appendChild(shipSubDiv52);
  shipDiv6.appendChild(shipSubDiv61);
  shipDiv6.appendChild(shipSubDiv62);
  shipDiv7.appendChild(shipSubDiv71);
  shipDiv7.appendChild(shipSubDiv72);
  shipDiv8.appendChild(shipSubDiv81);
  shipDiv8.appendChild(shipSubDiv82);
  shipDiv8.appendChild(shipSubDiv83);
  shipDiv9.appendChild(shipSubDiv91);
  shipDiv9.appendChild(shipSubDiv92);
  shipDiv9.appendChild(shipSubDiv93);
  shipDiv10.appendChild(shipSubDiv101);
  shipDiv10.appendChild(shipSubDiv102);
  shipDiv10.appendChild(shipSubDiv103);
  shipDiv10.appendChild(shipSubDiv104);

  const cellWithShip1 = document.querySelector(
    '.battle-cell-content.battle-cell-content__player[data-x="0"][data-y="0"]'
  );
  cellWithShip1.appendChild(shipDiv1);

  const cellWithShip2 = document.querySelector(
    '.battle-cell-content.battle-cell-content__player[data-x="0"][data-y="3"]'
  );
  cellWithShip2.appendChild(shipDiv2);

  const cellWithShip3 = document.querySelector(
    '.battle-cell-content.battle-cell-content__player[data-x="0"][data-y="6"]'
  );
  cellWithShip3.appendChild(shipDiv3);

  const cellWithShip4 = document.querySelector(
    '.battle-cell-content.battle-cell-content__player[data-x="0"][data-y="9"]'
  );
  cellWithShip4.appendChild(shipDiv4);

  const cellWithShip5 = document.querySelector(
    '.battle-cell-content.battle-cell-content__player[data-x="2"][data-y="1"]'
  );
  cellWithShip5.appendChild(shipDiv5);

  const cellWithShip6 = document.querySelector(
    '.battle-cell-content.battle-cell-content__player[data-x="2"][data-y="7"]'
  );
  cellWithShip6.appendChild(shipDiv6);

  const cellWithShip7 = document.querySelector(
    '.battle-cell-content.battle-cell-content__player[data-x="3"][data-y="4"]'
  );
  cellWithShip7.appendChild(shipDiv7);

  const cellWithShip8 = document.querySelector(
    '.battle-cell-content.battle-cell-content__player[data-x="6"][data-y="1"]'
  );
  cellWithShip8.appendChild(shipDiv8);

  const cellWithShip9 = document.querySelector(
    '.battle-cell-content.battle-cell-content__player[data-x="6"][data-y="6"]'
  );
  cellWithShip9.appendChild(shipDiv9);

  const cellWithShip10 = document.querySelector(
    '.battle-cell-content.battle-cell-content__player[data-x="8"][data-y="3"]'
  );
  cellWithShip10.appendChild(shipDiv10);
}

export { dom };