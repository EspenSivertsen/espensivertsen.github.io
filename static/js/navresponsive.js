/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function responsenav() {
    var x = document.getElementById("navbar");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}