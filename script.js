// Shrink or hide the navbar on scroll
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // If scrolling down, hide the navbar or shrink it
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-70px"; // Hide the navbar by moving it up
  } else {
    navbar.style.top = "0"; // Reset navbar position when scrolling up
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative scroll values
});
