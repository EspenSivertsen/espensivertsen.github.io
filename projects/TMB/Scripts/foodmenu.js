/*
*FILENAME: foodmenu.js
*
*WRITTEN BY: André F, Andreas R, Espen S, Kim-Erling R, Marius I.S
*Created as part of a website creation project for the NTNU course IT2805 WEBTEK HØST 2016.
*
*WHEN: October / November 2016
*
*PURPOSE: Governs display of the weekly menu descriptions. Interacts with data in dishlist.
*/

var burgerDesc = document.getElementById("weeklyBurgerDesc");
var soupDesc = document.getElementById("weeklySoupDesc");
var dessertDesc = document.getElementById("weeklyDessertDesc");

burgerDesc.innerHTML = dishes[0];
soupDesc.innerHTML = dishes[1];
dessertDesc.innerHTML = dishes[2];

function displayDesc(element) {
    
    if (element.style.opacity == 0.7) {
        element.style.opacity = 0;
    }
    else {
        element.style.opacity = 0.7;
    }
}
