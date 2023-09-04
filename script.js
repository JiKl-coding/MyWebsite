const toggleButton = document.getElementById("hamburger");
const navbarLinks = document.getElementById("hamburger-menu");

toggleButton.addEventListener('click', (e) => {
  e.preventDefault();
  navbarLinks.classList.toggle('active');
});