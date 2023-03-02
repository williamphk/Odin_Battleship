import { howToPlay } from "./howToPlay";
import { battiefield } from "./battlefield";

const main = () => {
  const main = document.createElement("main");
  const header = document.getElementsByTagName("header")[0];

  header.after(main);
  howToPlay();
  battiefield();
};

export { main };
