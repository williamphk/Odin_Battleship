function dragEnd(ev, gameStart) {
  if (gameStart === true) return;
  ev.target.classList.remove("dragging");
}

export { dragEnd };
