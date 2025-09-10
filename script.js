// Mobile menu toggle
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

// Smooth scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Typing effect
const text = "Ananya Sharma";
let i = 0;
function typingEffect() {
  if (i < text.length) {
    document.querySelector(".typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, 150);
  }
}
typingEffect();
