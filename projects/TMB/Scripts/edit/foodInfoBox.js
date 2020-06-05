/*
*FILENAME: foodInfoBox.js
*
*WRITTEN BY: André F, Andreas R, Espen S, Kim-Erling R, Marius I.S
*Created as part of a website creation project for the NTNU course IT2805 WEBTEK HØST 2016.
*
*WHEN: October / November 2016
*
*PURPOSE: This file contains the text in the food info box. That is, the box on the left at the top of the page.
*/

/*
=========================================================================
=======================INSTRUCTIONS======================================
=========================================================================

To edit the text, simply edit the text inside the "". 

========================EXAMPLES==============================================
So to change the text from: 
    
    Sulten?
    Se vår mat meny!


    To this:

    Er et snøfnug unikt?
    Ja, jeg tror det!


    you change the code below to:

    "Er et snøfnug unikt?"  +  //First line of text
    "<br>"                  +  //Line break (Linjeskift)
    "Ja, jeg tror det!";        //Laste line of text


    REMEMBER: 
    Spaces within the "" matter.
    
*/

document.getElementById("food-info-text").innerHTML =
    "Sulten? "              +  //First line of text
    "<br>"                  +  //Line break (Linjeskift)
    "Se vår mat-meny!";        //Laste line of text