!function(){"use strict";const t=(t,e,l,n)=>{if(e>4||e<1)throw new Error("Wrong Length");return{shipName:t,shipLength:e,direction:l,group:n,array:[...Array(e)],hit(t){if(t>=this.array.shipLength||t<0)throw new Error("Wrong Position");this.array[t]="hit"},isSink(){return this.array.every((t=>"hit"===t))}}},e=()=>Math.floor(10*Math.random()),l=()=>Math.floor(10*Math.random()),n=()=>{let t=Math.floor(2*Math.random());return 0===t?"horizontal":1===t?"vertical":void 0},a=()=>({board:[[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null]],placeShip(t,n,a,o){let r=!0;if("horizontal"===o){for(let e=0;e<a.shipLength;e++)null===this.board[t][n+e]&&void 0!==this.board[t][n+e]||(r=!1);if(r){for(let e=0;e<a.shipLength;e++)this.board[t][n+e]=a;this.board[t][n]=a}else r||this.placeShip(e(),l(),a,o)}else if("vertical"===o){for(let e=0;e<a.shipLength;e++)(this.board[t+e]?.[n]||void 0===this.board[t+e]?.[n])&&(r=!1);if(r){for(let e=0;e<a.shipLength;e++)this.board[t+e][n]=a;this.board[t][n]=a}else r||this.placeShip(e(),l(),a,o)}},removeShip(t,e,l,n){if("horizontal"===n)for(let n=0;n<l.shipLength;n++)this.board[t][e+n]=null;else if("vertical"===n)for(let n=0;n<l.shipLength;n++)this.board[t+n][e]=null},receiveAttack(t,e){"ship"===this.board[t][e]||"object"==typeof this.board[t][e]&&null!=this.board[t][e]?this.board[t][e]="hit":null===this.board[t][e]&&(this.board[t][e]="missed")},isMiss(t,e){return"missed"===this.board[t][e]},isHit(t,e){return"hit"===this.board[t][e]},isAllShipSink(){return!this.board.some((t=>t.some((t=>"object"==typeof t&&null!==t||"ship"===t))))},hitCount(){let t=0;for(let e=0;e<this.board.length;e++)for(let l=0;l<this.board[e].length;l++)"hit"===this.board[e][l]&&t++;return t}}),o=t=>({name:t});function r(t,e,l){if(!0===l)return;let n=Number(t.srcElement.parentElement.attributes[1].value),a=Number(t.srcElement.parentElement.attributes[2].value),o=e.board[n][a],r=Number(t.target.dataset.length),i=32*r+r-1,c=!0;if("horizontal"===o.direction){for(let t=1;t<o.shipLength;t++)(9-n+1<r||null!==e.board[n+t][a]||void 0===e.board[n+t][a])&&(c=!1);if(console.log(c),!1===c)return;t.target.style.width="32px",t.target.style.height=i+"px",e.removeShip(n,a,o,"horizontal"),e.placeShip(n,a,o,"vertical"),o.direction="vertical"}else if("vertical"===o.direction){for(let t=1;t<o.shipLength;t++)(9-a+1<r||null!==e.board[n][a+t]||void 0===e.board[n][a+t])&&(c=!1);if(console.log(c),!1===c)return;t.target.style.width=i+"px",t.target.style.height="32px",e.removeShip(n,a,o,"vertical"),e.placeShip(n,a,o,"horizontal"),o.direction="horizontal"}}function i(t,e){!0!==e&&(t.dataTransfer.setData("target",t.target.id),t.dataTransfer.setData("target-length",t.target.dataset.length),t.dataTransfer.setData("srcX",t.srcElement.parentElement.attributes[1].value),t.dataTransfer.setData("srcY",t.srcElement.parentElement.attributes[2].value),t.target.classList.add("dragging"))}function c(t,e){!0!==e&&(t.preventDefault(),t.dataTransfer.dropEffect="move")}function s(t,e){!0!==e&&t.target.classList.remove("dragging")}function d(t,e,l){if(!0===l)return;let n=t.dataTransfer.getData("target"),a=t.dataTransfer.getData("target-length"),o=Number(t.dataTransfer.getData("srcX")),r=Number(t.dataTransfer.getData("srcY")),i=Number(t.target.dataset.x),c=Number(t.target.dataset.y);if(isNaN(i)||isNaN(c))return;t.preventDefault();let s=e.board[o][r],d=!0;if("horizontal"===s.direction){for(let t=0;t<a;t++)console.log(i,c+t),console.log(e.board[i][c+t]),(9-c+1<a||null!==e.board[i][c+t]&&e.board[i][c+t]!==s||void 0===e.board[i][c+t])&&(d=!1);if(console.log(d),!1===d)return;t.target.appendChild(document.getElementById(n)),e.removeShip(o,r,s,"horizontal"),e.placeShip(i,c,s,"horizontal")}else if("vertical"===s.direction){for(let t=0;t<a;t++)(9-i+1<a||null!==e.board[i+t][c]&&e.board[i+t][c]!==s||void 0===e.board[i+t][c])&&(d=!1);if(console.log(d),!1===d)return;t.target.appendChild(document.getElementById(n)),e.removeShip(o,r,s,"vertical"),e.placeShip(i,c,s,"vertical")}}const u=(t,n,a,o,r,i)=>{if(a.isHit(t,n)||a.isMiss(t,n))u(e(),l(),a,o,r,i);else{a.receiveAttack(t,n);let e=document.querySelector(`[class$="battle-cell-content battle-cell-content__self"][data-x="${t}"][data-y="${n}"]`),l=e.innerHTML;const s=document.querySelector(".result");if(a.isHit(t,n))if(console.log("x",t,"y",n),l){var c=document.createElement("div");c.style.backgroundColor="red",c.style.position="absolute",c.style.top="0",c.style.width="100%",c.style.height="100%",c.style.zIndex="10",c.innerHTML="H",e.appendChild(c),document.getElementById("hit-count").innerHTML=`You hit: ${i.hitCount()} AI hit: ${a.hitCount()}`}else e.style.position="relative",e.innerHTML="H",e.style.zIndex="3",e.style.backgroundColor="red";else a.isMiss(t,n)&&(e.innerHTML="M");a.isAllShipSink()?(s.innerHTML="AI win",isGameEnd=!0,document.getElementById("start-btn").innerHTML="Restart",document.getElementById("start-btn").onclick=()=>{window.location.reload()}):o.turn=r.name}};function h(t,e,l){const n=document.createElement("div");return n.className="shipbox ship",n.id="drag"+t,n.setAttribute("data-length",e),n.setAttribute("draggable",!0),n.style.width=l,n}!function(){console.log("dom");const t=document.querySelector(".battlefields"),e=document.createElement("table"),l=document.createElement("table");console.log(e,l),e.className="battlefield-table-container__self",l.className="battlefield-table-container__rival",t.appendChild(e),t.appendChild(l);for(let t=0;t<10;t++){const n=document.createElement("tr"),a=document.createElement("tr");n.className="battiefield-row__self",a.className="battiefield-row__rival",e.appendChild(n),l.appendChild(a);for(let e=0;e<10;e++){const l=document.createElement("td"),o=document.createElement("td");l.className="battlefield-cell",o.className="battlefield-cell";const r=document.createElement("div"),i=document.createElement("div");r.className="battle-cell-content battle-cell-content__self",i.className="battle-cell-content battle-cell-content__rival",r.dataset.x=t,r.dataset.y=e,i.dataset.x=t,i.dataset.y=e,n.appendChild(l),a.appendChild(o),l.appendChild(r),o.appendChild(i)}}const n=h(1,1,"32px"),a=h(2,1,"32px"),o=h(3,1,"32px"),r=h(4,1,"32px"),i=h(5,2,"65px"),c=h(6,2,"65px"),s=h(7,2,"65px"),d=h(8,3,"98px"),u=h(9,3,"98px"),p=h(10,4,"131px");document.querySelector('.battle-cell-content.battle-cell-content__self[data-x="0"][data-y="0"]').appendChild(n),document.querySelector('.battle-cell-content.battle-cell-content__self[data-x="0"][data-y="3"]').appendChild(a),document.querySelector('.battle-cell-content.battle-cell-content__self[data-x="0"][data-y="6"]').appendChild(o),document.querySelector('.battle-cell-content.battle-cell-content__self[data-x="0"][data-y="9"]').appendChild(r),document.querySelector('.battle-cell-content.battle-cell-content__self[data-x="2"][data-y="1"]').appendChild(i),document.querySelector('.battle-cell-content.battle-cell-content__self[data-x="2"][data-y="7"]').appendChild(c),document.querySelector('.battle-cell-content.battle-cell-content__self[data-x="3"][data-y="4"]').appendChild(s),document.querySelector('.battle-cell-content.battle-cell-content__self[data-x="6"][data-y="1"]').appendChild(d),document.querySelector('.battle-cell-content.battle-cell-content__self[data-x="6"][data-y="6"]').appendChild(u),document.querySelector('.battle-cell-content.battle-cell-content__self[data-x="8"][data-y="3"]').appendChild(p)}();let p=!1;const m=t("ship1",1,"horizontal","self"),b=t("ship2",1,"horizontal","self"),f=t("ship3",1,"horizontal","self"),g=t("ship4",1,"horizontal","self"),y=t("ship5",2,"horizontal","self"),v=t("ship6",2,"horizontal","self"),S=t("ship7",2,"horizontal","self"),z=t("ship8",3,"horizontal","self"),E=t("ship9",3,"horizontal","self"),_=t("ship10",4,"horizontal","self"),x=t("ship1",1,"horizontal","rival"),L=t("ship2",1,"horizontal","rival"),C=t("ship3",1,"horizontal","rival"),M=t("ship4",1,"horizontal","rival"),T=t("ship5",2,"horizontal","rival"),N=t("ship6",2,"horizontal","rival"),q=t("ship7",2,"horizontal","rival"),H=t("ship8",3,"horizontal","rival"),A=t("ship9",3,"horizontal","rival"),w=t("ship10",4,"horizontal","rival");let I=a(),k=a();console.log(I),console.log(k),k.placeShip(e(),l(),m,n()),k.placeShip(e(),l(),b,n()),k.placeShip(e(),l(),f,n()),k.placeShip(e(),l(),g,n()),k.placeShip(e(),l(),y,n()),k.placeShip(e(),l(),v,n()),k.placeShip(e(),l(),S,n()),k.placeShip(e(),l(),z,n()),k.placeShip(e(),l(),E,n()),k.placeShip(e(),l(),_,n()),I.placeShip(0,0,x,"horizontal"),I.placeShip(0,3,L,"horizontal"),I.placeShip(0,6,C,"horizontal"),I.placeShip(0,9,M,"horizontal"),I.placeShip(2,1,T,"horizontal"),I.placeShip(2,7,N,"horizontal"),I.placeShip(3,4,q,"horizontal"),I.placeShip(6,1,H,"horizontal"),I.placeShip(6,6,A,"horizontal"),I.placeShip(8,3,w,"horizontal");let B=o("Player"),D=o("Bot");console.log(B);const $={turn:B.name};document.querySelectorAll(".battle-cell-content__rival").forEach(((t,n)=>{t.addEventListener("click",(()=>function(t,n,a,o,r,i,c,s,d){if(!a)return;if(o.turn===d.name)return;if("。"===t.innerHTML)return;const h=document.getElementById("hit-count");h.innerHTML=`You hit: ${r.hitCount()} AI hit: ${i.hitCount()}`;const p=document.querySelectorAll(".battle-cell-content__rival"),m=document.querySelector(".result");c||(t.innerHTML="。",r.receiveAttack(p[n].dataset.x,p[n].dataset.y),r.isAllShipSink()?(m.innerHTML="You win",h.innerHTML=`You hit: ${r.hitCount()} AI hit: ${i.hitCount()}`,c=!0,document.getElementById("start-btn").innerHTML="Restart",document.getElementById("start-btn").onclick=()=>{window.location.reload()}):(o.turn=d.name,u(e(),l(),i,o,s,r)))}(t,n,p,$,k,I,!1,B,D)))}));const Y=document.querySelectorAll(".ship");for(let t=0;t<Y.length;t++)Y[t].addEventListener("click",(t=>r(t,I,p))),Y[t].addEventListener("dragstart",(t=>i(t,p))),Y[t].addEventListener("dragend",(t=>s(t,p)));const j=document.querySelectorAll(".battlefield-cell");for(let t=0;t<j.length;t++)j[t].addEventListener("dragover",(t=>c(t,p))),j[t].addEventListener("drop",(t=>d(t,I,p)));document.getElementById("start-btn").onclick=()=>{p=!0}}();