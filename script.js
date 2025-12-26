let meterDone = false;
let revealedCount = 0;
let musicStarted = false;

/* ✅ START MUSIC ON FIRST USER INTERACTION */
function startMusic() {
  if (musicStarted) return;
  const music = document.getElementById("bgMusic");
  music.volume = 0.6;
  music.play().catch(() => {});
  musicStarted = true;
}

function next(n) {
  document.getElementById("screen" + n).classList.remove("active");
  document.getElementById("screen" + (n + 1)).classList.add("active");

  if (n === 1) startMeter();
  if (n === 4) typeText();
  if (n === 5) boostFalling();
}

/* PAGE 2 */
function startMeter() {
  let p = 0;
  const fill = document.getElementById("fill");
  const percent = document.getElementById("percent");
  const warn = document.getElementById("warn");

  warn.classList.remove("show");

  const interval = setInterval(() => {
    p++;
    fill.style.width = p + "%";
    percent.innerText = p + "%";

    if (p >= 120) {
      clearInterval(interval);
      meterDone = true;
      setTimeout(() => warn.classList.add("show"), 300);
    }
  }, 25);
}

function goFromWarning() {
  if (!meterDone) return;
  next(2);
}

/* PAGE 3 */
function reveal(el, text) {
  if (el.dataset.done) return;
  el.innerText = text;
  el.dataset.done = true;
  revealedCount++;
}

function goFromHearts() {
  if (revealedCount < 5) return;
  next(3);
}

/* PAGE 4 */
function openEnvelope(el) {
  el.classList.add("open");
  setTimeout(() => next(4), 1000);
}

/* PAGE 5 */
function typeText() {
  const msg = `I just wanted to tell you something…
You really are special in a way that’s hard to explain.
I just wanted to tell you something… that i made some small tiny mistakes, First, about the permission letter — I told you I’d write it for the HOD, but I didn’t end up giving it.  I’m sorry for doing that.
Second, the other day when I commented about how much you eat, it came out wrong. I didn’t mean to sound rude in any way If it made you uncomfortable, I’m truly sorry.
And lastly, I know this letter itself is coming late, this will not happen again it's my pinky promise... please accept my little appolpgy`;

  const el = document.getElementById("typing");
  const btn = document.getElementById("finalBtn");

  el.innerText = "";
  btn.classList.remove("show");

  let i = 0;
  const timer = setInterval(() => {
    el.innerText += msg[i++];
    if (i >= msg.length) {
      clearInterval(timer);
      setTimeout(() => btn.classList.add("show"), 400);
    }
  }, 28);
}

/* FALLING */
function createFall() {
  const span = document.createElement("span");
  span.innerText = Math.random() > 0.5 ? "💖" : "✨";
  span.style.left = Math.random() * 100 + "vw";
  span.style.animationDuration = 3 + Math.random() * 3 + "s";
  document.getElementById("falling").appendChild(span);
  setTimeout(() => span.remove(), 6000);
}
setInterval(createFall, 500);

function boostFalling() {
  for (let i = 0; i < 20; i++) {
    setTimeout(createFall, i * 150);
  }
}
