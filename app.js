const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});



const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});

function playVideo(videoId) {
  var video = document.getElementById(videoId);
  video.style.display = 'block'; 
  if (video.paused) {
      video.play();
  } else {
      video.pause();
  }
}
function openVideo(videoPage) {
  window.open(videoPage, '_blank');
}
document.addEventListener('DOMContentLoaded', function() {
  var movieListItems = document.querySelectorAll('.movie-list-item');

  movieListItems.forEach(function(item) {
      var video = item.querySelector('.movie-list-item-video');
      var timeoutId;

      item.addEventListener('mouseenter', function() {
          
          timeoutId = setTimeout(function() {
              video.play();
          }, 500); 
      });

      item.addEventListener('mouseleave', function() {
          clearTimeout(timeoutId); 
          video.pause();
          video.currentTime = 0; 
      });
  });
});