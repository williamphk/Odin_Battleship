!function(){"use strict";const e=(e,t,l)=>{const n=document.createElement("div");return n.className="ship",n.id="drag"+e,n.setAttribute("data-length",t),n.setAttribute("draggable",!0),n.style.width=l,n},t=e=>{const t=document.createElement("div");return t.className="ship-sub-div",t.style.width="32px",t.style.height="32px",t.setAttribute("data-div",e),t},l=(e,t,l,n)=>{if(t>4||t<1)throw new Error("Wrong Length");return{shipName:e,shipLength:t,direction:l,group:n,array:[...Array(t)],hit(e){if(e>=this.array.shipLength||e<0)throw new Error("Wrong Position");this.array[e]="hit"},isSink(){return this.array.every((e=>"hit"===e))}}},n=()=>Math.floor(10*Math.random()),a=()=>Math.floor(10*Math.random()),o=()=>{let e=Math.floor(2*Math.random());return 0===e?"horizontal":1===e?"vertical":void 0},r=()=>({board:[[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null]],placeShip(e,t,l,o){let r=!0;if("horizontal"===o){console.log("horizontal");for(let n=0;n<l.shipLength;n++)console.log("checking available",e,t+n," for ship ",l),console.log("10",this.board[e][10]),(null!==this.board[e][t+n]&&this.board[e][t+n]!==l||void 0===this.board[e][t+n])&&(r=!1);if(r){console.log("placed!"),this.board[e][t]=l;for(let n=0;n<l.shipLength;n++)this.board[e][t+n]=l}else r||(console.log("random!"),this.placeShip(n(),a(),l,o))}else if("vertical"===o){console.log("vertical");for(let n=0;n<l.shipLength;n++)console.log("checking available",e+n,t," for ship ",l),e+l.shipLength-1>9?(console.log("Out of range!"+e+l.shipLength-1),r=!1):(null!==this.board[e+n][t]&&this.board[e+n][t]!==l||void 0===this.board[e+n][t])&&(r=!1);if(r){console.log("placed!"),this.board[e][t]=l;for(let n=0;n<l.shipLength;n++)this.board[e+n][t]=l}else r||(console.log("random!"),this.placeShip(n(),a(),l,o));console.log(this.board)}},removeShip(e,t,l,n){if("horizontal"===n)for(let n=0;n<l.shipLength;n++)this.board[e][t+n]=null;else if("vertical"===n)for(let n=0;n<l.shipLength;n++)this.board[e+n][t]=null},receiveAttack(e,t){"ship"===this.board[e][t]||"object"==typeof this.board[e][t]&&null!=this.board[e][t]?this.board[e][t]="hit":null===this.board[e][t]&&(this.board[e][t]="missed")},isMiss(e,t){return"missed"===this.board[e][t]},isHit(e,t){return"hit"===this.board[e][t]},isAllShipSink(){return!this.board.some((e=>e.some((e=>"object"==typeof e&&null!==e||"ship"===e))))},hitCount(){let e=0;for(let t=0;t<this.board.length;t++)for(let l=0;l<this.board[t].length;l++)"hit"===this.board[t][l]&&e++;return e}}),i=e=>({name:e}),d=(e,t,l)=>{if(!0===l)return;let n=Number(e.srcElement.parentElement.parentElement.attributes[1].value),a=Number(e.srcElement.parentElement.parentElement.attributes[2].value),o=t.board[n][a],r=Number(e.srcElement.parentElement.dataset.length),i=32*r+r-1,d=!0;if("horizontal"===o.direction){for(let e=1;e<o.shipLength;e++)null===t.board[n+e][a]&&void 0!==t.board[n+e][a]||(d=!1);if(console.log(d),!1===d)return;e.srcElement.parentElement.style.flexDirection="column",e.srcElement.parentElement.style.width="32px",e.srcElement.parentElement.style.height=i+"px",t.removeShip(n,a,o,"horizontal"),t.placeShip(n,a,o,"vertical"),o.direction="vertical"}else if("vertical"===o.direction){for(let e=1;e<o.shipLength;e++)null===t.board[n][a+e]&&void 0!==t.board[n][a+e]||(d=!1);if(console.log(d),!1===d)return;e.srcElement.parentElement.style.flexDirection="row",e.srcElement.parentElement.style.width=i+"px",e.srcElement.parentElement.style.height="32px",t.removeShip(n,a,o,"vertical"),t.placeShip(n,a,o,"horizontal"),o.direction="horizontal"}},c=(e,t)=>{console.log(e),!0!==t&&(e.dataTransfer.setData("target",e.target.id),e.dataTransfer.setData("target-length",e.target.dataset.length),e.dataTransfer.setData("srcX",e.srcElement.parentElement.attributes[1].value),e.dataTransfer.setData("srcY",e.srcElement.parentElement.attributes[2].value))},p=(e,t)=>{!0!==t&&(console.log("dragover"),e.preventDefault(),e.dataTransfer.dropEffect="move")},s=(e,t,l,n)=>{if(console.log("drop"),!0===l)return;e.preventDefault();let a=e.dataTransfer.getData("target"),o=e.dataTransfer.getData("target-length"),r=Number(e.dataTransfer.getData("srcX")),i=Number(e.dataTransfer.getData("srcY")),d=Number(e.target.dataset.x),c=Number(e.target.dataset.y);if(isNaN(d)||isNaN(c))return;let p=t.board[r][i],s=!0;if("horizontal"===p.direction){for(let e=0;e<o;e++)(null!==t.board[d][c+e-n+1]&&t.board[d][c+e-n+1]!==p||void 0===t.board[d][c+e-n+1])&&(s=!1);if(console.log(s),!s)return;s&&(2==n?(d=e.target.dataset.x,c=e.target.dataset.y-1):3==n?(d=e.target.dataset.x,c=e.target.dataset.y-2):4==n&&(d=e.target.dataset.x,c=e.target.dataset.y-3),document.querySelector(`.battle-cell-content.battle-cell-content__player[data-x="${d}"][data-y="${c}"]`).appendChild(document.getElementById(a)),t.removeShip(r,i,p,"horizontal"),t.placeShip(d,c,p,"horizontal"),console.log(t.board))}else if("vertical"===p.direction){for(let e=0;e<o;e++)(null!==t.board[d+e-n+1][c]&&t.board[d+e-n+1][c]!==p||void 0===t.board[d+e-n+1][c])&&(s=!1);if(console.log(s),!s)return;s&&(2==n?(d=e.target.dataset.x-1,c=e.target.dataset.y):3==n?(d=e.target.dataset.x-2,c=e.target.dataset.y):4==n&&(d=e.target.dataset.x-3,c=e.target.dataset.y),document.querySelector(`.battle-cell-content.battle-cell-content__player[data-x="${d}"][data-y="${c}"]`).appendChild(document.getElementById(a)),t.removeShip(r,i,p,"vertical"),t.placeShip(d,c,p,"vertical"),console.log(t.board))}},h=(e,t,l,o,r,i,d)=>{if(l.isHit(e,t)||l.isMiss(e,t))h(n(),a(),l,o,r,i);else{l.receiveAttack(e,t);let n=document.querySelector(`[class$="battle-cell-content battle-cell-content__player"][data-x="${e}"][data-y="${t}"]`),a=n.innerHTML;const d=document.querySelector(".result");if(l.isHit(e,t))if(console.log("x",e,"y",t),a){var c=document.createElement("div");c.style.backgroundColor="red",c.style.position="absolute",c.style.top="0",c.style.width="100%",c.style.height="100%",c.style.zIndex="10",c.innerHTML="H",n.appendChild(c),document.getElementById("hit-count").innerHTML=`You hit: ${i.hitCount()} AI hit: ${l.hitCount()}`}else n.style.position="relative",n.innerHTML="H",n.style.zIndex="3",n.style.backgroundColor="red";else l.isMiss(e,t)&&(n.innerHTML="M");l.isAllShipSink()?(d.innerHTML="AI win",document.getElementById("start-btn").innerHTML="Restart",document.getElementById("start-btn").onclick=()=>{window.location.reload()}):o.turn=r.name}};(()=>{const e=document.createElement("header"),t=document.createElement("a");t.href="#";const l=document.createElement("h2"),n=document.createTextNode("Battleship");document.body.prepend(e),e.appendChild(t),t.appendChild(l),l.appendChild(n);const a=document.createElement("nav"),o=document.createElement("ul"),r=document.createElement("li"),i=document.createElement("a");i.href="#home";const d=document.createTextNode("Home");i.appendChild(d),r.appendChild(i),o.appendChild(r);const c=document.createElement("li"),p=document.createElement("a");p.href="#how-to-play";const s=document.createTextNode("How To Play");p.appendChild(s),c.appendChild(p),o.appendChild(c);const h=document.createElement("li"),u=document.createElement("a");u.href="https://github.com/williamphk/odin_Battleship";const m=document.createTextNode("Source Code");u.appendChild(m),h.appendChild(u),o.appendChild(h),e.appendChild(a),a.appendChild(o)})(),(()=>{console.log("dom");const l=document.querySelector(".player-battlefield"),n=document.querySelector(".bot-battlefield"),a=document.createElement("table"),o=document.createElement("table");console.log(a,o),a.className="battlefield-table-container__player",o.className="battlefield-table-container__bot",l.appendChild(a),n.appendChild(o);for(let e=0;e<10;e++){const t=document.createElement("tr"),l=document.createElement("tr");t.className="battiefield-row__player",l.className="battiefield-row__bot",a.appendChild(t),o.appendChild(l);for(let n=0;n<10;n++){const a=document.createElement("td"),o=document.createElement("td");a.className="battlefield-cell",o.className="battlefield-cell";const r=document.createElement("div"),i=document.createElement("div");r.className="battle-cell-content battle-cell-content__player",i.className="battle-cell-content battle-cell-content__bot",r.dataset.x=e,r.dataset.y=n,i.dataset.x=e,i.dataset.y=n,t.appendChild(a),l.appendChild(o),a.appendChild(r),o.appendChild(i)}}const r=e(1,1,"32px"),i=e(2,1,"32px"),d=e(3,1,"32px"),c=e(4,1,"32px"),p=e(5,2,"65px"),s=e(6,2,"65px"),h=e(7,2,"65px"),u=e(8,3,"98px"),m=e(9,3,"98px"),b=e(10,4,"131px"),y=t(1),g=t(1),f=t(1),C=t(1),E=t(1),S=t(2),v=t(1),x=t(2),z=t(1),_=t(2),L=t(1),T=t(2),N=t(3),q=t(1),M=t(2),w=t(3),A=t(1),H=t(2),k=t(3),I=t(4);r.appendChild(y),i.appendChild(g),d.appendChild(f),c.appendChild(C),p.appendChild(E),p.appendChild(S),s.appendChild(v),s.appendChild(x),h.appendChild(z),h.appendChild(_),u.appendChild(L),u.appendChild(T),u.appendChild(N),m.appendChild(q),m.appendChild(M),m.appendChild(w),b.appendChild(A),b.appendChild(H),b.appendChild(k),b.appendChild(I),document.querySelector('.battle-cell-content.battle-cell-content__player[data-x="0"][data-y="0"]').appendChild(r),document.querySelector('.battle-cell-content.battle-cell-content__player[data-x="0"][data-y="3"]').appendChild(i),document.querySelector('.battle-cell-content.battle-cell-content__player[data-x="0"][data-y="6"]').appendChild(d),document.querySelector('.battle-cell-content.battle-cell-content__player[data-x="0"][data-y="9"]').appendChild(c),document.querySelector('.battle-cell-content.battle-cell-content__player[data-x="2"][data-y="1"]').appendChild(p),document.querySelector('.battle-cell-content.battle-cell-content__player[data-x="2"][data-y="7"]').appendChild(s),document.querySelector('.battle-cell-content.battle-cell-content__player[data-x="3"][data-y="4"]').appendChild(h),document.querySelector('.battle-cell-content.battle-cell-content__player[data-x="6"][data-y="1"]').appendChild(u),document.querySelector('.battle-cell-content.battle-cell-content__player[data-x="6"][data-y="6"]').appendChild(m),document.querySelector('.battle-cell-content.battle-cell-content__player[data-x="8"][data-y="3"]').appendChild(b)})(),(()=>{const e=document.createElement("footer"),t=document.createElement("p"),l=document.createTextNode(`© ${(new Date).getFullYear()}, William Poon`);t.appendChild(l),e.appendChild(t),document.body.appendChild(e)})();let u=!1;const m=l("ship1",1,"horizontal","player"),b=l("ship2",1,"horizontal","player"),y=l("ship3",1,"horizontal","player"),g=l("ship4",1,"horizontal","player"),f=l("ship5",2,"horizontal","player"),C=l("ship6",2,"horizontal","player"),E=l("ship7",2,"horizontal","player"),S=l("ship8",3,"horizontal","player"),v=l("ship9",3,"horizontal","player"),x=l("ship10",4,"horizontal","player"),z=l("ship1",1,"horizontal","bot"),_=l("ship2",1,"horizontal","bot"),L=l("ship3",1,"horizontal","bot"),T=l("ship4",1,"horizontal","bot"),N=l("ship5",2,"horizontal","bot"),q=l("ship6",2,"horizontal","bot"),M=l("ship7",2,"horizontal","bot"),w=l("ship8",3,"horizontal","bot"),A=l("ship9",3,"horizontal","bot"),H=l("ship10",4,"horizontal","bot");let k=r(),I=r();console.log(k),console.log(I),I.placeShip(n(),a(),z,o()),I.placeShip(n(),a(),_,o()),I.placeShip(n(),a(),L,o()),I.placeShip(n(),a(),T,o()),I.placeShip(n(),a(),N,o()),I.placeShip(n(),a(),q,o()),I.placeShip(n(),a(),M,o()),I.placeShip(n(),a(),w,o()),I.placeShip(n(),a(),A,o()),I.placeShip(n(),a(),H,o()),k.placeShip(0,0,m,"horizontal"),k.placeShip(0,3,b,"horizontal"),k.placeShip(0,6,y,"horizontal"),k.placeShip(0,9,g,"horizontal"),k.placeShip(2,1,f,"horizontal"),k.placeShip(2,7,C,"horizontal"),k.placeShip(3,4,E,"horizontal"),k.placeShip(6,1,S,"horizontal"),k.placeShip(6,6,v,"horizontal"),k.placeShip(8,3,x,"horizontal"),console.log(k.board);let $=i("Player"),D=i("Bot");console.log($);const B={turn:$.name};document.querySelectorAll(".battle-cell-content__bot").forEach(((e,t)=>{e.addEventListener("click",(()=>((e,t,l,o,r,i,d,c,p)=>{if(!l)return;if(o.turn===p.name)return;if("。"===e.innerHTML)return;if(d)return;const s=document.getElementById("hit-count");s.innerHTML=`You hit: ${r.hitCount()} AI hit: ${i.hitCount()}`;const u=document.querySelectorAll(".battle-cell-content__bot"),m=document.querySelector(".result");e.innerHTML="。",r.receiveAttack(u[t].dataset.x,u[t].dataset.y),r.isAllShipSink()?(m.innerHTML="You win",s.innerHTML=`You hit: ${r.hitCount()} AI hit: ${i.hitCount()}`,d=!0,document.getElementById("start-btn").innerHTML="Restart",document.getElementById("start-btn").onclick=()=>{window.location.reload()}):(o.turn=p.name,h(n(),a(),i,o,c,r,d))})(e,t,u,B,I,k,!1,$,D)))}));let Y=null;const P=document.querySelectorAll(".ship-sub-div");for(let e=0;e<P.length;e++)P[e].addEventListener("mouseover",(e=>{Y=e.target.getAttribute("data-div"),console.log(Y)}));const W=document.querySelectorAll(".ship");for(let e=0;e<W.length;e++)W[e].addEventListener("click",(e=>d(e,k,u))),W[e].addEventListener("dragstart",(e=>c(e,u))),W[e].addEventListener("dragend",(e=>{}));const j=document.querySelectorAll(".battlefield-cell");for(let e=0;e<j.length;e++)j[e].addEventListener("dragover",(e=>p(e,u))),j[e].addEventListener("drop",(e=>s(e,k,u,Y)));document.getElementById("start-btn").onclick=()=>{document.querySelectorAll(".battlefield-cell").forEach((e=>{e.style.borderTop="0.5px solid rgb(0, 38, 255)",e.style.borderLeft="0.5px solid rgb(0, 38, 255)",e.style.backgroundColor="rgb(228, 228, 228)"})),u=!0}}();