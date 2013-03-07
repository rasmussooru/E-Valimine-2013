$(document).ready(function(){
$('#showdata').ready(function(){
$.getJSON("data/test.json",function(data){
          $.each(data.kandidaat, function(i,kandidaat){
              info = '<div id="kandidaat">' +
                     	'<div id="piltjatekst">' +
                  			'<div id="pilt">' +
                     		 	'<img alt="Andrus Ansip" src="view/images/kandidaadid/andrus.jpg">' +
              				 '</div>' +
              				 
              				 '<div id="andmed">' +
              				 		'<p>Nimi: ' + kandidaat.firstName + '</p>' +
              				 		'<p>Asukoht: ' + kandidaat.lastName +'</p>' + 
              				 		'<p>Erakond: ' + kandidaat.location +'</p>' +
              				 '</div>' +
              			'</div>' +
					    '<div id="nupp">' +
							'<button class="submit" type="submit">H‰‰leta</button>' +
			            '</div>' +
			         '</div>';
                 $(info).appendTo("#boxisisu");
          });
        });
});
});