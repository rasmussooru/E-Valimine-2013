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

function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/et_EE/all.js#xfbml=1&appId=527973890582304";
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk');