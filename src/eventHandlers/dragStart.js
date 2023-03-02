const dragStart = (ev, gameStart) => {
  console.log(ev);
  if (gameStart === true) return;
  ev.dataTransfer.setData("target", ev.target.id);
  ev.dataTransfer.setData("target-length", ev.target.dataset.length);
  ev.dataTransfer.setData(
    "srcX",
    ev.srcElement.parentElement.attributes[1].value
  );
  ev.dataTransfer.setData(
    "srcY",
    ev.srcElement.parentElement.attributes[2].value
  );
};

export { dragStart };
