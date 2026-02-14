/* ---------------- PASSWORD CHECK ---------------- */
function checkPassword() {
  const input = document.getElementById("password").value.trim().toLowerCase();
  const error = document.getElementById("error");

  const validPasswords = [
    "shrily","angella","shoharji","rits","ritu","ana","anu","sagnika","jabeda","pallabi"
  ];

  if (validPasswords.includes(input)) {
    createFloatingHearts();
    setTimeout(() => {
      window.location.href = "reasons.html";
    }, 1500);
  } else {
    error.innerText = "Hmm that's not what I call you💔 Try again!";
  }
}

/* ---------------- YES FLOW ---------------- */
function sayYes() {

  const audio = document.getElementById("bgMusic");

  // Start music after user click (allowed by browser)
  audio.play().then(() => {
    console.log("Music started successfully");
  }).catch((error) => {
    console.log("Autoplay blocked:", error);
  });

  // Hide proposal section
  document.getElementById("proposalSection").classList.add("hidden");

  // Show yay section
  document.getElementById("yaySection").classList.remove("hidden");

  // Start confetti
  startConfetti();

  // After 2 seconds move to final section
  setTimeout(() => {
    document.getElementById("yaySection").classList.add("hidden");
    document.getElementById("finalSection").classList.remove("hidden");
    startLoveMeter();
  }, 2000);
    }

    // Smooth Love Meter
    let love = 0;
    const loveFill = document.getElementById("loveFill");

    const interval = setInterval(() => {
      if (love >= 100) {
        clearInterval(interval);
      } else {
        love++;
        loveFill.style.width = love + "%";
      }
    }, 20);

  }, 2000);
}

/* ---------------- SECRET ---------------- */
document.addEventListener("DOMContentLoaded", () => {
  const secretBtn = document.getElementById("secretBtn");
  if (secretBtn) {
    secretBtn.addEventListener("click", () => {
      document.getElementById("secretMessage").classList.remove("hidden");
      document.getElementById("signature").classList.remove("hidden");
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
