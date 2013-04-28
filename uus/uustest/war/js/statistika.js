
function statistika_ready(){

	addCheckboxes();
	drawTable();
	
	fillMap();
	
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


function fillMap(){

	var mapProp = {
		center:new google.maps.LatLng(58.5,25),
		zoom:7,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	
	var map = new google.maps.Map(document.getElementById("kaart"),mapProp);
	var maakonnad = ["Harjumaa","Hiiumaa","Ida-Virumaa","Jıgevamaa","J‰rvamaa","L‰‰nemaa","L‰‰ne-Virumaa","Pılvamaa","P‰rnumaa","Raplamaa","Saaremaa","Tartumaa","Valgamaa","Viljandimaa","Vırumaa"];
	var erakonnad = ["Kerakond","Rohekond","Orakond","Punakond","Sinikond"];
	
	for (var i = 0; i < maakonnad.length; i++) {
		var loc = getLoc(maakonnad[i]);
		var winner = getWinnerInfo(maakonnad[i]);
		if (winner[0] >= 0) {
			erak = erakonnad[winner[0]];
		} else {
			erak = "- - ";
		}
		var protsent = winner[1];
		var erakColor = getColor(erak);
		var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + erakColor);
		var label = erak + " - " + protsent + "%"; 
		if (loc) {
			var marker = new MarkerWithLabel({
				position: loc,
				map: map,
				labelContent: label,
				labelClass: "labels",
				labelStyle: {color: "#" + erakColor, background: "FFFFFF"},
				icon:pinImage,
			});
		}
	}
	map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('legend'));
	var legend = document.getElementById('legend');
	for (var i = 0; i < erakonnad.length; i++) {
		var name = erakonnad[i];
		var icon = "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + getColor(name);
		var div = document.createElement('div');
		div.innerHTML = '<img src="' + icon + '"> ' + name;
		legend.appendChild(div);
	}

	var name = "Pole h‰‰li";
	var icon = "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|000000";
	var div = document.createElement('div');
	div.innerHTML = '<img src="' + icon + '"> ' + name;
	legend.appendChild(div);
}

function getLoc(maakond){
	switch (maakond){
	case "Hiiumaa":
		return new google.maps.LatLng(59,22.75);
	case "Harjumaa":
		return new google.maps.LatLng(59.433333, 24.75);
	case "Raplamaa":
		return new google.maps.LatLng(58.994444, 24.801111);
	case "Viljandimaa":
		return new google.maps.LatLng(58.363333, 25.595556);
	default:
		return;
	}
	
	
}

function getWinnerInfo(maakond){
	var tot = 0;
	var erakonnaHaaled = [0,0,0,0,0];
	$.ajax({
		  url: 'uustest',
		  async: false,
		  dataType: 'json',
		  success: function (data) {
				$.each(data, function (i, k) {
					if (k.maakond == maakond){
						tot += k.votes;
						switch (k.erakond){
						case "Kerakond":
							erakonnaHaaled[0] += k.votes;
							break;
						case "Rohekond":
							erakonnaHaaled[1] += k.votes;
							break;
						case "Orakond":
							erakonnaHaaled[2] += k.votes;
							break;
						case "Punakond":
							erakonnaHaaled[3] += k.votes;
							break;
						case "Sinikond":
							erakonnaHaaled[4] += k.votes;
							break;
						default:
							tot -= k.votes;
							break;
						}
					}
		        });
			}
		});

		if (tot === 0) return([-1,""]);
		
		var maxVal = max = Math.max.apply(null, erakonnaHaaled);
		var maxPos = -1;
		for (var i = 0; i<erakonnaHaaled.length; i++){
			if (erakonnaHaaled[i] == maxVal && maxPos < 0) {
				maxPos = i;
			}
		}
		return [maxPos, Math.round(maxVal / tot * 100)];
	
}

function getColor(erakond){
	switch (erakond){
	case "Kerakond":
		return "00FF00";
	case "Rohekond":
		return "119911";
	case "Orakond":
		return "FF00FF";
	case "Punakond":
		return "FF0000";
	case "Sinikond":
		return "0000FF";
	default:
		return "000000";
	}
}