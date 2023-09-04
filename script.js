const toggleButton = document.getElementById("hamburger")
const navbarLinks = document.getElementById("hamburger-menu")

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})