const overlay = document.getElementById("overlay");

const bola = document.createElement("div");
bola.className = "avatar";

bola.style.left = "100px";
bola.style.top = "100px";

bola.innerHTML = `
<img src="https://placehold.co/200x200/png">
<div class="username">Tes Overlay</div>
`;

overlay.appendChild(bola);
