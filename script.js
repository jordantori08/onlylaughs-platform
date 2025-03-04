// Get the category from the URL
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');

// Update the category header on the secondary page
if (category) {
  const categoryHeader = document.getElementById('category-header');
  categoryHeader.textContent = category.replace(/-/g, ' ').toUpperCase(); // Format the category text
}

}
