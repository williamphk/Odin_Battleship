!function(){"use strict";const e=e=>{const t=document.querySelector(".how-to-play"),l=document.querySelector(".game"),n=window.innerWidth;switch(e.target.innerHTML){case"Home":default:t.style.transition="transform 0.5s ease-in-out",t.style.transform=`translateX(${-n}px)`,l.style.transition="transform 0.5s ease-in-out",l.style.transform="translateX(0px)";break;case"How To Play":t.style.transition="transform 0.5s ease-in-out",t.style.transform=`translateX(${n}px)`,l.style.transition="transform 0.5s ease-in-out",l.style.transform=`translateX(${n}px)`;break;case"Source Code":console.log("Source Code")}},t=(e,t,l)=>{const n=document.createElement("div");return n.className="ship",n.id="drag"+e,n.setAttribute("data-length",t),n.setAttribute("draggable",!0),n.style.width=l,n},l=e=>{const t=document.createElement("div");return t.className="ship-sub-div",t.style.width="32px",t.style.height="32px",t.setAttribute("data-div",e),t},n=e=>({name:e}),a=(e,t,l,n)=>{if(t>5||t<1)throw new Error("Wrong Length");return{shipName:e,shipLength:t,direction:l,group:n,array:[...Array(t)],hit(e){if(e>=this.array.shipLength||e<0)throw new Error("Wrong Position");this.array[e]="hit"},isSink(){return this.array.every((e=>"hit"===e))}}},o=()=>Math.floor(10*Math.random()),r=()=>Math.floor(10*Math.random()),d=()=>{let e=Math.floor(2*Math.random());return 0===e?"horizontal":1===e?"vertical":void 0},i=()=>({board:[[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null]],placeShip(e,t,l,n){let a=!0;if("horizontal"===n){for(let n=0;n<l.shipLength;n++)(null!==this.board[e][t+n]&&this.board[e][t+n]!==l||void 0===this.board[e][t+n])&&(a=!1);if(a){this.board[e][t]=l;for(let n=0;n<l.shipLength;n++)this.board[e][t+n]=l}else a||this.placeShip(o(),r(),l,n)}else if("vertical"===n){for(let n=0;n<l.shipLength;n++)(e+l.shipLength-1>9||null!==this.board[e+n][t]&&this.board[e+n][t]!==l||void 0===this.board[e+n][t])&&(a=!1);if(a){this.board[e][t]=l;for(let n=0;n<l.shipLength;n++)this.board[e+n][t]=l}else a||this.placeShip(o(),r(),l,n)}},removeShip(e,t,l,n){if("horizontal"===n)for(let n=0;n<l.shipLength;n++)this.board[e][t+n]=null;else if("vertical"===n)for(let n=0;n<l.shipLength;n++)this.board[e+n][t]=null},receiveAttack(e,t){"ship"===this.board[e][t]||"object"==typeof this.board[e][t]&&null!=this.board[e][t]?this.board[e][t]="hit":null===this.board[e][t]&&(this.board[e][t]="missed")},isMiss(e,t){return"missed"===this.board[e][t]},isHit(e,t){return"hit"===this.board[e][t]},isAllShipSink(){return!this.board.some((e=>e.some((e=>"object"==typeof e&&null!==e||"ship"===e))))},hitCount(){let e=0;for(let t=0;t<this.board.length;t++)for(let l=0;l<this.board[t].length;l++)"hit"===this.board[t][l]&&e++;return e}}),s=(e,t,l)=>{if(!0===l)return;let n=Number(e.srcElement.parentElement.parentElement.attributes[1].value),a=Number(e.srcElement.parentElement.parentElement.attributes[2].value),o=t.board[n][a],r=Number(e.srcElement.parentElement.dataset.length),d=32*r+r-1,i=!0;if("horizontal"===o.direction){for(let e=1;e<o.shipLength;e++)null===t.board[n+e][a]&&void 0!==t.board[n+e][a]||(i=!1);if(console.log(i),!1===i)return;e.srcElement.parentElement.style.flexDirection="column",e.srcElement.parentElement.style.width="32px",e.srcElement.parentElement.style.height=d+"px",t.removeShip(n,a,o,"horizontal"),t.placeShip(n,a,o,"vertical"),o.direction="vertical"}else if("vertical"===o.direction){for(let e=1;e<o.shipLength;e++)null===t.board[n][a+e]&&void 0!==t.board[n][a+e]||(i=!1);if(console.log(i),!1===i)return;e.srcElement.parentElement.style.flexDirection="row",e.srcElement.parentElement.style.width=d+"px",e.srcElement.parentElement.style.height="32px",t.removeShip(n,a,o,"vertical"),t.placeShip(n,a,o,"horizontal"),o.direction="horizontal"}},c=(e,t,l,n)=>{if(console.log("drop"),!0===l)return;e.preventDefault();let a=e.dataTransfer.getData("target"),o=e.dataTransfer.getData("target-length"),r=Number(e.dataTransfer.getData("srcX")),d=Number(e.dataTransfer.getData("srcY")),i=Number(e.target.dataset.x),s=Number(e.target.dataset.y);if(isNaN(i)||isNaN(s))return;let c=t.board[r][d],p=!0;if("horizontal"===c.direction){for(let e=0;e<o;e++)(null!==t.board[i][s+e-n+1]&&t.board[i][s+e-n+1]!==c||void 0===t.board[i][s+e-n+1])&&(p=!1);if(!p)return;p&&(2==n?(i=e.target.dataset.x,s=e.target.dataset.y-1):3==n?(i=e.target.dataset.x,s=e.target.dataset.y-2):4==n?(i=e.target.dataset.x,s=e.target.dataset.y-3):5==n&&(i=e.target.dataset.x,s=e.target.dataset.y-4),document.querySelector(`.battle-cell-content.battle-cell-content__player[data-x="${i}"][data-y="${s}"]`).appendChild(document.getElementById(a)),t.removeShip(r,d,c,"horizontal"),t.placeShip(i,s,c,"horizontal"),console.log(t.board))}else if("vertical"===c.direction){for(let e=0;e<o;e++)(null!==t.board[i+e-n+1][s]&&t.board[i+e-n+1][s]!==c||void 0===t.board[i+e-n+1][s])&&(p=!1);if(console.log(p),!p)return;p&&(2==n?(i=e.target.dataset.x-1,s=e.target.dataset.y):3==n?(i=e.target.dataset.x-2,s=e.target.dataset.y):4==n?(i=e.target.dataset.x-3,s=e.target.dataset.y):5==n&&(i=e.target.dataset.x-4,s=e.target.dataset.y),document.querySelector(`.battle-cell-content.battle-cell-content__player[data-x="${i}"][data-y="${s}"]`).appendChild(document.getElementById(a)),t.removeShip(r,d,c,"vertical"),t.placeShip(i,s,c,"vertical"))}},p=(e,t,l,n,a,d,i)=>{if(l.isHit(e,t)||l.isMiss(e,t))p(o(),r(),l,n,a,d);else{l.receiveAttack(e,t);let o=document.querySelector(`[class$="battle-cell-content battle-cell-content__player"][data-x="${e}"][data-y="${t}"]`),r=o.innerHTML;const d=document.querySelector(".result");if(l.isHit(e,t))if(console.log("x",e,"y",t),r){var s=document.createElement("div");s.style.backgroundColor="red",s.style.position="absolute",s.style.top="0",s.style.width="100%",s.style.height="100%",s.style.zIndex="10",s.innerHTML="X",o.appendChild(s)}else o.style.position="relative",o.innerHTML="X",o.style.zIndex="3",o.style.backgroundColor="red";else l.isMiss(e,t)&&(o.innerHTML="。");l.isAllShipSink()?d.innerHTML="Bot won!":n.turn=a.name}};let u=!1;(()=>{const t=document.createElement("header"),l=document.createElement("a");l.href="#",l.onclick=t=>{e(t)};const n=document.createElement("h2");n.className="site-name",n.innerHTML="<span>B</span><span>a</span><span>t</span><span>t</span><span>l</span><span>e</span><span>s</span><span>h</span><span>i</span><span>p</span>",document.body.prepend(t),t.appendChild(l),l.appendChild(n);const a=document.createElement("nav"),o=document.createElement("ul"),r=document.createElement("li"),d=document.createElement("a");d.href="#home",d.onclick=t=>{e(t)};const i=document.createTextNode("Home");d.appendChild(i),r.appendChild(d),o.appendChild(r);const s=document.createElement("li"),c=document.createElement("a");c.href="#how-to-play",c.onclick=t=>{e(t)};const p=document.createTextNode("How To Play");c.appendChild(p),s.appendChild(c),o.appendChild(s);const u=document.createElement("li"),h=document.createElement("a");h.href="https://github.com/williamphk/odin_Battleship";const m=document.createTextNode("Source Code");h.appendChild(m),u.appendChild(h),o.appendChild(u),t.appendChild(a),a.appendChild(o)})(),(()=>{const e=document.createElement("main");document.getElementsByTagName("header")[0].after(e),(()=>{const e=document.createElement("div");e.className="how-to-play";const t=window.innerWidth;e.style.position="absolute",e.style.left=-t+"px";const l=document.createElement("h3"),n=document.createElement("h3"),a=document.createElement("h3"),o=document.createTextNode("Gameplay"),r=document.createTextNode("Game Rules"),d=document.createTextNode("Controls"),i=document.createElement("ol");i.className="gameplay-list",i.style.paddingLeft="40px";const s=document.createElement("li"),c=document.createElement("li"),p=document.createElement("li"),u=document.createElement("li"),h=document.createElement("li"),m=document.createTextNode("The game board consists of a 10x10 grid where you and the Bot will place your battleships and attempt to sink each other's ships."),b=document.createTextNode("You have a fleet of 10 ships: one 4-cell ship, two 3-cell ships, three 2-cell ships, and four 1-cell ships. The Bot also has the same fleet."),y=document.createTextNode("You will arrange your ships on the board to where you want them to be, either vertically or horizontally."),g=document.createTextNode("Once all ships are placed, you and the Bot will take turns to fire at each other's ships by clicking on a cell on the board. If you hit a ship, the cell will turn red. If you miss, nothing will happen."),f=document.createTextNode("The game ends when all the cells of a ship are hit, and the player who sinks all the opponent's ships wins.");i.appendChild(s),i.appendChild(c),i.appendChild(p),i.appendChild(u),i.appendChild(h),s.appendChild(m),c.appendChild(b),p.appendChild(y),u.appendChild(g),h.appendChild(f);const C=document.createElement("ul");C.className="game-rules-list",C.style.paddingLeft="40px";const E=document.createElement("li"),x=document.createElement("li"),v=document.createElement("li"),S=document.createTextNode("You cannot place your ships diagonally or overlap them."),N=document.createTextNode("You cannot change the position of your ships once the game has started."),T=document.createTextNode("You cannot fire at the same cell twice.");C.appendChild(E),C.appendChild(x),C.appendChild(v),E.appendChild(S),x.appendChild(N),v.appendChild(T);const w=document.createElement("ul");w.className="controls-list",w.style.paddingLeft="40px";const L=document.createElement("li"),k=document.createElement("li"),_=document.createElement("li");L.innerHTML="<kbd>Drag</kbd> and <kbd>Drop</kbd> the ships on the board",k.innerHTML="Single <kbd>Click</kbd> to rotate them",_.innerHTML="press <kbd>Start</kbd> and try to defeat the Bot! Good luck!",w.appendChild(L),w.appendChild(k),w.appendChild(_),l.appendChild(o),n.appendChild(r),a.appendChild(d),e.appendChild(l),e.appendChild(i),e.appendChild(n),e.appendChild(C),e.appendChild(a),e.appendChild(w),document.querySelector("main").appendChild(e)})(),(()=>{const e=document.createElement("div");e.className="game",e.style.display="flex",e.style.flexDirection="column",e.style.alignItems="center",e.style.gap="20px";const n=document.createElement("h3");n.className="result",e.appendChild(n);const a=document.createElement("div");a.className="battlefields";const o=document.createElement("div"),r=document.createElement("div"),d=document.createElement("h2"),i=document.createElement("h2");d.innerHTML="Your board",i.innerHTML="Enemy's board",o.appendChild(d),r.appendChild(i),a.appendChild(o),a.appendChild(r);const s=document.querySelector("main");e.appendChild(a),s.appendChild(e),o.className="player-battlefield",r.className="bot-battlefield";const c=document.createElement("table"),p=document.createElement("table");console.log(c,p),c.className="battlefield-table-container__player",p.className="battlefield-table-container__bot",o.appendChild(c),r.appendChild(p);for(let e=0;e<10;e++){const t=document.createElement("tr"),l=document.createElement("tr");t.className="battiefield-row__player",l.className="battiefield-row__bot",c.appendChild(t),p.appendChild(l);for(let n=0;n<10;n++){const a=document.createElement("td"),o=document.createElement("td");a.className="battlefield-cell",o.className="battlefield-cell";const r=document.createElement("div"),d=document.createElement("div");r.className="battle-cell-content battle-cell-content__player",d.className="battle-cell-content battle-cell-content__bot",r.dataset.x=e,r.dataset.y=n,d.dataset.x=e,d.dataset.y=n,t.appendChild(a),l.appendChild(o),a.appendChild(r),o.appendChild(d)}}const u=t(1,2,"64.25px"),h=t(2,3,"96.6px"),m=t(3,3,"96.6px"),b=t(4,4,"129px"),y=t(5,5,"161.2px"),g=l(1),f=l(2),C=l(1),E=l(2),x=l(3),v=l(1),S=l(2),N=l(3),T=l(1),w=l(2),L=l(3),k=l(4),_=l(1),z=l(2),M=l(3),H=l(4),q=l(5);u.appendChild(g),u.appendChild(f),h.appendChild(C),h.appendChild(E),h.appendChild(x),m.appendChild(v),m.appendChild(S),m.appendChild(N),b.appendChild(T),b.appendChild(w),b.appendChild(L),b.appendChild(k),y.appendChild(_),y.appendChild(z),y.appendChild(M),y.appendChild(H),y.appendChild(q),document.querySelector('.battle-cell-content.battle-cell-content__player[data-x="0"][data-y="0"]').appendChild(u),document.querySelector('.battle-cell-content.battle-cell-content__player[data-x="2"][data-y="0"]').appendChild(h),document.querySelector('.battle-cell-content.battle-cell-content__player[data-x="4"][data-y="0"]').appendChild(m),document.querySelector('.battle-cell-content.battle-cell-content__player[data-x="6"][data-y="0"]').appendChild(b),document.querySelector('.battle-cell-content.battle-cell-content__player[data-x="8"][data-y="0"]').appendChild(y);const A=document.createElement("button");A.className="start-btn",A.id="start-btn",A.textContent="Start",e.appendChild(A)})()})(),(()=>{const e=document.createElement("footer"),t=document.createElement("p"),l=document.createTextNode(`© ${(new Date).getFullYear()}, William Poon`);t.appendChild(l),e.appendChild(t),document.querySelector("main").after(e)})(),(()=>{const e=a("ship1",2,"horizontal","player"),t=a("ship2",3,"horizontal","player"),l=a("ship3",3,"horizontal","player"),h=a("ship4",4,"horizontal","player"),m=a("ship5",5,"horizontal","player"),b=a("ship1",2,"horizontal","bot"),y=a("ship2",3,"horizontal","bot"),g=a("ship3",3,"horizontal","bot"),f=a("ship4",4,"horizontal","bot"),C=a("ship5",5,"horizontal","bot");let E=i(),x=i(),v=!1;((e,t,l,n,a,i,s,c,p,u,h,m)=>{m.placeShip(o(),r(),i,d()),m.placeShip(o(),r(),s,d()),m.placeShip(o(),r(),c,d()),m.placeShip(o(),r(),p,d()),m.placeShip(o(),r(),u,d()),h.placeShip(0,0,e,"horizontal"),h.placeShip(2,0,t,"horizontal"),h.placeShip(4,0,l,"horizontal"),h.placeShip(6,0,n,"horizontal"),h.placeShip(8,0,a,"horizontal"),console.log(h.board),console.log(m.board)})(e,t,l,h,m,b,y,g,f,C,E,x);let S=n("Player"),N=n("Bot");const T={turn:S.name};document.querySelectorAll(".battle-cell-content__bot").forEach(((e,t)=>{e.addEventListener("click",(()=>((e,t,l,n,a,d,i,s)=>{if(!l)return;if(n.turn===s.name)return;if("。"===e.innerHTML)return;if(u)return;const c=document.querySelectorAll(".battle-cell-content__bot"),h=document.querySelector(".result");a.receiveAttack(c[t].dataset.x,c[t].dataset.y),a.isHit(c[t].dataset.x,c[t].dataset.y)?(e.innerHTML="X",e.style.backgroundColor="red"):a.isMiss(c[t].dataset.x,c[t].dataset.y)&&(e.innerHTML="。"),a.isAllShipSink()?(h.innerHTML="You won!",u=!0):(n.turn=s.name,p(o(),r(),d,n,i,a,u))})(e,t,v,T,x,E,S,N)))}));let w=null;const L=document.querySelectorAll(".ship-sub-div");for(let e=0;e<L.length;e++)L[e].addEventListener("mouseover",(e=>{w=e.target.getAttribute("data-div"),console.log(w)}));const k=document.querySelectorAll(".ship");for(let e=0;e<k.length;e++)k[e].addEventListener("click",(e=>s(e,E,v))),k[e].addEventListener("dragstart",(e=>{return t=e,l=v,console.log(t),void(!0!==l&&(t.dataTransfer.setData("target",t.target.id),t.dataTransfer.setData("target-length",t.target.dataset.length),t.dataTransfer.setData("srcX",t.srcElement.parentElement.attributes[1].value),t.dataTransfer.setData("srcY",t.srcElement.parentElement.attributes[2].value)));var t,l})),k[e].addEventListener("dragend",(e=>{}));const _=document.querySelectorAll(".battlefield-cell");for(let e=0;e<_.length;e++)_[e].addEventListener("dragover",(e=>{return t=e,void(!0!==v&&(console.log("dragover"),t.preventDefault(),t.dataTransfer.dropEffect="move"));var t})),_[e].addEventListener("drop",(e=>c(e,E,v,w)));document.getElementById("start-btn").onclick=()=>{console.log("Game started"),document.getElementById("start-btn").innerHTML="Restart",document.getElementById("start-btn").onclick=()=>{window.location.reload()},document.querySelectorAll(".ship").forEach((e=>{e.draggable=!1})),document.querySelectorAll(".battlefield-cell").forEach((e=>{e.style.borderTop="0.5px solid rgb(0, 38, 255)",e.style.borderLeft="0.5px solid rgb(0, 38, 255)",e.style.backgroundColor="rgb(228, 228, 228)"})),v=!0}})()}();