
function statistika_ready(){

	addCheckboxes();
	showImage();
	drawTable();
	drawChart();
	
	$(".statFilter").unbind("change").change(function() {
		addCheckboxes();
		showImage();
		drawTable();
		drawChart();
	});
	
};


function resetFilters(){
	document.getElementById("statistikaErakonnad").value = "All";
	document.getElementById("statistikaMaakonnad").value = 'All';
}


function addCheckboxes(){
	$("#checkboxid").empty();
	var erakonnaFilter = document.getElementById("statistikaErakonnad").value;
	var maakonnaFilter = document.getElementById("statistikaMaakonnad").value;
	
	$.getJSON("data/otsi.json", function (data){
		$.each(data.kandidaat, function (i, k) {
			//$("[id=" + k.id+ "] firstChild").checked = 0;
			//$("[id=" + k.id+ "]").remove();
			if ((k.erakond == erakonnaFilter || erakonnaFilter == "All") && (k.location == maakonnaFilter || maakonnaFilter == "All")) {
				var checBox = '<div id="'+ k.id +'">' + 
					'<input type="checkbox" checked="1" onClick="drawChart()">'+ k.nimi +'<br>' +
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
	drawTable();
}


function drawTable(){
	var tableData = new google.visualization.DataTable();
	tableData.addColumn('string', 'Nimi');
	tableData.addColumn('number', 'H‰‰li');
	tableData.addColumn('string', 'Erakond');
	tableData.addColumn('string', 'Piirkond');
	tableData.addColumn('string', 'Id');
	
	$.getJSON("data/otsi.json", function (data){
		$.each(data.kandidaat, function (i, k) {
			tableData.addRow([k.nimi, k.haali, k.erakond, k.location, k.id]);
        });
		var options = {};
	    var tabel = new google.visualization.Table(document.getElementById("tabel"));
	    tabel.draw(tableData, options);
	});
	
	
};

function drawChart(){


	var chartData = new google.visualization.DataTable();
	chartData.addColumn('string', 'Nimi');
	chartData.addColumn('number', 'Haali');
	
	$.getJSON("data/otsi.json", function (data){
		$.each(data.kandidaat, function (i, k) {

//			alert("callback() called");
			var temp = document.getElementById(k.id);
//			var t1 = temp.checked;
			
			if(document.getElementById(k.id)) {
				if(document.getElementById(k.id).firstChild.checked) {
					chartData.addRow([k.nimi, k.haali]);
				}
			}
        });
		var options = {};
	    var chart = new google.visualization.PieChart(document.getElementById("diagramm"));
	    chart.draw(chartData, options);
	});
	

	
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
