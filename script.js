const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const startButton = document.getElementById("startButton");
const toast = document.getElementById("toast");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
  menuToggle.textContent = mobileMenu.classList.contains("open") ? "×" : "☰";
});

document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    menuToggle.textContent = "☰";
  });
});

startButton.addEventListener("click", () => {
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
});

window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  header.style.boxShadow = window.scrollY > 20
    ? "0 10px 35px rgba(20,30,25,.06)"
    : "none";
});

const reveal = document.querySelectorAll(
  ".intro-title,.intro-copy,.why-content,.journey-card,.analysis-copy,.analysis-mockup,.products-top,.product-feature,.product-row article,.hair-content,.progress-copy,.dashboard"
);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

reveal.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(24px)";
  el.style.transition = "opacity .8s ease, transform .8s ease";
  observer.observe(el);
});
