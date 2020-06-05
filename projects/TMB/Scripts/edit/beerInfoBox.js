/*
*FILENAME: beerInfoBox.js
*
*WRITTEN BY: André F, Andreas R, Espen S, Kim-Erling R, Marius I.S
*Created as part of a website creation project for the NTNU course IT2805 WEBTEK HØST 2016.
*
*WHEN: October / November 2016
*
*PURPOSE: This file contains the text in the beer info box. That is, the box on the right at the top of the page.
*/


/*
=========================================================================
=======================INSTRUCTIONS======================================
=========================================================================

To edit the text, simply edit the text inside the "". 

========================EXAMPLES==============================================
So to change the text from: 
    
    Vi har nå <number of beers> øl på tap
    Se vår øl meny!


    To this:

    Hamstere har <number of beers> ben
    men de er også søte!


    you change the code below to:

    "Hamstere har "         +  //First line of text
    beers.length            +  //First line of text, the number of beers currently on tap.(The number of beers displayed in the beer menu)
    " ben "                 +  //First line of text
    "<br>"                  +  //Line break (Linjeskift)
    "men de er også søte!";    //Laste line of text

    REMEMBER: 
    Spaces within the "" matter.
    
*/

document.getElementById("beer-info-text").innerHTML =
    "Vi har nå "    +  //First line of text
    beers.length    +  //First line of text, the number of beers currently on tap.(The number of beers displayed in the beer menu)
    " øl på tapp "   +  //First line of text
    "<br>"          +  //Line break (Linjeskift)
    "Se vår øl-meny!"; //Laste line of text

