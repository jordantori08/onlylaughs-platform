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

