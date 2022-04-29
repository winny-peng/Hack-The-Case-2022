// JavaScript Document

// === GLOBAL VARIABLES ===
var point_count = 0;

function point_add() {
	// variables
	var tree_state = 1;
	
	//increment points
	point_count += 100;
	
	if (point_count == 0) {
		tree_state = 1;
	} 
	else if (point_count == 100) {
		tree_state = 2;
	} 
	else if (point_count == 200) {
		tree_state = 3;
	} 
	else if (point_count == 300) {
		tree_state = 4;
	} 
	else if (point_count == 400) {
		tree_state = 5;
	}
	else {
		point_count = 0;
		tree_state = 1;
	}
	
	var src = 'images/tree-' + tree_state + '.jpg';
	var point_total = 'Eco Points: ' + point_count;
	
	// update numbers
	document.getElementById('tree').src=src;
	document.getElementById('point_display_value').innerHTML=point_total;
	document.getElementById('points_stats_points').innerHTML=calc_trees_rewards();
	document.getElementById('points_stats_trees').innerHTML=calc_trees_planted();
	document.getElementById('points_stats_money').innerHTML=point_count;
	purchase();
}	

// complete purchase
function purchase() {
  var x = document.getElementById("purchase_toast");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

// calculate the number of trees Amazon planted on the user's behalf (1 tree = 1000 leaves)
function calc_trees_planted() {
	return Math.floor(point_count/1000);
}

// calculate the cashback value 
function calc_trees_rewards() {
	return "$" + (point_count/10000).toFixed(2);
}