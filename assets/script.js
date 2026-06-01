const slides = [
  {
    "image": "slide1.jpg",
    "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
  },
  {
    "image": "slide2.jpg",
    "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
  },
  {
    "image": "slide3.jpg",
    "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
  },
  {
    "image": "slide4.png",
    "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
  }
];

// Récupère les éléments
let currentSlide = 0;
const bannerTexte = document.querySelector("#banner p");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const points = document.querySelector(".dots");
const bannerImage = document.querySelector(".banner-img");

// Boucle - Création des points de navigation
for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (i === 0) {
    dot.classList.add("dot_selected");
  }
  points.appendChild(dot);
}

// Récupère tous les points
const allDots = document.querySelectorAll(".dot");

// Fonction pour changer de slide
function changerSlide() {
  bannerImage.src = "./assets/images/slideshow/" + slides[currentSlide].image;
  bannerTexte.innerHTML = slides[currentSlide].tagLine;

  for (let i = 0; i < allDots.length; i++) {
    if (i === currentSlide) {
      allDots[i].classList.add("dot_selected");
    } else {
      allDots[i].classList.remove("dot_selected");
    }
  }
}

// Événement flèche gauche
arrowLeft.addEventListener("click", function() {
  console.log("clic gauche");
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  changerSlide();
});

// Événement flèche droite
arrowRight.addEventListener("click", function() {
  console.log("clic droit");
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  changerSlide();
});
