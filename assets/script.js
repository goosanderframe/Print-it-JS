const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
//Récupère les éléments
let current_slide = 0;
const bannerTexte = document.querySelector("#banner p");
const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");
const points = document.querySelector(".dots");

const bannerImage = document.querySelector(".banner-img");
//Boucle
for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
	dot.classList.add("dot")
    if(i ===0){
        dot.classList.add("dot_selected")
    }
    points.appendChild(dot)
}
//Slider
const allDots = document.querySelectorAll(".dot");
function changerSlide() {
	bannerImage.src = "./assets/images/slideshow/" + slides[current_slide].image;
	bannerTexte.innerHTML = slides[current_slide].tagLine;

	for (let i = 0; i < allDots.length; i++) {
		if (i === current_slide) {
			allDots[i].classList.add("dot_selected");
		} else {
			allDots[i].classList.remove("dot_selected");
		}
	}
}

arrow_left.addEventListener("click", function(){
    console.log("clic gauche");
    current_slide--;
	if (current_slide < 0) {
		current_slide = slides.length - 1;
	}
	changerSlide();
});

arrow_right.addEventListener("click",function(){
    console.log("clic droit");
    current_slide++;
	if (current_slide >= slides.length) {
		current_slide = 0;
	}
	changerSlide();
});


