<<<<<<< HEAD
const toggleButton = document.getElementById("hamburger");
const navbarLinks = document.getElementById("hamburger-menu");

toggleButton.addEventListener('click', (e) => {
  e.preventDefault();
  navbarLinks.classList.toggle('active');
});



function getCurrentPageName() {
  const url = window.location.href;
  
  const urlParts = url.split("/");
  
  let currentPage = urlParts[urlParts.length - 1];
  
  if (currentPage.includes("?")) {
    currentPage = currentPage.split("?")[0];
  }
  
  if (currentPage.includes(".")) {
    currentPage = currentPage.split(".")[0];
  }
  
  return currentPage;
}

const currentPageName = getCurrentPageName();

const stackImg1 = document.getElementsByClassName("square-image")[0];
const stackImg2 = document.getElementsByClassName("square-image")[1];

let imageLinks = []

if (currentPageName === "index%20eng" || currentPageName === "index") {
  imageLinks = [
    "./assets/img/logos/python.png",
    "./assets/img/logos/js.png",
    "./assets/img/logos/html5.png",
    "./assets/img/logos/css.png",
    /*"./assets/img/logos/react.png",*/
    /*"./assets/img/logos/angular.png",*/
    /*./assets/img/logos/vue.png",*/
    "./assets/img/logos/vba.png",
    "./assets/img/logos/postgresql.png",
    "./assets/img/logos/progress.png",
  ];
}
else {
  imageLinks = [
    "../../assets/img/logos/python.png",
    "../../assets/img/logos/js.png",
    "../../assets/img/logos/html5.png",
    "../../assets/img/logos/css.png",
    /*"../../assets/img/logos/react.png",*/
    /*"../../assets/img/logos/angular.png",*/
    /*"../../assets/img/logos/vue.png",*/
    "../../assets/img/logos/vba.png",
    "../../assets/img/logos/postgresql.png",
    "../../assets/img/logos/progress.png",
  ];
}

let currentIndex = 0;

function changeImage() {
  stackImg1.src = imageLinks[currentIndex];
  currentIndex = (currentIndex + 1) % imageLinks.length;
  setTimeout(function () {
    stackImg2.src = imageLinks[currentIndex];
    currentIndex = (currentIndex + 1) % imageLinks.length;
  }, 1000);
}

=======
const toggleButton = document.getElementById("hamburger");
const navbarLinks = document.getElementById("hamburger-menu");

toggleButton.addEventListener('click', (e) => {
  e.preventDefault();
  navbarLinks.classList.toggle('active');
});



function getCurrentPageName() {
  const url = window.location.href;
  
  const urlParts = url.split("/");
  
  let currentPage = urlParts[urlParts.length - 1];
  
  if (currentPage.includes("?")) {
    currentPage = currentPage.split("?")[0];
  }
  
  if (currentPage.includes(".")) {
    currentPage = currentPage.split(".")[0];
  }
  
  return currentPage;
}

const currentPageName = getCurrentPageName();

const stackImg1 = document.getElementsByClassName("square-image")[0];
const stackImg2 = document.getElementsByClassName("square-image")[1];

let imageLinks = []

if (currentPageName === "index%20eng" || currentPageName === "index") {
  imageLinks = [
    "./assets/img/logos/python.png",
    "./assets/img/logos/js.png",
    "./assets/img/logos/html5.png",
    "./assets/img/logos/css.png",
    /*"./assets/img/logos/react.png",*/
    /*"./assets/img/logos/angular.png",*/
    /*./assets/img/logos/vue.png",*/
    "./assets/img/logos/vba.png",
    "./assets/img/logos/postgresql.png",
    "./assets/img/logos/progress.png",
  ];
}
else {
  imageLinks = [
    "../../assets/img/logos/python.png",
    "../../assets/img/logos/js.png",
    "../../assets/img/logos/html5.png",
    "../../assets/img/logos/css.png",
    /*"../../assets/img/logos/react.png",*/
    /*"../../assets/img/logos/angular.png",*/
    /*"../../assets/img/logos/vue.png",*/
    "../../assets/img/logos/vba.png",
    "../../assets/img/logos/postgresql.png",
    "../../assets/img/logos/progress.png",
  ];
}

let currentIndex = 0;

function changeImage() {
  stackImg1.src = imageLinks[currentIndex];
  currentIndex = (currentIndex + 1) % imageLinks.length;
  setTimeout(function () {
    stackImg2.src = imageLinks[currentIndex];
    currentIndex = (currentIndex + 1) % imageLinks.length;
  }, 1000);
}

>>>>>>> 4232b5f6f24de7ffab065c41597288b7096c6c20
const intervalId = setInterval(changeImage, 2000);