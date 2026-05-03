// ── Password gate ─────────────────────────────────────────────────────
const CORRECT = "SYDCAG2026";

function checkPassword() {
  const val = document.getElementById("pw-input").value.trim();
  const err = document.getElementById("pw-error");
  if (val === CORRECT) {
    const gate = document.getElementById("gate");
    gate.classList.add("gate-out");
    setTimeout(() => {
      gate.style.display = "none";
      const site = document.getElementById("site");
      site.style.display = "block";
      // Trigger hero animation
      setTimeout(() => {
        document.querySelector(".hero-inner").style.animationPlayState = "running";
      }, 50);
      // Start scroll observer
      initReveal();
    }, 500);
  } else {
    err.style.display = "block";
    document.getElementById("pw-input").value = "";
    document.getElementById("pw-input").focus();
    // Shake animation
    const wrap = document.querySelector(".gate-field-wrap");
    wrap.style.animation = "none";
    wrap.offsetHeight; // reflow
    wrap.style.animation = "shake 0.4s ease";
  }
}

// Allow Enter key on password field
document.getElementById("pw-input").addEventListener("keydown", function(e) {
  if (e.key === "Enter") checkPassword();
});

// ── Nav mobile toggle ─────────────────────────────────────────────────
function toggleNav() {
  document.getElementById("nav-mobile").classList.toggle("open");
}

// ── Sticky nav style on scroll ────────────────────────────────────────
window.addEventListener("scroll", function() {
  const nav = document.getElementById("nav");
  if (nav) {
    if (window.scrollY > 80) {
      nav.style.borderBottomColor = "#2980B9";
    } else {
      nav.style.borderBottomColor = "#1B4F72";
    }
  }
});

// ── Scroll reveal ─────────────────────────────────────────────────────
function initReveal() {
  const els = document.querySelectorAll(
    ".section-label, .section-title, .section-intro, " +
    ".pillar, .stat-card, .evidence-note, " +
    ".doc-card, .dinner-date-block, .dinner-detail, " +
    ".form-wrap, .prose p"
  );
  els.forEach((el, i) => {
    el.classList.add("reveal");
    el.style.transitionDelay = (i % 4) * 60 + "ms";
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => observer.observe(el));
}

// ── Form submission ───────────────────────────────────────────────────
const form = document.getElementById("input-form");
if (form) {
  form.addEventListener("submit", async function(e) {
    e.preventDefault();
    const btn = document.getElementById("submit-btn");
    const successEl = document.getElementById("form-success");
    const errorEl = document.getElementById("form-error");

    btn.disabled = true;
    btn.textContent = "Sending…";

    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xyzpbkqr", {
        method: "POST",
        body: data,
        headers: { "Accept": "application/json" }
      });

      if (res.ok) {
        form.style.display = "none";
        successEl.style.display = "block";
        // Scroll to success
        successEl.scrollIntoView({ behavior: "smooth", block: "center" });
      } else {
        throw new Error("Server error");
      }
    } catch (err) {
      btn.disabled = false;
      btn.textContent = "Submit your input →";
      errorEl.style.display = "block";
    }
  });
}

// ── Shake keyframe injection ──────────────────────────────────────────
const shakeStyle = document.createElement("style");
shakeStyle.textContent = `
  @keyframes shake {
    0%,100% { transform: translateX(0); }
    20% { transform: translateX(-8px); }
    40% { transform: translateX(8px); }
    60% { transform: translateX(-5px); }
    80% { transform: translateX(5px); }
  }
`;
document.head.appendChild(shakeStyle);
