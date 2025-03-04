// Toggle sidebar visibility (hide/show)
function toggleSidebar() {
  const sideNav = document.getElementById("mySidenav");
  const content = document.getElementById("mainContent");

  // Toggle the 'hidden' class to hide/show the side nav
  sideNav.classList.toggle("hidden");
  
  // Adjust content margin when the sidebar is hidden
  content.classList.toggle("shift");
}
// Get the category from the URL
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');

// Update the category header on the secondary page
if (category) {
  const categoryHeader = document.getElementById('category-header');
  categoryHeader.textContent = category.replace(/-/g, ' ').toUpperCase(); // Format the category text
}

