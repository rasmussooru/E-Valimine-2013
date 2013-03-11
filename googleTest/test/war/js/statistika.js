
    // Load the Visualization API and the piechart package.
	google.load('visualization', '1', {'packages':['table','corechart']});
    // Set a callback to run when the Google Visualization API is loaded.
    google.setOnLoadCallback(googleLoaded);



$(document).ready(function(){
	$(".statFilter").change(function() {
		addCheckboxes();
		showImage();
		drawStuff();
	});
});


$(document).ready(function(){
});


//$(document).ready(function(){
	$(".filterCheckbox").click(function() {
		showImage();
		drawStuff();
	});
//});


function resetFilters(){
	document.getElementById("statistikaErakonnad").value = "All";
	document.getElementById("statistikaMaakonnad").value = 'All';
}


function addCheckboxes(){
	var erakonnaFilter = document.getElementById("statistikaErakonnad").value;
	var maakonnaFilter = document.getElementById("statistikaMaakonnad").value;
	
	$.getJSON("data/otsi.json", function (data){
		$.each(data.kandidaat, function (i, k) {
			$("[id=" + k.id+ "]").remove();
			if ((k.erakond == erakonnaFilter || erakonnaFilter == "All") && (k.location == maakonnaFilter || maakonnaFilter == "All")) {
				var checBox = '<div id="'+ k.id +'">' + 
					'<input class="filterCheckbox" type="checkbox" checked="1">'+ k.nimi +'<br>' +
					'</div>';
				$(checBox).appendTo("#checkboxid");
			}
        });
	})
}


function googleLoaded(){
	resetFilters();
	addCheckboxes();
	showImage();
	drawStuff();
}

function drawStuff(){
	
	var chartData = new google.visualization.DataTable();
	chartData.addColumn('string', 'Nimi');
	chartData.addColumn('number', 'Haali');
	
	var tableData = new google.visualization.DataTable();
	tableData.addColumn('string', 'Nimi');
	tableData.addColumn('number', 'H‰‰li');
	tableData.addColumn('string', 'Erakond');
	tableData.addColumn('string', 'Piirkond');
	tableData.addColumn('string', 'Id');
	
	$.getJSON("data/otsi.json", function (data){
		$.each(data.kandidaat, function (i, k) {
			//alert(k.nimi + k.haali + k.erakond + k.location + k.id);
			tableData.addRow([k.nimi, k.haali, k.erakond, k.location, k.id]);
			//alert(k.nimi + k.haali + k.erakond + k.location + k.id);
			//var elem = $("[id=" + k.id+ "]");
			//var s = elem.firstChild.is(:'checked');
			//alert(s);
			//if($("[id=" + k.id+ "]input").checked) {
			//	alert(k.nimi + k.haali);
			//	chartData.addRow([k.nimi, k.haali]);
			//}
        });
	});
	
	var options = {};
    var chart = new google.visualization.PieChart(document.getElementById("diagramm"));
    chart.draw(chartData, options);
    var tabel = new google.visualization.Table(document.getElementById("tabel"));
    tabel.draw(tableData, options);
	
};

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
