function showImage(){
	var elem = document.getElementById('testimage');
	elem.style.display = 'block';
	setTimeout("hideImage()", 4000);
}

function hideImage(){
	var elem = document.getElementById('testimage');
	elem.style.display = 'none';
}


function showStuff(id) {
	document.getElementById(id).style.display = 'block';
}

function hideStuff(id) {
	document.getElementById(id).style.display = 'none';
}