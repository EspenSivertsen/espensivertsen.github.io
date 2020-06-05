/*
*FILENAME: beerList.js
*
*WRITTEN BY: André F, Andreas R, Espen S, Kim-Erling R, Marius I.S
*Created as part of a website creation project for the NTNU course IT2805 WEBTEK HØST 2016.
*
*WHEN: October / November 2016
*
*PURPOSE: See below/next.
*/

//This file contains the beers(content) in the beer menu.
//This is where you change stuff if you are changing the beers that are available on tap
//You can have as many or as few beers as you like in the list, but the instructions are based on a maximun of 12.
//  If you want to add more than this, simply copy one of the lines and paste it as the bottom(remeber the commas at the end! no comma after the laste one)

/*
=========================================================================
=======================INSTRUCTIONS======================================
=========================================================================


=======================STRUCTURE=========================================
Each line is scructured as follows:

{img: "<path>/<name>.<type>", name: "<name of the beer>", desc: "<The accompanying description of the beer>"}

Each such line is one of the elements in the beer display menu. Change stuff here, and that element changes as well.
"<>" is just to show where you can edit, in other words; this is a thing: <thing>.
If in doubt about how to edit, just see how the other beers are, and follow the trend.

EXPLANATIONS:
<path>: Put all your images in the "Images" folder and <path> here will always be Images.
<name>.<type>: This is the name and type of the image file for eksample: stout.png, or stout.jpg.

======================HOW TO EDIT STUFF=================================
Lets say we have one of the beer elements like this:
{img: "Images/stout.png", name: "No Light in Sight", desc: "A dark stout with beer and stuff in it."}


CHANGE IMAGE:===============================================================================================================================================
So you want to change to an image you just uploaded in to the Images folder, named newStoutImage.png. (or another already existing image in the same folder)

1. Find the line with the element you want to edit.
    - In our example this is the line with name: "No Light in Sight".
2. Change the <name>.<type> part of the img: "Images/<name>.<type>" to match the name and type of the image you want to change to.
    - In our example we will change "Images/stout.png" to  "Images/newStoutImage.png"
3. Save the file and upload to server, and that's it! Your new image should now appear on the site replacing the old one.
    - In our example the whole line now looks like: 
      {img: "Images/newStoutImage.png", name: "No Light in Sight", desc: "A dark stout with beer and stuff in it."}

CANGE NAME:===============================================================================================================================================
So you want to change the name of one of the beer elements(probably in the process of changing the beers that are on tap).

1. Find the line with the element you want to edit.
2. Change the <name of the beer> part of the name: "<name of the beer>" to what you want the new name to be.
3. Save the file and upload to server, and that's it! Your new name should now appear on the site replacing the old one.

CANGE DESCRIPTION:===============================================================================================================================================
So you want to change the description of one of the beer elements(probably in the process of changing the beers that are on tap, or to fix spelling errors).

1. Find the line with the element you want to edit.
2. Change the <The accompanying description of the beer> part of the desc: "<The accompanying description of the beer>" to what you want the new description to be.
3. Save the file and upload to server, and that's it! Your new description should now appear on the site replacing the old one.

REMOVE AN ELEMENT:===============================================================================================================================================
So preveously you had 11 beers on tap, but now you will have 9.

1. Find the line with the elements you want to remove.
2. at the very start of the lines add // (just two forward slashes) in front of the lines.
    - so if you want to remove this element from the list:
        {img: "Images/newStoutImage.png", name: "No Light in Sight", desc: "A dark stout with beer and stuff in it."}
      change that line to this:
        //{img: "Images/newStoutImage.png", name: "No Light in Sight", desc: "A dark stout with beer and stuff in it."}
3. Save the file and upload to server, and that's it! Your beer should now have been removed on the site.

Do not remove the line in another way unless you know what you are doing.

ADD AN ELEMENT:===============================================================================================================================================
Adding a new element is the reverse of removal.
So preveously you had 9 beers on tap, but now you will have 10.

1. Find a line that has been removed (has // in front of it).
2. Remove the slashes(//)
    - so you find the line:
        //{img: "Images/newStoutImage.png", name: "No Light in Sight", desc: "A dark stout with beer and stuff in it."}
      change that line to this:
        {img: "Images/newStoutImage.png", name: "No Light in Sight", desc: "A dark stout with beer and stuff in it."}
3. Edit it the way you want, save the file and upload to server, and that's it! Your new beer should now be visible on the site.



*/
beers = [
    { img: "Images/brownAle.png", name: "NF Trondhjems Pils", desc: "Vår klassiske pils, men denne gnang ufiltrert med tydeligere smak av både malt og humle. Brygget med pils, pale og caramel malt. Bitterhumlen er Nugget, og de klassiske Saaz og Perle er aromahumler. Alkohol 4.5%" },
    { img: "Images/beer2T.png", name: "Havneporter", desc: "En klassisk porter på 4.5% med en del røstet malt. Mørk i fargen, fyldig, røstet og leskende smak, denne porteren kan man drikke flere av! Laget med Lager som basemalt, Brown, Crystal, Pale Crystal, Dark Crystal, Chocolate, Pale Chocolate, Black som spesialmalt. Alkohol: 4.5% EBC: 121 IBU: 11.1" },
    { img: "Images/beer2T.png", name: "Amber Ale", desc: "Kobberfarget og meget aromatisk øl med rund og kompleks smak, of frisk humlekarakter med fruktig ettersmak. Brygget med overgjær, av malttypene Pale, Crystal og Pale Chocolate. Bitterhumle er Chinook og aromahumle er Cascade. Alkohol: 5.5% IBU: 14." },
    { img: "Images/brownAle.png", name: "Belgisk Blonde", desc: "(Av Oslo Mikrobryggeri) Et klassisk belgisk øl, med en dyp gylden farge, søte malttoner og fyldig kropp. Appelsinaktig med krydret aroma. Humle: Hallertau. Alkohol: 7%." },
    { img: "Images/beer2T.png", name: "Oseania Pale", desc: "En pale ale med mye tropiske og fruktige smaker, akkompagnert en god og rund bitterhet. Ølen er brygget med humler utelukkende fra New Zealand og Australia, Waiema, Wataku, Motueka, Ella og Galaxy, som gir ølet sin friske tropiske smak. IBU: 26 EBC: 14.4 Alkohol: 6%." },
    { img: "Images/beer1TSmall.png", name: "Ringwood Diego IPA", desc: "Detter er en amerikansk-inspirert IPA brygget med en klassisk engelsk gjær. Ølet får en god del humlearoma fra Cascade, Citra, Simcoe, Ahtanum, og Amarollo, noe som gir ølet en herlig aroma ac citrusfrukter. Ølet får også en del smak fra ringwood-gjøren, som er med på fremheve disse humlene på sin egen spesielle måte. Alkohol: 5.5% IBU: 50 EBC: 6.9." },
    { img: "Images/brownAle.png", name: "Bollywood Brown", desc: "Mørk IPA med frisk humlearoma og noe sødme. Ølen har en mørk brun farge med et lett brunt skum. God smak av både bittert og søtt, noter av mynte, lakris, og noe mørk sjokolade. Malt: M.O.P, Caramel, Pale Crystal, Chocolate, Black. Humle: Chinok, Summit, Simcoe, Cascade. Alkohol: 6.5% IBU: 35.7 EBC: 89." },
    { img: "Images/beer2T.png", name: "Juleøl", desc: "Dette er mellommørkt øl med moderat sødme, tydelig smak av bl.a. brun malt, karamell og tørket frukt, samt et friskt innslag av humle. Et kraftig, men ikke kjempetungt øl. Malt og humle: Dette er en godt bevart hemmelighet av julenissen og bryggeren... Alkohol: 8% IBU: 35.7 EBC: 89." },
    { img: "Images/beer1TSmall.png", name: "Flytende Brunch", desc: "En mørk røstet stout med rug og havregryn. Lukt av bakst og noe mørke noter, ølet har en kraftig røstet kropp, med hind av kaffe og sjokolade i ettersmaken. Malt: M.O.P., havregryn, Roasted Crystal, Crystal, Torrefied wheat, Crystal wheat, Rye. Alkohol: 6.5% IBU: 23.9 EBC: 217." },
    //{ img: "<path>/<name>.<type>", name: "<name of the beer>", desc: "<The accompanying description of the beer>" },
    //{ img: "<path>/<name>.<type>", name: "<name of the beer>", desc: "<The accompanying description of the beer>" },
    //{ img: "<path>/<name>.<type>", name: "<name of the beer>", desc: "<The accompanying description of the beer>" }
];
