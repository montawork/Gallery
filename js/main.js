const current = document.querySelector('.main-img img');
const images = Array.from(document.querySelectorAll('.imgs img'));
const opacity = 0.6;

// Set Opacity To First Image
images[0].style.opacity = opacity;

images.forEach((img) => {
  img.addEventListener('click', imgsClick);
});

function imgsClick(e) {
  // Reset images Opacity
  images.forEach((img) => (img.style.opacity = 1));
  // Change Current Image To src of Clicked Image
  current.src = e.target.src;
  // Add Fade in Animation
  current.classList.add('fade-in');
  // Remove fade in class
  setTimeout(() => {
    current.classList.remove('fade-in');
  }, 500);
  // Change opacity
  e.target.style.opacity = opacity;
}
