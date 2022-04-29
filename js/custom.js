// JavaScript Document

// === GLOBAL VARIABLES ===
var point_count = 1100;
var trees_planted = 1;

function point_add() {
	// variables
	var tree_state = 1;

	//increment points
	point_count += 100;

	if (((point_count/trees_planted)-800) <= 200) {
		tree_state = 1;
	}
	else if (((point_count/trees_planted)-800) <= 400) {
		tree_state = 2;
	}
	else if (((point_count/trees_planted)-800) <= 600) {
		tree_state = 3;
	}
	else if (((point_count/trees_planted)-800) <= 800) {
		tree_state = 4;
	}
	else if (((point_count/trees_planted)-800) < 1000) {
		tree_state = 5;
	}
	else {
		tree_state = 1;
		trees_planted += 1;
	}

	var src = 'images/tree-' + tree_state + '.jpg';
	var point_total = 'Eco Points: ' + point_count;

	// update numbers
	document.getElementById('tree').src=src;
	document.getElementById('point_display_value').innerHTML=point_total;
	document.getElementById('points_stats_points').innerHTML=point_count;
	document.getElementById('points_stats_trees').innerHTML=trees_planted;
	document.getElementById('points_stats_money').innerHTML=calc_trees_rewards();
	purchase();
}

// complete purchase
function purchase() {
  var x = document.getElementById("purchase_toast");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

// calculate the cashback value
function calc_trees_rewards() {
	return "$" + (point_count/10000).toFixed(2);
}

//map API testing stuff
var map = L.map('map').setView([51.505, -0.09], 13);
var marker = L.marker([51.5, -0.09]).addTo(map);

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);
