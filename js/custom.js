// JavaScript Document

// === GLOBAL VARIABLES ===
var point_count = 0;

const tree_image = document.getElementById("tree");
tree_image.src = "images/tree-1.jpg";

function point_add() {
	//increment points
	point_count += 100;
	
	if (point_count == 0) {
		tree_image.src = "images/tree-1.jpg";
	} 
	else if (point_count == 100) {
		tree_image.src = "images/tree-2.jpg";
	} 
	else if (point_count == 200) {
		tree_image.src = "images/tree-3.jpg";
	} 
	else if (point_count == 300) {
		tree_image.src = "images/tree-4.jpg";
	} 
	else {
		tree_image.src = "images/tree-5.jpg";
	}
}	