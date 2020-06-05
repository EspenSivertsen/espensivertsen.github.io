/*
*FILENAME: navbar.js
*
*WRITTEN BY: André F, Andreas R, Espen S, Kim-Erling R, Marius I.S
*Created as part of a website creation project for the NTNU course IT2805 WEBTEK HØST 2016.
*
*WHEN: October / November 2016
*
*PURPOSE: Modularly populates both html pages with a unified nabvar, and governs its behavious.
*/

document.getElementById("navbar").innerHTML =
    '<div class="navbar-container">'+
			'<a class="navbar-brand" data-scroll href="index.html#"><img src="Images/navlogo.png" id="navbarLogo" class="navlogo" alt="Navbar Logo"></a>'+
			'<ul class="topnavbar" id="topNav">'+
				'<li> <a data-scroll href="index.html#" onclick="clickRemove()">Hjem</a> </li>'+
				'<li> <a data-scroll href="index.html#foodMenu" onclick="clickRemove()">Mat</a> </li>'+
        '<li> <a data-scroll href="index.html#menu" onclick="clickRemove()">Øl</a> </li>'+
				'<li> <a id="formAnimButton" data-scroll href="index.html#reservationScroll" onclick="clickRemove()">Reservasjon</a> </li>'+
				'<li> <a data-scroll href="index.html#about" onclick="clickRemove()">Om oss</a> </li>'+
				'<li> <a data-scroll href="index.html#contact" onclick="clickRemove()">Kontakt</a> </li>'+
        '<li> <a data-scroll href="index.html#map" onclick="clickRemove()">Kart</a> </li>'+
        '<li> <a data-scroll href="legacy.html#" onclick="clickRemove()">Arv</a> </li>'+
				'<li class="icon"><a href="javascript:void(0);" style="font-size:15px;" onclick="responsiveNavbar()">&#9776;</a></li>'
			'</ul>'+
		'</div>';
document.getElementById("footer").innerHTML =
		'<ul class="list-wrapper">'+
      '<li>'+
        '<a href="https://www.facebook.com/Trondhjemmikrobryggeri/?fref=ts" target="_blank">'+
        '<img src="Images/Icons/facebook.png" class="icon-footer facebook-icon" alt="Facebook"></a>'+
        '<span class="icon-text">FINN OSS PÅ FACEBOOK</span></li>'+
      '<li>'+
				'<a data-scroll href="index.html#contact">'+
        '<img src="Images/Icons/phone.png" class="icon-footer" alt="Phone"></a>'+
        '<span class="icon-text">+47 73 51 75 15</span></li>'+
      '<li>'+
        '<a data-scroll href="index.html#map">'+
				'<img src="Images/Icons/map.png" class="icon-footer" alt="Map"></a>'+
				'<span class="icon-text">PRINSENSGATE 39, N-7011<!--<br>TRONDHEIM, NORGE--></span></li>'+
      '<li>'+
        '<a href="mailto:someone@example.com" target="_top">'+
        '<img src="Images/Icons/email.png" class="icon-footer" alt="Email"></a>'+
        '<span class="icon-text">youremail@company.com</span></li>'+
			'</ul>'+
			'<ul class="footer-logo">'+
	     	'<a data-scroll href="#"><img src="Images/logowhite.png" alt="TMB Logo" class="logo-white"></a>'+
      '</ul>';
navbar();

addEventListener("scroll", navbar);

function navbar()
{
	var navbar = document.getElementById("navbar");
	var offset = navbar.getBoundingClientRect().top;
	var next = document.getElementById("information");
	if(offset <= 0)
	{
		navbar.style.position = "fixed";
		next.style.paddingTop = "150px";
	}
	var nextOff =  next.getBoundingClientRect().top;
	if(nextOff > 0)
	{
		navbar.style.position = "static";
		next.style.paddingTop = "100px";
	}
}

var resNav = document.getElementById("topNav");
var navLogo = document.getElementById("navbarLogo");
function responsiveNavbar() {
    if (resNav.className === "topnavbar") {
        resNav.className += " responsive";
        navLogo.style.display = "none";
    } else {
        resNav.className = "topnavbar";
        navLogo.style.display = "inline-block";
    }
}

function clickRemove() {
  resNav.className = "topnavbar";
  navLogo.style.display = "inline-block";
}
