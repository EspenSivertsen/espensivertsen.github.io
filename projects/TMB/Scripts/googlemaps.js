/*
*FILENAME: googlemaps.js
*
*WRITTEN BY: André F, Andreas R, Espen S, Kim-Erling R, Marius I.S
*Created as part of a website creation project for the NTNU course IT2805 WEBTEK HØST 2016.
*Using the Google maps API
*
*WHEN: October / November 2016
*
*PURPOSE: Implements an interactive map appliaction onto the bottom of the index.html page. Featured with functionality for searching, pathing and more.
*Displays TMB's location by default.
*/

  var directionDisplay;
  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay = new google.maps.DirectionsRenderer();

  var changeMode = google.maps.DirectionsTravelMode.DRIVING;
  var canClick = true;
  var controlText = document.createElement('div');

  function CenterControl(controlDiv, map) {
    // Set CSS for the control border.
    var controlUI = document.createElement('div');
    controlUI.className = 'direction-button';
    controlUI.style.backgroundColor = '#fff';
    controlUI.style.border = '2px solid #fff';
    controlUI.style.borderRadius = '3px';
    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    controlUI.style.cursor = 'pointer';
    controlUI.style.marginBottom = '22px';
    controlUI.style.textAlign = 'center';
    controlDiv.appendChild(controlUI);

    // Set CSS for the control interior.
    controlText.style.color = 'rgb(25,25,25)';
    controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
    controlText.style.fontSize = '25px';
    controlText.style.lineHeight = '38px';
    controlText.style.paddingLeft = '5px';
    controlText.style.paddingRight = '5px';
    controlText.innerHTML = '&ltrif;';
    controlUI.appendChild(controlText);

    // Click event for displaying/hiding directions panel
    controlUI.addEventListener('click', function() {
      canClick = !canClick;
      if (!canClick) {
        var resizeMap  = document.getElementById("map_canvas").style.width = '70%';
        var remDir = document.getElementById("directionsPanel").style.display = 'inline-block';
        controlText.innerHTML = '&rtrif;';
      }
      else {
        var resizeMap  = document.getElementById("map_canvas").style.width = '100%';
        var remDir = document.getElementById("directionsPanel").style.display = 'none';
        controlText.innerHTML = '&ltrif;';
      }
    });
  }

  function initialize() {
    var latlng = new google.maps.LatLng(63.431232, 10.392312);
    /* Disable drag (touch) on screen sizes smaller than 480
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var isDraggable = w > 480 ? true : false;
    */
    var isDraggable = !('ontouchstart' in document.documentElement); // Check if touch-screen, and disable drag (touch)
    var myOptions = {
      zoom: 14,
      minZoom: 8,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      draggable: isDraggable,
      scrollwheel: false
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById("directionsPanel"));
    var marker = new google.maps.Marker({
      position: latlng,
      map: map,
      title:"Trondheim Mikrobryggeri"
    });

    // Close/hide direction panel button
    var centerControlDiv = document.createElement('div');
    var centerControl = new CenterControl(centerControlDiv, map);

    centerControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(centerControlDiv);

    var routeForm = document.getElementById("route");
    routeForm.index = 1;
    map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(routeForm);


    // Autocomplete Searchbox
    var input = /** @type {!HTMLInputElement} */ (
    document.getElementById('pac-input'));

    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);

    var marker = new google.maps.Marker({
      map: map,
      anchorPoint: new google.maps.Point(0, -29)
    });

    autocomplete.addListener('place_changed', function() {
        marker.setVisible(false);
        var place = autocomplete.getPlace();
        if (!place.geometry) {
          window.alert("Autocomplete's returned place contains no geometry");
          return;
        }

        var address = '';
        if (place.address_components) {
          address = [
            (place.address_components[0] && place.address_components[0].short_name || ''),
            (place.address_components[1] && place.address_components[1].short_name || ''),
            (place.address_components[2] && place.address_components[2].short_name || '')
          ].join(' ');
        }
      });

    // Keep map centered responsive
    google.maps.event.addDomListener(window, "resize", function() {
     var center = map.getCenter();
     google.maps.event.trigger(map, "resize");
     map.setCenter(center);
    });
  }

  // Calculate selected route to TMB
  function calcRoute() {
    var resizeMap  = document.getElementById("map_canvas").style.width = '70%';
    var remDir = document.getElementById("directionsPanel").style.display = 'inline-block';

    var start = document.getElementById("pac-input").value;
    var end = "63.431232, 10.392312";

    canClick = false;
    controlText.innerHTML = '&rtrif;';

    var request = {
      origin:start,
      destination:end,
      travelMode: changeMode
    };
    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      }
    });
  }

  // Change travel mode and recalculate route
  function changeTravelMode (choice) {
    var carbtn      = document.getElementById("car-btn");
    var walkbtn     = document.getElementById("walk-btn");
    var bikebtn     = document.getElementById("bike-btn");
    var transitbtn  = document.getElementById("transit-btn");
    changeMode = choice;

    // Change background color of active choice
    if (changeMode === google.maps.DirectionsTravelMode.DRIVING) {
      carbtn.style.backgroundColor = '#2566f4';
    } else {
      carbtn.style.backgroundColor = '#4a80f5';
    }

    if (changeMode === google.maps.DirectionsTravelMode.WALKING) {
      walkbtn.style.backgroundColor = '#2566f4';
    } else {
      walkbtn.style.backgroundColor = '#4a80f5';
    }

    if (changeMode === google.maps.DirectionsTravelMode.BICYCLING) {
      bikebtn.style.backgroundColor = '#2566f4';
    } else {
      bikebtn.style.backgroundColor = '#4a80f5';
    }

    if (changeMode === google.maps.DirectionsTravelMode.TRANSIT) {
      transitbtn.style.backgroundColor = '#2566f4';
    } else {
      transitbtn.style.backgroundColor = '#4a80f5';
    }
    calcRoute();
  }
