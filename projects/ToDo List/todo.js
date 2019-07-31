/* Javascript for Assignment 7 */

var close 		  = document.getElementsByClassName("remove");
var outputDone 	= 0;
var i;

output();

function addTask() {
	var strike 			   = document.createElement("SPAN");
	strike.className 	 = "strikeMe";

	var list 			     = document.getElementById("ulist");
	var li 				     = document.createElement("li");
	var inputValue 		 = document.getElementById("todo").value;
	var txt 			     = document.createTextNode(inputValue);
	strike.appendChild(txt);

	// Create a "checkbox" button to the left
	var checkbox 		    = document.createElement("input");
  checkbox.type 		  = "checkbox";
  checkbox.value 		  = 1;
  checkbox.name 		  = "todo[]";  
  checkbox.className 	= "check";
	li.appendChild(checkbox);

	li.appendChild(strike);

	if (inputValue === '') {
	  alert("Input can't be empty!");
	} else {
	  list.appendChild(li);
	  list.insertBefore(li, list.firstChild);
	  output();
	}
	document.getElementById("todo").value = "";

	// Create a "remove" button to the right
	var removeBtn = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	removeBtn.className = "remove";
	removeBtn.appendChild(txt);
	li.appendChild(removeBtn);


 	// Checkbox, check if box is checked or not (intended)
 	var micCheck = document.getElementsByClassName("check");
  for (i = 0; i < micCheck.length; i++) {
  	micCheck[i].onclick = function() {
  		var div = this.parentElement;
  		if (this.checked) {
        outputDone += 1;
  			list.appendChild(div);
  			div.style.backgroundColor = "#808080";
        div.value = 1;
        output();
      } else {
      	outputDone -= 1;
  			list.insertBefore(div, list.firstChild);
  			div.style.backgroundColor = null;
        div.value = 0;
        output();
      }
  	}
    // Remove item from list, and subtract done with -1 if checked
    close[i].onclick = function() {
      var div = this.parentElement;
      if (div.value === 1) {
        outputDone -= 1;
      } 
      div.parentNode.removeChild(div);
      output();  
    }
  }
  
  /*for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.parentNode.removeChild(div);
      if (checkDeleted) {  // Not working
        //outputDone -= 1;
        checkDeleted = false;
      } 
      output(); 
    }
  }*/

}

function output() {
	// Display output, how many tasks complete out of total
	var listElem        = document.getElementById("ulist").getElementsByTagName("li");
  var outputTotal     = listElem.length;
  var taskOutput      = document.getElementById("task-output").innerHTML = outputDone + " / " + outputTotal;

  // Display 'Red' color if not all tasks are complete, 'Green' if they are, 'White' if not started.
  var boxColor = document.getElementById("output-color");
  if (outputDone != outputTotal && outputTotal >= 1) {
    boxColor.style.borderColor = "#f44336"; 
  } 
  else if (outputDone === outputTotal && outputTotal >= 1) {
    boxColor.style.borderColor = "#438736";
  } else {
    boxColor.style.borderColor = null; 
  }

  // Display a message if the list is empty
  var emptyTxt = document.getElementById("empty-list");
  if (outputTotal <= 0) {
    emptyTxt.style.display = "block";
  } else {
    emptyTxt.style.display = "none";
  }
}

// When user presses the 'enter' key on input, submit new task
var taskEnter = document.getElementById('todo');
taskEnter.onkeydown = function (e) {
  if (e.keyCode == 13){
     addTask();
  }
}