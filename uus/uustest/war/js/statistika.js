
function statistika_ready(){

	addCheckboxes();
	drawTable();
	
	$(".statFilter").unbind("change").change(function() {
		addCheckboxes();
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
	
	$.getJSON("uustest", function (data){
		$.each(data, function (i, k) {
			if ((k.erakond == erakonnaFilter || erakonnaFilter == "All") && (k.maakond == maakonnaFilter || maakonnaFilter == "All")) {
				var checBox = '<div id="'+ k.id +'">' + 
					'<input type="checkbox" checked="1" onClick="drawChart()">'+ k.eesnimi + " " + k.perenimi +'<br>' +
					'</div>';
				$(checBox).appendTo("#checkboxid");
			}
        });
		drawChart();
	});

}


function drawTable(){
	var tableData = new google.visualization.DataTable();
	tableData.addColumn('string', 'Nimi');
	tableData.addColumn('number', 'H‰‰li');
	tableData.addColumn('string', 'Erakond');
	tableData.addColumn('string', 'Piirkond');
	tableData.addColumn('string', 'Id');
	
	$.getJSON("uustest", function (data){
		$.each(data, function (i, k) {
			tableData.addRow([k.eesnimi + " " + k.perenimi, k.votes, k.erakond, k.maakond, k.id]);
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
	
	$.getJSON("uustest", function (data){
		$.each(data, function (i, k) {
			if(document.getElementById(k.id)) {
				if(document.getElementById(k.id).firstChild.checked) {
					var name = k.eesnimi + " " + k.perenimi;
					chartData.addRow([k.eesnimi + " " + k.perenimi, k.votes]);
				}
			}
        });
		var options = {};
	    var chart = new google.visualization.PieChart(document.getElementById("diagramm"));
	    chart.draw(chartData, options);
	});
	

	
};