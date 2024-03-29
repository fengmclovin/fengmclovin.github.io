// animatedCanvas.js

const canvas = document.getElementById("q");
const s = window.screen;
const w = (canvas.width = s.width);
const h = (canvas.height = s.height);
const ctx = canvas.getContext("2d");

const p = Array(Math.floor(w / 10) + 1).fill(0);

const random = (items) => items[Math.floor(Math.random() * items.length)];

const hex = "023456789ABCDEFGHKLMNOPQRSTUVWXYZ*****".split("");

setInterval(() => {
    ctx.fillStyle = "rgba(0,0,0,.05)";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "#0f0";
    p.map((v, i) => {
        ctx.fillText(random(hex), i * 10, v);
        p[i] = v >= h || v > 50 + 10000 * Math.random() ? 0 : v + 10;
    });
}, 1000 / 30);
