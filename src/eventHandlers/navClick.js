const navClick = (e) => {
  const howToPlay = document.querySelector(".how-to-play");
  const game = document.querySelector(".game");

  const distance = window.innerWidth;

  switch (e.target.innerHTML) {
    case "Home":
      howToPlay.style.transition = `transform 0.5s ease-in-out`;
      howToPlay.style.transform = `translateX(${-distance}px)`;
      // Animate the section off screen
      game.style.transition = `transform 0.5s ease-in-out`;
      game.style.transform = `translateX(0px)`;
      break;
    case "How To Play":
      howToPlay.style.transition = `transform 0.5s ease-in-out`;
      howToPlay.style.transform = `translateX(${distance}px)`;
      // Animate the section off screen
      game.style.transition = `transform 0.5s ease-in-out`;
      game.style.transform = `translateX(${distance}px)`;
      break;
    case "Source Code":
      console.log("Source Code");
      break;
    default:
      howToPlay.style.transition = `transform 0.5s ease-in-out`;
      howToPlay.style.transform = `translateX(${-distance}px)`;
      // Animate the section off screen
      game.style.transition = `transform 0.5s ease-in-out`;
      game.style.transform = `translateX(0px)`;
  }
};

export { navClick };
