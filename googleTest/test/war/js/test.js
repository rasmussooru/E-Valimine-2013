
$(document).ready(function(){
$.getJSON("data/otsi.json",function(data){
	$("#button").click( function()
           {
		$.each(data.kandidaat, function(i,kandidaat){
			$('#kandidaadibox').remove();
});
})		
});
});




$(document).ready(function(){
	$("#button").click( function()
           {

$('#showdata').ready(function(){
$.getJSON("data/otsi.json",function(data){
$('select#select').ready(function(){
			var selected = $(this).find('#select option:selected');
			var test = selected.val();
          		console.log(test);	


	$('select#valik').ready(function(){
			var selected1 = $(this).find('#valik option:selected');
			var test1 = selected1.val();
          		console.log(test1);	

	
		$.each(data.kandidaat, function(i,kandidaat){
		if (test != 'All' && test1 == 'All') {								
			if(kandidaat.erakond == test) {
              	info = '<div id="kandidaadibox">' +
                     		'<div id="kandidaadipilt">' +
                               		'<img alt="Andrus Ansip" src="view/images/kandidaadid/andrus.jpg">' +
              			'</div>' +
              			'<div id="kandidaadiandmed">' +
              				 		'<p>Nimi: ' + kandidaat.nimi + '</p>' +
           							'<p>Asukoht: ' + kandidaat.location +'</p>' + 
              				 		'<p>Erakond: ' + kandidaat.erakond +'</p>' +
								'<p>Lisainfo: ' + kandidaat.lisainfo +'</p>' +
								
              			'</div>' +
              			'</div>' +
				'</div>';
                 	$(info).appendTo("#boxisisu");
						}
}

		if (test == 'All' && test1 != 'All') {								
			if(kandidaat.location == test1) {
              	info = '<div id="kandidaadibox">' +
                     		'<div id="kandidaadipilt">' +
                               		'<img alt="Andrus Ansip" src="view/images/kandidaadid/andrus.jpg">' +
              			'</div>' +
              			'<div id="kandidaadiandmed">' +
              				 		'<p>Nimi: ' + kandidaat.nimi + '</p>' +
           							'<p>Asukoht: ' + kandidaat.location +'</p>' + 
              				 		'<p>Erakond: ' + kandidaat.erakond +'</p>' +
								'<p>Lisainfo: ' + kandidaat.lisainfo +'</p>' +
								
              			'</div>' +
              			'</div>' +
				'</div>';
                 	$(info).appendTo("#boxisisu");
						}
}

		if (test != 'All' && test1 != 'All') {								
			if(kandidaat.location == test1 && kandidaat.erakond == test) {
              	info = '<div id="kandidaadibox">' +
                     		'<div id="kandidaadipilt">' +
                               		'<img alt="Andrus Ansip" src="view/images/kandidaadid/andrus.jpg">' +
              			'</div>' +
              			'<div id="kandidaadiandmed">' +
              				 		'<p>Nimi: ' + kandidaat.nimi + '</p>' +
           							'<p>Asukoht: ' + kandidaat.location +'</p>' + 
              				 		'<p>Erakond: ' + kandidaat.erakond +'</p>' +
								'<p>Lisainfo: ' + kandidaat.lisainfo +'</p>' +
								
              			'</div>' +
              			'</div>' +
				'</div>';
                 	$(info).appendTo("#boxisisu");
						}
}




		else if (test == 'All' && test1 == 'All') {								
			              	info = '<div id="kandidaadibox">' +
                     		'<div id="kandidaadipilt">' +
                               		'<img alt="Andrus Ansip" src="view/images/kandidaadid/andrus.jpg">' +
              			'</div>' +
              			'<div id="kandidaadiandmed">' +
              				 		'<p>Nimi: ' + kandidaat.nimi + '</p>' +
           							'<p>Asukoht: ' + kandidaat.location +'</p>' + 
              				 		'<p>Erakond: ' + kandidaat.erakond +'</p>' +
								'<p>Lisainfo: ' + kandidaat.lisainfo +'</p>' +
								
              			'</div>' +
              			'</div>' +
				'</div>';
                 	$(info).appendTo("#boxisisu");
						
}
});
});
                  });
});
})		
});
});