var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
	showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var div = document.getElementById("leftbox");
  var slides = document.getElementsByClassName("slideshow");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  div.style.webkitTransition = 'opacity 0s';
  if (slideIndex === 1) {div.style.backgroundImage = "url('img/banner1.jpg')";}
  if (slideIndex === 2) {div.style.backgroundImage = "url('img/banner2.jpg')";}
  if (slideIndex === 3) {div.style.backgroundImage = "url('img/banner3.jpg')";}
  dots[slideIndex-1].className += " active";
}