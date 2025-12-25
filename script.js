let flippedCount = 0;

function nextScreen(n) {
  document.getElementById("screen" + n).classList.remove("active");
  document.getElementById("screen" + (n + 1)).classList.add("active");
}

function flip(card) {
  if (card.classList.contains("flipped")) return;
  card.classList.add("flipped");
  flippedCount++;
  if (flippedCount === 5) {
    setTimeout(() => nextScreen(3), 1000);
  }
}

function showMessage() {
  document.getElementById("imageView").style.display = "none";
  document.getElementById("messageView").style.display = "block";
}

function showImage() {
  document.getElementById("messageView").style.display = "none";
  document.getElementById("imageView").style.display = "block";
}

/* ❄️ SNOW */
const snowContainer = document.querySelector(".snow-container");
setInterval(() => {
  const snow = document.createElement("div");
  snow.className = "snowflake";
  snow.innerHTML = "❄";
  snow.style.left = Math.random() * window.innerWidth + "px";
  snow.style.animationDuration = 5 + Math.random() * 5 + "s";
  snowContainer.appendChild(snow);
  setTimeout(() => snow.remove(), 10000);
}, 300);
