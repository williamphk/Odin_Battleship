const howToPlay = () => {
  const howToPlay = document.createElement("div");
  howToPlay.className = "how-to-play";
  const distance = window.innerWidth;
  howToPlay.style.position = "absolute";
  howToPlay.style.left = `${-distance}px`;

  const gameplay = document.createElement("h3");
  const gameRules = document.createElement("h3");
  const controls = document.createElement("h3");
  const gameplayText = document.createTextNode("Gameplay");
  const gameRulesText = document.createTextNode("Game Rules");
  const controlsText = document.createTextNode("Controls");

  const gameplayList = document.createElement("ol");
  gameplayList.className = "gameplay-list";
  gameplayList.style.paddingLeft = "40px";
  const gameplayListItem1 = document.createElement("li");
  const gameplayListItem2 = document.createElement("li");
  const gameplayListItem3 = document.createElement("li");
  const gameplayListItem4 = document.createElement("li");
  const gameplayListItem5 = document.createElement("li");
  const gameplayListItem1Text = document.createTextNode(
    "The game board consists of a 10x10 grid where you and the Bot will place your battleships and attempt to sink each other's ships."
  );
  const gameplayListItem2Text = document.createTextNode(
    "You have a fleet of 10 ships: one 4-cell ship, two 3-cell ships, three 2-cell ships, and four 1-cell ships. The Bot also has the same fleet."
  );
  const gameplayListItem3Text = document.createTextNode(
    "You will arrange your ships on the board to where you want them to be, either vertically or horizontally."
  );
  const gameplayListItem4Text = document.createTextNode(
    "Once all ships are placed, you and the Bot will take turns to fire at each other's ships by clicking on a cell on the board. If you hit a ship, the cell will turn red. If you miss, nothing will happen."
  );
  const gameplayListItem5Text = document.createTextNode(
    "The game ends when all the cells of a ship are hit, and the player who sinks all the opponent's ships wins."
  );

  gameplayList.appendChild(gameplayListItem1);
  gameplayList.appendChild(gameplayListItem2);
  gameplayList.appendChild(gameplayListItem3);
  gameplayList.appendChild(gameplayListItem4);
  gameplayList.appendChild(gameplayListItem5);

  gameplayListItem1.appendChild(gameplayListItem1Text);
  gameplayListItem2.appendChild(gameplayListItem2Text);
  gameplayListItem3.appendChild(gameplayListItem3Text);
  gameplayListItem4.appendChild(gameplayListItem4Text);
  gameplayListItem5.appendChild(gameplayListItem5Text);

  const gameRulesList = document.createElement("ul");
  gameRulesList.className = "game-rules-list";
  gameRulesList.style.paddingLeft = "40px";
  const gameRulesListItem1 = document.createElement("li");
  const gameRulesListItem2 = document.createElement("li");
  const gameRulesListItem3 = document.createElement("li");

  const gameRulesListItem1Text = document.createTextNode(
    "You cannot place your ships diagonally or overlap them."
  );
  const gameRulesListItem2Text = document.createTextNode(
    "You cannot change the position of your ships once the game has started."
  );
  const gameRulesListItem3Text = document.createTextNode(
    "You cannot fire at the same cell twice."
  );

  gameRulesList.appendChild(gameRulesListItem1);
  gameRulesList.appendChild(gameRulesListItem2);
  gameRulesList.appendChild(gameRulesListItem3);

  gameRulesListItem1.appendChild(gameRulesListItem1Text);
  gameRulesListItem2.appendChild(gameRulesListItem2Text);
  gameRulesListItem3.appendChild(gameRulesListItem3Text);

  const controlsList = document.createElement("ul");
  controlsList.className = "controls-list";
  controlsList.style.paddingLeft = "40px";
  const controlsListItem1 = document.createElement("li");
  const controlsListItem2 = document.createElement("li");
  const controlsListItem3 = document.createElement("li");

  controlsListItem1.innerHTML =
    "<kbd>Drag</kbd> and <kbd>Drop</kbd> the ships on the board";
  controlsListItem2.innerHTML = "Single <kbd>Click</kbd> to rotate them";
  controlsListItem3.innerHTML =
    "press <kbd>Start</kbd> and try to defeat the Bot! Good luck!";

  controlsList.appendChild(controlsListItem1);
  controlsList.appendChild(controlsListItem2);
  controlsList.appendChild(controlsListItem3);

  gameplay.appendChild(gameplayText);
  gameRules.appendChild(gameRulesText);
  controls.appendChild(controlsText);

  howToPlay.appendChild(gameplay);
  howToPlay.appendChild(gameplayList);
  howToPlay.appendChild(gameRules);
  howToPlay.appendChild(gameRulesList);
  howToPlay.appendChild(controls);
  howToPlay.appendChild(controlsList);

  const main = document.querySelector("main");
  main.appendChild(howToPlay);
};

export { howToPlay };
