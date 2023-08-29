// Quering the DOM
const imgArea = document.querySelector('.img-area');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Initializing Variables
let x = 0; // Degree of images

// Adding Event Listeners
prevBtn.addEventListener('click', () => {
  x -= 45;
  console.log('prevBtn Pressed!', x);
  imgArea.style.transform = `rotateX(-15deg) rotateY(${x}deg)`; // Rotate the images
});

nextBtn.addEventListener('click', () => {
  x += 45;
  console.log('nextBtn Pressed!', x);
  imgArea.style.transform = `rotateX(-15deg) rotateY(${x}deg)`; // Rotate the images
});