// JavaScript Document

// === GLOBAL VARIABLES ===
var point_count = 0;
var trees_planted = 0;

function point_add(point_amount) {
	// variables
	var tree_state = 1;

	//increment points
	point_count += point_amount;

	if (point_count % 1000 == 0) {
		trees_planted += 1;
		plant_tree();
	}
	else if ((point_count % 1000) < 200) {
		tree_state = 1;
	}
	else if ((point_count % 1000) < 400) {
		tree_state = 2;
	}
	else if ((point_count % 1000) < 600) {
		tree_state = 3;
	}
	else if ((point_count % 1000) < 800) {
		tree_state = 4;
	}
	else if ((point_count % 1000) < 1000) {
		tree_state = 5;
	}

	var src = 'images/tree-' + tree_state + '.jpg';
	var point_total = 'Leaves: ' + point_count;

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

//map API by Leaflet
var map = L.map('map').setView([44.428, -110.588], 8);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//radius of yellowstone park range
var circle = L.circle([44.428, -110.588], {
	color: '#70ad47',
	fillColor: '#93c47d',
	fillOpacity: 0.5,
	radius: 70000
}).addTo(map);

//create custom tree markers
const tree_marker = L.divIcon({
    html: '<i class="fa fa-tree"></i>',
		shadowUrl: 'leaflet/images/marker-shadow.png',
    className: 'tree_icon'
});

// plant tree
function plant_tree() {
	// (Math.random() * (max - min + 1) + min).toFixed(3); --> min/max variables if changing area
	
	var longitude = (Math.random() * (1) + 44).toFixed(3);
	var latitude = (Math.random() * (1) + (-111)).toFixed(3);
	
	L.marker([longitude, latitude],{ icon: tree_marker}).addTo(map)
		    .bindPopup('Tree Test' + trees_planted);
}
