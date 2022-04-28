// JavaScript Document

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
	else if (point_count == 200) {
		tree_state = 4;
	} 
	else {
		tree_state = 5;
	}
	
	var src = 'images/tree-' + tree_state + '.jpg';
	document.getElementById('tree').src=src;
}	