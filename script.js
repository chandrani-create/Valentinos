/* ---------------- PASSWORD CHECK ---------------- */
function checkPassword() {
  const input = document.getElementById("password").value.trim().toLowerCase();
  const error = document.getElementById("error");

  const validPasswords = [
    "shrily","angella","shoharji","rits","ritu","ana","anu","sagnika","jabeda","pallabi"
  ];

  if (validPasswords.includes(input)) {
    createFloatingHearts();   // now this works
    setTimeout(() => {
      window.location.href = "reasons.html";
    }, 1500);
  } else {
    error.innerText = "Hmm that's not what I call you💔 Try again!";
  }
}


/* ---------------- FLOATING HEARTS FUNCTION (MISSING FIXED) ---------------- */
function createFloatingHearts() {
  const container = document.querySelector(".floating-hearts");
  if (!container) return;

  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.className = "bg-heart";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 15) + "px";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
    container.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }
}


/* ---------------- YES FLOW ---------------- */
function sayYes() {

  const audio = document.getElementById("bgMusic");

  if (audio) {
    audio.play().catch(error => {
      console.log("Autoplay blocked:", error);
    });
  }

  document.getElementById("proposalSection").classList.add("hidden");
  document.getElementById("yaySection").classList.remove("hidden");

  startConfetti();

  setTimeout(() => {
    document.getElementById("yaySection").classList.add("hidden");
    document.getElementById("finalSection").classList.remove("hidden");
    startLoveMeter();
  }, 2000);
}


/* ---------------- SECRET ---------------- */
document.addEventListener("DOMContentLoaded", () => {

  const secretBtn = document.getElementById("secretBtn");

  if (secretBtn) {
    secretBtn.addEventListener("click", () => {

      const secretMessage = document.getElementById("secretMessage");

      secretMessage.innerHTML = `
        I don't just like you.<br>
        I choose you.<br><br>
        And I will choose you,<br>
        again and again 💖
      `;

      secretMessage.classList.remove("hidden");

    });
  }

});


/* ---------------- SPARKLE CURSOR ---------------- */
document.addEventListener("mousemove", function(e) {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.style.left = e.pageX + "px";
  sparkle.style.top = e.pageY + "px";
  document.body.appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 600);
});


/* ---------------- CONFETTI ---------------- */
function startConfetti() {
  const canvas = document.getElementById("confetti");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = Array.from({length:150}).map(() => ({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    r: Math.random()*6+2,
    color: `hsl(${Math.random()*360},100%,70%)`
  }));

  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pieces.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.y += 3;
      if (p.y > canvas.height) p.y = 0;
    });
    requestAnimationFrame(draw);
  }

  draw();
}


/* ---------------- LOVE METER ---------------- */
function startLoveMeter() {

  let progress = 0;
  const loveFill = document.getElementById("loveFill");
  if (!loveFill) return;

  const interval = setInterval(() => {

    if (progress >= 100) {
      clearInterval(interval);
    } else {
      progress += 1;
      loveFill.style.width = progress + "%";
    }

  }, 25);

}
