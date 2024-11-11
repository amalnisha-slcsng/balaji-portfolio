function toggleMenu() {
  const menuLinks = document.querySelector(".menu-links");
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  const overlay = document.querySelector(".menu-overlay");

  menuLinks.classList.toggle("open");
  hamburgerIcon.classList.toggle("open");
  overlay.classList.toggle("open");
}
