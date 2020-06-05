var timer;
var timesRun = 0;

function drinkCoffee() {
	var frames = document.getElementById("animation").children;
	var frameCount = frames.length;
	var i = 0;

	timer = setInterval(function () {
		timesRun += 1;
		if (timesRun === 7) {
			clearInterval(timer);
		}
		frames[i % frameCount].style.display = "none";
	    frames[++i % frameCount].style.display = "block";
	}, 650);
}

