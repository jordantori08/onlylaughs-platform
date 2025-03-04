document.getElementById('search-input').addEventListener('input', function() {
  let searchTerm = this.value.toLowerCase();
  let videos = document.querySelectorAll('.video-item p');

  videos.forEach(function(video) {
    let text = video.innerText.toLowerCase();
    if (text.includes(searchTerm)) {
      video.parentElement.style.display = 'block';
    } else {
      video.parentElement.style.display = 'none';
    }
  });
});
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
