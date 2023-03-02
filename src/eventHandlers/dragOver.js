const dragOver = (ev, gameStart) => {
  if (gameStart === true) return;
  console.log("dragover");
  ev.preventDefault();
  ev.dataTransfer.dropEffect = "move";
};

export { dragOver };
