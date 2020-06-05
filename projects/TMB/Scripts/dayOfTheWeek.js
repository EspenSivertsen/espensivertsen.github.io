/*
*FILENAME: dayOfTheWeek.js
*
*WRITTEN BY: André F, Andreas R, Espen S, Kim-Erling R, Marius I.S
*Created as part of a website creation project for the NTNU course IT2805 WEBTEK HØST 2016.
*
*WHEN: October / November 2016
*
*PURPOSE:A simple scrift for finding and dispaying the datetime, then telling the user if the bar is open or not.
*Uses the openingHoursInfo.js file for its array. Like the other edit scripts that hold data separately for easy editing, load that before this in the script order.
* Only works for correct browser time, if same timezone as tmb, otherwise we would need a servertime extract - something nonlocal.
*/


//Get the "Opening hours" element / div
var openingHoursP = document.getElementById("openingHoursID");
var openingHoursAdd = document.getElementById("openingHoursAddID");  
//- element at the bottom of the opening hours element


		 
var date = new Date();
//our list is off by one compared to how the date object lists its days sunday is 0, monday is 1. Thus ..
var nr = date.getDay()-1;
if(nr < 0){
	nr = 6; //sunday is last in the array atm
}
var yest = nr-1;
if(yest < 0){
	yest = 6;
}
var time = date.getHours() + ":" + date.getMinutes();

day = hoursArray[nr];

var closing = day["close"];
var opening = day["open"];

if(closing < opening){
	closing = "23:59";
}
//Decide and set current open/closed state of shop
if(time > opening && time < closing || hoursArray[yest]["close"] < hoursArray[yest]["open"] && time < hoursArray[yest]["close"]){
	openingHoursAdd.innerHTML = "<p>Nå - Åpent</p>";
}
else{
	openingHoursAdd.innerHTML = "<p>Nå - Stengt</p>";
}

//Display opening hours
for (i = 0; i < hoursArray.length; i++) {
	if(hoursArray[i].open === hoursArray[i].close){ // Set closed if the same time
		openingHoursP.innerHTML += "" + hoursArray[i].day+ "<span> </span>" +  "Stengt"  + "<br>" ;
	}else { //Populate the opening hours data otherwise
		openingHoursP.innerHTML += "" + hoursArray[i].day+ "<span> </span>" + hoursArray[i].open + "<span> : </span>" + hoursArray[i].close + "<br>" ;		
	}
}
