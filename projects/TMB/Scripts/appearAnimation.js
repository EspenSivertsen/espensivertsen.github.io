/*
*FILENAME: appearAnimation.js
*
*WRITTEN BY: André F, Andreas R, Espen S, Kim-Erling R, Marius I.S
*Created as part of a website creation project for the NTNU course IT2805 WEBTEK HØST 2016.
*
*WHEN: October / November 2016
*
*PURPOSE: Display/hide the table reservation section
*/


var item2 = document.getElementById("formDiv");
var button2 = document.getElementById("formAnimButton");

button2.addEventListener('click', function () {
    document.getElementById("reservation").classList.toggle("hidden");
    animateOpen(item2);
}  );


function animateOpen(element) {
	//get parent element
	var parent = element.parentNode;

	//check state
	if (element.classList.contains("hidden")){
		//element starts hidden
		//element toggle display on
		element.classList.toggle("hidden");
		// get .offsetHeight
		var eHeight = element.offsetHeight;
		//toggle display off again
		element.classList.toggle("hidden");
		//sets a timer, calling the function frame on an interval of 5 ms.
		var id = setInterval(frame, 5);
		//ready variable
		var tempH = 0;
		function frame() {
			// Animation:::: gradually set temp hight to what was found
			if (tempH >= eHeight){
				// toggle display original element on
				element.classList.toggle("hidden");
				// run opacity animation too? naaah?

				// at max stop anim
				clearInterval(id);
			}else{
				tempH += 4;
			}

		} // frame
	}else {
		element.classList.toggle("hidden"); // toggle away

	}

}
