/*
*FILENAME: beermenu.js
*
*WRITTEN BY: André F, Andreas R, Espen S, Kim-Erling R, Marius I.S
*Created as part of a website creation project for the NTNU course IT2805 WEBTEK HØST 2016.
*
*WHEN: October / November 2016
*
*PURPOSE: Governs the creation, animation and population etc of the beermenu. Pulls data from the beer scripts in the edit folder.
*/

var menu = document.getElementById("menu");

//Init
var beerCount = beers.length;
var currentPage = 0;
var beersPerPage = 3;

//The containers for the beers.
var containers = [document.getElementById("beer0"), document.getElementById("beer1"), document.getElementById("beer2")];

// calculates the number of pages
var pages = Math.ceil(beerCount / beersPerPage);

//calculates the number of beers on the last page
var lastPageSize = beerCount % beersPerPage;

//array of dots.
var dots;

//call to init function
init();


function init() {
    populateBeerDiv(beersPerPage); 
    transition(true);
    createDots();
    dotFocus(currentPage);
    if (lastPageSize == 0) {
        lastPageSize = 3;
    }
}

//time.sleep(ms)
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//creates the dots that indicate what page of the beer menu is showing
function createDots() {
    //gets the div that is the container for the dots
    var container = document.getElementById("dot-container");

    //creates one dot for each page of the menu
    for (var i = 0; i < pages; i++) {
        var dot = document.createElement("SPAN"); 
        dot.className = "dot";

        //sets the on click to setPage(i)
        dot.onclick = (function () {
            var currentI = i;
            return function () {
                setPage(currentI + '');
            }
        })();

        //ads the dot to the dot container
        container.appendChild(dot);
    }
    //populates the dot array
    dots = container.childNodes;
}

/*
Function for the transition between pages of the beer menu.
Param: increase, boolean. 
    increase == true: opacity starts at 0 and increments up to 1.
    increase == false: opacity starts at 1 and increments down to 0.
*/
function transition(increase) {
    var elem = document.getElementById("beer-container");

    //sets an interval of 5 ms.
    var id = setInterval(frame, 5);
    var opacity;

    //checks value of increase and sets value of opacity accordingly.
    if (increase) { opacity = 0 }
    else { opacity = 1 }

    //Function called once per frame
    function frame() {
        //if increasing
        if (increase == true) {

            if (opacity >= 1) { //stops when opacity reaches 1
                clearInterval(id);
            }
            else { //otherwise it increments the opacity and applies it to the element
                opacity += 0.01;
                elem.style.opacity = opacity;
            }
        }
        else {//stops when opacity reaches 0
            if (opacity <= 0) {
                clearInterval(id);
            }
            else { //otherwise it decrements the opacity and applies it to the element
                opacity -= 0.01;
                elem.style.opacity = opacity;
            }
        }
    }
}

/*
Applies the "focus" effect(another color) to the dot corresponding to the current page (n)
*/
function dotFocus(n) {
    //Resets the background color of all the dots
    for (var i = 0; i < dots.length; i++) {
        var dot = dots[i]
        dot.style.backgroundColor = "#bbb";
    }
    //applies the focus effect to the right dot.
    dots[n].style.backgroundColor = "#304949";
}

/*
Changes the page displayed to page n.
Param: n, interger or string(Is a string when it is called from html).
*/
function setPage(n) {

    n = parseInt(n, 10); //parse from string to int
    currentPage = n; //updates the variable current page.
    dotFocus(n); //Sets the correct dot focus
    transition(false); //Fade out

    //500 ms delay. Somehow helps with loading and transitioning.
    sleep(500).then(() => {
        if (currentPage == pages - 1) { //if last page, populates the right number of beers
            populateBeerDiv(lastPageSize);
        }
        else { //otherwise populate with standard number of beers
            populateBeerDiv(beersPerPage);
        }

        transition(true); //Fade in
    });
}

/*
Called when the ">" button is pressed. 
Increments the page and calls set page with correct page number.
*/
function next() {
    if (currentPage == pages - 1) { //if last page, go back to the first page
        setPage(0);
    }
    else { //otherwise, next page
        setPage(currentPage + 1);
    }
}

/*
Called when the "<" button is pressed. 
Increments the page and calls set page with correct page number.
*/
function previous() { 
    if (currentPage == 0) { //if first page, go to the last page
        setPage(pages - 1);
    }
    else { //otherwise, previous page.
        setPage(currentPage - 1);
    }
}

/*
Resizes the beer-elements left and right margin.
Param: c: div object, margin: number. 
*/
function containerResize(c, margin) {
    c.style.marginLeft = margin - 1 + "%";
    c.style.marginRight = margin - 1 + "%";
}


/*
Populates the beer-element divs with the proper image, title and description.
Param: val: Number of beers of the page to be populated.
*/
function populateBeerDiv(val) {
    //sets margin to fit the parent element based on the number of beers in the page.
    var width = 20 * val;
    var margin = (100 - width) / (val * 2);

    //resets and empties the divs so they are rdy for filling and dont fuck up other stuff when not filled.
    for (var i = 0; i < beersPerPage; i++) {
        containers[i].innerHTML = "";
        containers[i].style.display = "none";
    }

    //Goes through the beer elements(containers) and polulates them.
    for (var i = 0; i < val; i++) {
        /*beer = {img: src, name: title,  desc: beer description};*/

        c = containers[i];
        containerResize(c, margin);
        c.style.display = "inline-block";

        //Sets up the nodes
        var currentBeer = beers[i + currentPage * 3];
        var img = document.createElement("IMG");
            img.src = currentBeer["img"];
        var title = document.createElement("H2");
        var ription = document.createElement("P");


        //sets up the text nodes
        var name = document.createTextNode(currentBeer["name"]);
        var desc = document.createTextNode(currentBeer["desc"]);

        //appends the text nodes
        title.appendChild(name);
        ription.appendChild(desc);

        //appends the nodes to the container
        c.appendChild(img);
        c.appendChild(title);
        c.appendChild(ription);

        
    }
}
