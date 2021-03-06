const current = document.querySelector("#current");
const imgs = document.querySelector(".imgs");
const img = document.querySelectorAll(".imgs img");
const opacity = 0.6;

// Set first img opacity
img[0].style.opacity = opacity;

imgs.addEventListener("click", imgClick);

function imgClick(e) {
  // Reset opacity
  img.forEach(img => (img.style.opacity = 1));

  // Change current img to clicked img
  current.src = e.target.src;

  // Add fade-in class
  current.classList.add("fade-in");

  // Remove fade-in class after 0.5s
  setTimeout(() => {
    current.classList.remove("fade-in");
  }, 500);

  // Change opacity to opacity var
  e.target.style.opacity = opacity;
}
