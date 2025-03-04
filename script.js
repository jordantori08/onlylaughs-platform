// Toggle sidebar visibility (hide/show)
function toggleSidebar() {
  const sideNav = document.getElementById("mySidenav");
  const content = document.getElementById("mainContent");

  // Toggle the 'hidden' class to hide/show the side nav
  sideNav.classList.toggle("hidden");
  
  // Adjust content margin when the sidebar is hidden
  content.classList.toggle("shift");
}

