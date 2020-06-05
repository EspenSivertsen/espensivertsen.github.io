/*
*FILENAME: dishList.js
*
*WRITTEN BY: André F, Andreas R, Espen S, Kim-Erling R, Marius I.S
*Created as part of a website creation project for the NTNU course IT2805 WEBTEK HØST 2016.
*
*WHEN: October / November 2016
*
*PURPOSE: See below/next
*/

//This file contains the weekly dishes(content) in the food menu.
//This is where you change stuff if you are changing the dishes that are available.
//You can have as many or as few dishes as you like in the list, but the instructions are based on a maximun of 3(burger, soup, dessert}.
//  If you want to add more than this, simply copy one of the lines and paste it as the bottom(remeber the commas at the end! no comma after the laste one)
// The Images have the dimensions: 500*800px

/*
=========================================================================
=======================INSTRUCTIONS======================================
=========================================================================


=======================STRUCTURE=========================================
Each line is scructured as follows:

{img: "<path>/<name>.<type>", name: "<name of the dish>", desc: "<The accompanying description of the dish>"}

Each such line is one of the elements in the food display menu. Change stuff here, and that element changes as well.
"<>" is just to show where you can edit, in other words; this is a thing: <thing>.
If in doubt about how to edit, just see how the other elements are, and follow the trend.

EXPLANATIONS:
<path>: Put all your images in the "Images" folder and <path> here will always be Images.
<name>.<type>: This is the name and type of the image file for eksample: burger.png, or burger.jpg.

======================HOW TO EDIT STUFF=================================
Lets say we have one of the weekly food elements like this:
{img: "Images/burger.png", name: "Pulled pork burger", desc: "A burger made by pulling pork around the yard."}


CHANGE IMAGE:===============================================================================================================================================
// The Images have the dimensions: 500*800px
So you want to change to an image you just uploaded in to the Images folder, named newBurgerImage.png. (or another already existing image in the same folder)

1. Find the line with the element you want to edit.
    - In our example this is the line with name: "Pulled pork burger".
2. Change the <name>.<type> part of the img: "Images/<name>.<type>" to match the name and type of the image you want to change to.
    - In our example we will change "Images/burger.png" to  "Images/newBurgerImage.png"
3. Save the file and upload to server, and that's it! Your new image should now appear on the site replacing the old one.
    - In our example the whole line now looks like: 
      {img: "Images/newBurgerImage.png", name: "Pulled pork burger", desc: "A burger made by pulling pork around the yard."}

CANGE NAME:===============================================================================================================================================
So you want to change the name of one of the food elements(probably in the process of changing the weekly menu).

1. Find the line with the element you want to edit.
2. Change the <name of the dish> part of the name: "<name of the dish>" to what you want the new name to be.
3. Save the file and upload to server, and that's it! Your new name should now appear on the site replacing the old one.

CANGE DESCRIPTION:===============================================================================================================================================
So you want to change the description of one of the beer elements(probably in the process of changing the beers that are on tap, or to fix spelling errors).

1. Find the line with the element you want to edit.
2. Change the <The accompanying description of the dish> part of the desc: "<The accompanying description of the dish>" to what you want the new description to be.
3. Save the file and upload to server, and that's it! Your new description should now appear on the site replacing the old one.

REMOVE AN ELEMENT:===============================================================================================================================================
So preveously you had 3 weekly dishes, but now you will have 2.

1. Find the line with the elements you want to remove.
2. at the very start of the lines add // (just two forward slashes) in front of the lines.
    - so if you want to remove this element from the list:
        {img: "Images/burger.png", name: "Pulled pork burger", desc: "A burger made by pulling pork around the yard."}
      change that line to this:
        //{img: "Images/burger.png", name: "Pulled pork burger", desc: "A burger made by pulling pork around the yard."}
3. Save the file and upload to server, and that's it! Your dish should now have been removed on the site.

Do not remove the line in another way unless you know what you are doing.

ADD AN ELEMENT:===============================================================================================================================================
Adding a new element is the reverse of removal.
So preveously you had 2 weekly dishes, but now you will have 3.

1. Find a line that has been removed (has // in front of it).
2. Remove the slashes(//)
    - so you find the line:
        //{img: "Images/burger.png", name: "Pulled pork burger", desc: "A burger made by pulling pork around the yard."}
      change that line to this:
        {img: "Images/burger.png", name: "Pulled pork burger", desc: "A burger made by pulling pork around the yard."}
3. Edit it the way you want, save the file and upload to server, and that's it! Your new dish should now be visible on the site.



*/
dishes = [
    "<b>Gorgonzola Burger</b>" +
    "<br>" +
    "150gr burger av storfe med smeltet Gorgonzola, karamelliserte pærer, sitronmajo og Feldsalat. Serveres med cowboypoteter og hvitløksdressing." +
    "<br>" +
    "219,-",


    "<b> Kremet spinat suppe</b>" +
    "<br>" + 
    "Med krutonger, serveres med hjemmelaget brød og smør" +
    "<br>" +
    "109,-",


    "<b>Irsih Coffee S'mores</b>" +
    "<br>" +
    "Hjemmelaget kaffemarshmallow, whiskeysaus og fløtekrem. Serveres med hjemmelaget ladyfingers." +
    "<br>" +
    "89,-"
];
