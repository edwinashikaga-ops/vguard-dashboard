@tailwind base;
@tailwind components;
@tailwind utilities;

/* ===== ROOT VARIABLES ===== */
:root {
  --navy: #020617;
  --card: #070f1f;
  --primary: #00e5ff;
  --accent: #7b2fff;
  --gold: #ffd700;
}

/* ===== BASE RESET ===== */
html,
body {
  height: 100%;
}

body {
  background-color: var(--navy);
  color: white;
  font-family: var(--font-syne), sans-serif;
}

/* ===== CUSTOM UTILITIES ===== */

/* Grid background (seperti di design kamu) */
.bg-grid {
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.05) 1px,
      transparent 1px
    ),
    linear-gradient(
      to right,
      rgba(255, 255, 255, 0.05) 1px,
      transparent 1px
    );
  background-size: 40px 40px;
}

/* Glow cyan effect */
.glow-cyan {
  box-shadow: 0 0 20px rgba(0, 229, 255, 0.4);
}

/* Card style */
.card {
  background-color: var(--card);
  border: 1px solid rgba(0, 229, 255, 0.1);
  border-radius: 12px;
}

/* Gradient text */
.text-gradient {
  background: linear-gradient(90deg, #00e5ff, #7b2fff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Button primary */
.btn-primary {
  background: linear-gradient(90deg, #00e5ff, #7b2fff);
  color: black;
  font-weight: 600;
  padding: 10px 18px;
  border-radius: 8px;
  transition: 0.3s;
}

.btn-primary:hover {
  opacity: 0.85;
}

/* Smooth scroll */
html {
  scroll-behavior: smooth;
}
