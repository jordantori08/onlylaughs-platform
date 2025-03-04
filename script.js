// Toggle side navigation (genie effect)
function toggleNav() {
  const sideNav = document.getElementById("mySidenav");
  const content = document.getElementById("mainContent");

  // Open or close the side navigation
  if (sideNav.classList.contains("open")) {
    sideNav.classList.remove("open");
    content.classList.remove("shift");
  } else {
    sideNav.classList.add("open");
    content.classList.add("shift");
  }
}
 javascript
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);
