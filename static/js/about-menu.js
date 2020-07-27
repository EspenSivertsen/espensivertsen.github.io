var skill = document.getElementById("about-skills");
var interest = document.getElementById("about-interests");
var stat = document.getElementById("about-stats");


function showSkills() {
	skill.style.display = "block";
	interest.style.display = "none";
	stat.style.display = "none";
	var x = document.getElementById("active-skill").style.backgroundColor = "#fffc36";
	var x = document.getElementById("active-interest").style.backgroundColor = "";
	var x = document.getElementById("active-stat").style.backgroundColor = "";

	var x = document.getElementById("active-skill").style.color = "#000";
	var x = document.getElementById("active-interest").style.color = "#fff";
	var x = document.getElementById("active-stat").style.color = "#fff";
}
function showInterests() {
	skill.style.display = "none";
	interest.style.display = "block";
	stat.style.display = "none";
	var x = document.getElementById("active-interest").style.backgroundColor = "#fffc36";
	var x = document.getElementById("active-skill").style.backgroundColor = "";
	var x = document.getElementById("active-stat").style.backgroundColor = "";

	var x = document.getElementById("active-interest").style.color = "#000";
	var x = document.getElementById("active-skill").style.color = "#fff";
	var x = document.getElementById("active-stat").style.color = "#fff";
}
function showStats() {
	skill.style.display = "none";
	interest.style.display = "none";
	stat.style.display = "block";
	var x = document.getElementById("active-stat").style.backgroundColor = "#fffc36";
	var x = document.getElementById("active-skill").style.backgroundColor = "";
	var x = document.getElementById("active-interest").style.backgroundColor = "";

	var x = document.getElementById("active-stat").style.color = "#000";
	var x = document.getElementById("active-skill").style.color = "#fff";
	var x = document.getElementById("active-interest").style.color = "#fff";
}
