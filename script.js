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
