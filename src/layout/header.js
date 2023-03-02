import { navClick } from "../eventHandlers/navClick";

const header = () => {
  const header = document.createElement("header");
  const siteNameLink = document.createElement("a");
  siteNameLink.href = "#";
  siteNameLink.onclick = (e) => {
    navClick(e);
  };
  const siteName = document.createElement("h2");
  siteName.className = "site-name";
  siteName.innerHTML =
    "<span>B</span><span>a</span><span>t</span><span>t</span><span>l</span><span>e</span><span>s</span><span>h</span><span>i</span><span>p</span>";
  document.body.prepend(header);
  header.appendChild(siteNameLink);
  siteNameLink.appendChild(siteName);

  const nav = document.createElement("nav");
  const list = document.createElement("ul");
  const homeListItem = document.createElement("li");
  const homeLink = document.createElement("a");
  homeLink.href = "#home";
  homeLink.onclick = (e) => {
    navClick(e);
  };
  const homeLinkText = document.createTextNode("Home");
  homeLink.appendChild(homeLinkText);
  homeListItem.appendChild(homeLink);
  list.appendChild(homeListItem);

  const howToPlayListItem = document.createElement("li");
  const howToPlayLink = document.createElement("a");
  howToPlayLink.href = "#how-to-play";
  howToPlayLink.onclick = (e) => {
    navClick(e);
  };
  const howToPlayLinkText = document.createTextNode("How To Play");
  howToPlayLink.appendChild(howToPlayLinkText);
  howToPlayListItem.appendChild(howToPlayLink);
  list.appendChild(howToPlayListItem);

  const sourceListItem = document.createElement("li");
  const sourceLink = document.createElement("a");
  sourceLink.href = "https://github.com/williamphk/odin_Battleship";
  const sourceLinkText = document.createTextNode("Source Code");
  sourceLink.appendChild(sourceLinkText);
  sourceListItem.appendChild(sourceLink);
  list.appendChild(sourceListItem);

  header.appendChild(nav);
  nav.appendChild(list);
};

export { header };
