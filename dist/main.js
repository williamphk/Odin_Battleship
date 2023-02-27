(()=>{"use strict";const l=(l,t,e,n)=>{if(t>4||t<1)throw new Error("Wrong Length");return{shipName:l,shipLength:t,direction:e,group:n,array:[...Array(t)],hit(l){if(l>=this.array.shipLength||l<0)throw new Error("Wrong Position");this.array[l]="hit"},isSink(){return this.array.every((l=>"hit"===l))}}},t=()=>Math.floor(10*Math.random()),e=()=>Math.floor(10*Math.random()),n=()=>{let l=Math.floor(2*Math.random());return 0===l?"horizontal":1===l?"vertical":void 0},i=()=>({board:[[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null]],placeShip(l,n,i,r){let a=!0;if("horizontal"===r){for(let t=0;t<i.shipLength;t++)null===this.board[l][n+t]&&void 0!==this.board[l][n+t]||(a=!1);if(a){for(let t=0;t<i.shipLength;t++)this.board[l][n+t]=i;this.board[l][n]=i}else a||this.placeShip(t(),e(),i,r)}else if("vertical"===r){for(let t=0;t<i.shipLength;t++)(this.board[l+t]?.[n]||void 0===this.board[l+t]?.[n])&&(a=!1);if(a){for(let t=0;t<i.shipLength;t++)this.board[l+t][n]=i;this.board[l][n]=i}else a||this.placeShip(t(),e(),i,r)}},removeShip(l,t,e,n){if("horizontal"===n)for(let n=0;n<e.shipLength;n++)this.board[l][t+n]=null;else if("vertical"===n)for(let n=0;n<e.shipLength;n++)this.board[l+n][t]=null},receiveAttack(l,t){"ship"===this.board[l][t]||"object"==typeof this.board[l][t]&&null!=this.board[l][t]?this.board[l][t]="hit":null===this.board[l][t]&&(this.board[l][t]="missed")},isMiss(l,t){return"missed"===this.board[l][t]},isHit(l,t){return"hit"===this.board[l][t]},isAllShipSink(){return!this.board.some((l=>l.some((l=>"object"==typeof l&&null!==l||"ship"===l))))},hitCount(){let l=0;for(let t=0;t<this.board.length;t++)for(let e=0;e<this.board[t].length;e++)"hit"===this.board[t][e]&&l++;return l}}),r=l=>({name:l});function a(l,t,e){if(!0===e)return;let n=Number(l.srcElement.parentElement.attributes[1].value),i=Number(l.srcElement.parentElement.attributes[2].value),r=t.board[n][i],a=Number(l.target.dataset.length),o=32*a+a-1,h=!0;if("horizontal"===r.direction){for(let l=1;l<r.shipLength;l++)(9-n+1<a||null!==t.board[n+l][i]||void 0===t.board[n+l][i])&&(h=!1);if(console.log(h),!1===h)return;l.target.style.width="32px",l.target.style.height=o+"px",t.removeShip(n,i,r,"horizontal"),t.placeShip(n,i,r,"vertical"),r.direction="vertical"}else if("vertical"===r.direction){for(let l=1;l<r.shipLength;l++)(9-i+1<a||null!==t.board[n][i+l]||void 0===t.board[n][i+l])&&(h=!1);if(console.log(h),!1===h)return;l.target.style.width=o+"px",l.target.style.height="32px",t.removeShip(n,i,r,"vertical"),t.placeShip(n,i,r,"horizontal"),r.direction="horizontal"}}function o(l,t){!0!==t&&(l.dataTransfer.setData("target",l.target.id),l.dataTransfer.setData("target-length",l.target.dataset.length),l.dataTransfer.setData("srcX",l.srcElement.parentElement.attributes[1].value),l.dataTransfer.setData("srcY",l.srcElement.parentElement.attributes[2].value),l.target.classList.add("dragging"))}function h(l,t){!0!==t&&(l.preventDefault(),l.dataTransfer.dropEffect="move")}function s(l,t){!0!==t&&l.target.classList.remove("dragging")}function u(l,t,e){if(!0===e)return;let n=l.dataTransfer.getData("target"),i=l.dataTransfer.getData("target-length"),r=Number(l.dataTransfer.getData("srcX")),a=Number(l.dataTransfer.getData("srcY")),o=Number(l.target.dataset.x),h=Number(l.target.dataset.y);if(isNaN(o)||isNaN(h))return;l.preventDefault();let s=t.board[r][a],u=!0;if("horizontal"===s.direction){for(let l=0;l<i;l++)console.log(o,h+l),console.log(t.board[o][h+l]),(9-h+1<i||null!==t.board[o][h+l]&&t.board[o][h+l]!==s||void 0===t.board[o][h+l])&&(u=!1);if(console.log(u),!1===u)return;l.target.appendChild(document.getElementById(n)),t.removeShip(r,a,s,"horizontal"),t.placeShip(o,h,s,"horizontal")}else if("vertical"===s.direction){for(let l=0;l<i;l++)(9-o+1<i||null!==t.board[o+l][h]&&t.board[o+l][h]!==s||void 0===t.board[o+l][h])&&(u=!1);if(console.log(u),!1===u)return;l.target.appendChild(document.getElementById(n)),t.removeShip(r,a,s,"vertical"),t.placeShip(o,h,s,"vertical")}}let d=!1,c=!1;const p=document.getElementById("hit-count"),g=l("ship1",1,"horizontal","self"),f=l("ship2",1,"horizontal","self"),b=l("ship3",1,"horizontal","self"),m=l("ship4",1,"horizontal","self"),v=l("ship5",2,"horizontal","self"),S=l("ship6",2,"horizontal","self"),z=l("ship7",2,"horizontal","self"),y=l("ship8",3,"horizontal","self"),L=l("ship9",3,"horizontal","self"),E=l("ship10",4,"horizontal","self");console.log(g);const M=l("ship1",1,"horizontal","rival"),T=l("ship2",1,"horizontal","rival"),H=l("ship3",1,"horizontal","rival"),A=l("ship4",1,"horizontal","rival"),I=l("ship5",2,"horizontal","rival"),k=l("ship6",2,"horizontal","rival"),w=l("ship7",2,"horizontal","rival"),C=l("ship8",3,"horizontal","rival"),N=l("ship9",3,"horizontal","rival"),x=l("ship10",4,"horizontal","rival");let D=i(),$=i();console.log(D),console.log($),$.placeShip(t(),e(),g,n()),$.placeShip(t(),e(),f,n()),$.placeShip(t(),e(),b,n()),$.placeShip(t(),e(),m,n()),$.placeShip(t(),e(),v,n()),$.placeShip(t(),e(),S,n()),$.placeShip(t(),e(),z,n()),$.placeShip(t(),e(),y,n()),$.placeShip(t(),e(),L,n()),$.placeShip(t(),e(),E,n()),D.placeShip(0,0,M,"horizontal"),D.placeShip(0,3,T,"horizontal"),D.placeShip(0,6,H,"horizontal"),D.placeShip(0,9,A,"horizontal"),D.placeShip(2,1,I,"horizontal"),D.placeShip(2,7,k,"horizontal"),D.placeShip(3,4,w,"horizontal"),D.placeShip(6,1,C,"horizontal"),D.placeShip(6,6,N,"horizontal"),D.placeShip(8,3,x,"horizontal");let B=r("Player"),q=r("AI");console.log(B);const Y=document.querySelectorAll(".battle-cell-content__rival"),_=(document.querySelectorAll(".battle-cell-content__self"),document.querySelector(".result"));Y.forEach(((l,n)=>{l.addEventListener("click",(i=>{d&&j.turn!==q.name&&"。"!==l.innerHTML&&(p.innerHTML=`You hit: ${$.hitCount()} AI hit: ${D.hitCount()}`,c||(l.innerHTML="。",$.receiveAttack(Y[n].dataset.x,Y[n].dataset.y),$.isAllShipSink()?(_.innerHTML="You win",p.innerHTML=`You hit: ${$.hitCount()} AI hit: ${D.hitCount()}`,c=!0,document.getElementById("start-btn").innerHTML="Restart",document.getElementById("start-btn").onclick=()=>{window.location.reload()}):(j.turn=q.name,P(t(),e()))))}))}));const j={turn:B.name},P=(l,n)=>{if(D.isHit(l,n)||D.isMiss(l,n))P(t(),e());else{D.receiveAttack(l,n);let t=document.querySelector(`[class$="battle-cell-content battle-cell-content__self"][data-x="${l}"][data-y="${n}"]`),e=t.innerHTML;if(D.isHit(l,n))if(console.log("x",l,"y",n),e){var i=document.createElement("div");i.style.backgroundColor="red",i.style.position="absolute",i.style.top="0",i.style.width="100%",i.style.height="100%",i.style.zIndex="10",i.innerHTML="H",t.appendChild(i),p.innerHTML=`You hit: ${$.hitCount()} AI hit: ${D.hitCount()}`}else t.style.position="relative",t.innerHTML="H",t.style.zIndex="3",t.style.backgroundColor="red";else D.isMiss(l,n)&&(t.innerHTML="M");D.isAllShipSink()?(_.innerHTML="AI win",c=!0,document.getElementById("start-btn").innerHTML="Restart",document.getElementById("start-btn").onclick=()=>{window.location.reload()}):j.turn=B.name}},R=document.querySelectorAll(".ship");for(let l=0;l<R.length;l++)R[l].addEventListener("click",(l=>a(l,D,d))),R[l].addEventListener("dragstart",(l=>o(l,d))),R[l].addEventListener("dragend",(l=>s(l,d)));const W=document.querySelectorAll(".battlefield-cell");for(let l=0;l<W.length;l++)W[l].addEventListener("dragover",(l=>h(l,d))),W[l].addEventListener("drop",(l=>u(l,D,d)));document.getElementById("start-btn").onclick=()=>{d=!0}})();