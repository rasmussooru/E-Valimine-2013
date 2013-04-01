function showImage()
{
var elem = document.getElementById('testimage');
elem.style.display = 'block';
setTimeout("hideImage()", 4000);
}

function hideImage()
{
var elem = document.getElementById('testimage');
elem.style.display = 'none';
}
