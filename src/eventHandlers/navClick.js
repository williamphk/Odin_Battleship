const navClick = (e) => {
  const howToPlay = document.querySelector(".how-to-play");
  const game = document.querySelector(".game");

  const distance = screen.width;

  switch (e.target.innerHTML) {
    case "Home":
      howToPlay.style.transition = `transform 0.5s ease-in-out`;
      howToPlay.style.transform = `translateX(${-distance}px)`;
      howToPlay.style.position = "fixed";
      // Animate the section off screen
      game.style.transition = `transform 0.5s ease-in-out`;
      game.style.transform = `translateX(0px)`;
      game.style.position = "static";
      break;
    case "How To Play":
      howToPlay.style.transition = `transform 0.5s ease-in-out`;
      howToPlay.style.transform = `translateX(${distance}px)`;
      howToPlay.style.position = "absolute";
      // Animate the section off screen
      game.style.transition = `transform 0.5s ease-in-out`;
      game.style.transform = `translateX(${distance}px)`;
      game.style.position = "fixed";
      break;
    case "Source Code":
      console.log("Source Code");
      break;
    default:
      howToPlay.style.transition = `transform 0.5s ease-in-out`;
      howToPlay.style.transform = `translateX(${-distance}px)`;
      howToPlay.style.position = "fixed";
      // Animate the section off screen
      game.style.transition = `transform 0.5s ease-in-out`;
      game.style.transform = `translateX(0px)`;
      game.style.position = "static";
  }
};

export { navClick };
