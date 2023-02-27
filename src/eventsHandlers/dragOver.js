function dragOver(ev, gameStart) {
  if (gameStart === true) return;
  ev.preventDefault();
  ev.dataTransfer.dropEffect = "move";
}

export { dragOver };
