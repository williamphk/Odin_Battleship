function createShipDiv(id, length, width) {
  const shipDiv = document.createElement("div");
  shipDiv.className = "shipbox ship";
  shipDiv.id = "drag" + id;
  shipDiv.setAttribute("data-length", length);
  shipDiv.setAttribute("draggable", true);
  shipDiv.style.width = width;
  return shipDiv;
}

export { createShipDiv };
