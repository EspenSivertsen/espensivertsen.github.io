$(document).ready(function() {
	var timer;
	var timesRun = 0;
	var canRefill = false;
	var canDrink = true;

    $("#drink").click (function() {
    	if (canDrink) {
	        $("#coffeeStatic").attr("src", "static/Images/coffeedrink.gif");
	        canDrink = false;
	        timesRun = 0;
	       	DrinkTimer();
    	}
    	if (canRefill) {
       		$("#coffeeStatic").attr("src", "static/Images/coffeerefill.gif");
       		canRefill = false;
       		timesRun = 0;
       		RefillTimer();
    	}  	 
    });

    function DrinkTimer () {
        timer = setInterval(function () {
		timesRun += 1;
		if (timesRun === 6) {
			clearInterval(timer);
			canRefill = true;
			$("#drink").val("refill");
		}
		}, 650); 
    }
    function RefillTimer () {
        timer = setInterval(function () {
		timesRun += 1;
		if (timesRun === 6) {
			clearInterval(timer);
			canDrink = true;
			$("#drink").val("drink");
		}
		}, 650); 
    }      
});