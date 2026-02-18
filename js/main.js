document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     CURSOR GLOW
  ========================== */
  const glow = document.querySelector(".cursor-glow");
  if (glow) {
    document.addEventListener("mousemove", e => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    });
  }

  /* =========================
     MOBILE MENU
  ========================== */
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-links");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  /* =========================
     SCROLL REVEAL
  ========================== */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".bento-item, .section-header")
    .forEach(el => observer.observe(el));

});
