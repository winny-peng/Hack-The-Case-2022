// JavaScript Document

var point_count = 0;

function point_add() {
	point_count += 10;
	let tree = document.getElementById('tree');
	tree.style.height = point_count;
	location.reload();
}	