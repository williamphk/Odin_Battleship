const createShipDiv = (id, length, width) => {
  const shipDiv = document.createElement("div");
  shipDiv.className = "ship";
  shipDiv.id = "drag" + id;
  shipDiv.setAttribute("data-length", length);
  shipDiv.setAttribute("draggable", true);
  shipDiv.style.width = width;
  return shipDiv;
};

const createShipSubDiv = (divID) => {
  const shipSubDiv = document.createElement("div");
  shipSubDiv.className = "ship-sub-div";
  shipSubDiv.setAttribute("data-div", divID);
  return shipSubDiv;
};

export { createShipDiv, createShipSubDiv };
