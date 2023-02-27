import { createShipDiv } from "./createShipDiv.js";

function dom() {
  console.log("dom");
  const battlefields = document.querySelector(".battlefields");

  const tableSelf = document.createElement("table");
  const tableRival = document.createElement("table");

  console.log(tableSelf, tableRival);
  tableSelf.className = "battlefield-table-container__self";
  tableRival.className = "battlefield-table-container__rival";

  battlefields.appendChild(tableSelf);
  battlefields.appendChild(tableRival);

  for (let i = 0; i < 10; i++) {
    const trSelf = document.createElement("tr");
    const trRival = document.createElement("tr");

    trSelf.className = "battiefield-row__self";
    trRival.className = "battiefield-row__rival";

    tableSelf.appendChild(trSelf);
    tableRival.appendChild(trRival);

    for (let j = 0; j < 10; j++) {
      const tdSelf = document.createElement("td");
      const tdRival = document.createElement("td");

      tdSelf.className = "battlefield-cell";
      tdRival.className = "battlefield-cell";

      const divCellSelf = document.createElement("div");
      const divCellRival = document.createElement("div");

      divCellSelf.className = "battle-cell-content battle-cell-content__self";
      divCellRival.className = "battle-cell-content battle-cell-content__rival";

      divCellSelf.dataset.x = i;
      divCellSelf.dataset.y = j;

      divCellRival.dataset.x = i;
      divCellRival.dataset.y = j;

      trSelf.appendChild(tdSelf);
      trRival.appendChild(tdRival);

      tdSelf.appendChild(divCellSelf);
      tdRival.appendChild(divCellRival);
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

  const cellWithShip1 = document.querySelector(
    '.battle-cell-content.battle-cell-content__self[data-x="0"][data-y="0"]'
  );
  cellWithShip1.appendChild(shipDiv1);

  const cellWithShip2 = document.querySelector(
    '.battle-cell-content.battle-cell-content__self[data-x="0"][data-y="3"]'
  );
  cellWithShip2.appendChild(shipDiv2);

  const cellWithShip3 = document.querySelector(
    '.battle-cell-content.battle-cell-content__self[data-x="0"][data-y="6"]'
  );
  cellWithShip3.appendChild(shipDiv3);

  const cellWithShip4 = document.querySelector(
    '.battle-cell-content.battle-cell-content__self[data-x="0"][data-y="9"]'
  );
  cellWithShip4.appendChild(shipDiv4);

  const cellWithShip5 = document.querySelector(
    '.battle-cell-content.battle-cell-content__self[data-x="2"][data-y="1"]'
  );
  cellWithShip5.appendChild(shipDiv5);

  const cellWithShip6 = document.querySelector(
    '.battle-cell-content.battle-cell-content__self[data-x="2"][data-y="7"]'
  );
  cellWithShip6.appendChild(shipDiv6);

  const cellWithShip7 = document.querySelector(
    '.battle-cell-content.battle-cell-content__self[data-x="3"][data-y="4"]'
  );
  cellWithShip7.appendChild(shipDiv7);

  const cellWithShip8 = document.querySelector(
    '.battle-cell-content.battle-cell-content__self[data-x="6"][data-y="1"]'
  );
  cellWithShip8.appendChild(shipDiv8);

  const cellWithShip9 = document.querySelector(
    '.battle-cell-content.battle-cell-content__self[data-x="6"][data-y="6"]'
  );
  cellWithShip9.appendChild(shipDiv9);

  const cellWithShip10 = document.querySelector(
    '.battle-cell-content.battle-cell-content__self[data-x="8"][data-y="3"]'
  );
  cellWithShip10.appendChild(shipDiv10);
}

export { dom };
