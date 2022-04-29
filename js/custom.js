// JavaScript Document

// === GLOBAL VARIABLES ===
var point_count = 0; 
var trees_planted = 0; 

function point_add() {
	// variables
	var tree_state = 1; 
	
	//increment points
	point_count += 100;
	
	if (point_count % 1000 == 0) {
			trees_planted += 1;
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