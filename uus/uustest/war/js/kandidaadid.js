

function kandidaadid_ready() {
	fillCandidates();

    $(".statFilter").unbind("change").change(function() {
    	$("#kandidaadibox").empty();
    	
    	fillCandidates();
    	
	});
};


function fillCandidates() {

	var erakonnaFilter = document.getElementById("statistikaErakonnad").value;
	var maakonnaFilter = document.getElementById("statistikaMaakonnad").value;
	
    $.getJSON("uustest", function (data) {
        $.each(data, function (i, k) {

        	if ((k.erakond == erakonnaFilter || erakonnaFilter == "All") && (k.maakond == maakonnaFilter || maakonnaFilter == "All")) {
        		var info = getInfo(i, k);
        		$(info).appendTo("#kandidaadibox");
        	}
        	
        });
    });
}

function getInfo(i, k){
	var tekst = "Anna punkt";
	//selleVandiValik tuleks t‰ita logimisel ja h‰‰letamisel
	if (k.id == selleVandiValik) {
		tekst = "Kustuta punkt";
	}
	var info = '' +
	'<div class="kandidaat">' +
		'<div class="piltjatekst">' +
			'<div class="pilt">' +
				'<img alt="Pilt" src="view/images/kandidaadid/placeholder1.jpg">' +
			'</div>' +
			'<div class="andmed">' +
				'<p> Id: ' + k.id + '</p>' +
				'<p> Nimi: ' + k.eesnimi + " " +  k.perenimi + '</p>' +
				'<p> Maakond: ' + k.maakond + '</p>' +
				'<p> Erakond: ' + k.erakond + '</p>' +
			'</div>' +
		'</div>' +
		'<div class="nupp">' +
			'<button class="annaHaal">' + tekst + '</button>'+
		'</div>' +
	'</div>';
	
	return info;
}


$(document).on("click", ".annaHaal", function(){
	var btnText = $(this).text();
	if (btnText == "Anna punkt") {
		var kandidaadiNumber = $(this).parent().parent().find('.andmed').find(":first-child").text().match(/\d+$/)[0];
		alert("Annad punkti kandidaadile # " + kandidaadiNumber + ".");
		selleVandiValik = kandidaadiNumber;
		$(".annaHaal").text("Anna punkt");
		$(this).text("Kustuta punkt");
	} else {
		alert("Kustutan");
		selleVandiValik = "";
		$(this).text("Anna punkt");
	}
});


$(document).ready(function () {
	/*
	* check browser supports local storage
	*/
	if (localStorage) {
	/*
	* if form field values exist in local storage use
	* them to populate the form when the page loads
	*/
	if (localStorage.gender) {
	$("#gender").find("option[value=" + localStorage.gender + "]").attr("selected", true);
	}
	if (localStorage.erakond) {
	$("#erakond").find("option[value=" + localStorage.erakond + "]").attr("selected", true);
	}
	if (localStorage.piirkond) {
	$("#piirkond").find("option[value=" + localStorage.piirkond + "]").attr("selected", true);
	}
	if (localStorage.name) {
	$("#name").val(localStorage.name);
	}
	if (localStorage.family) {
	$("#family").val(localStorage.family);
	}
	if (localStorage.email) {
	$("#email").val(localStorage.email);
	}
	if (localStorage.phone) {
	$("#phone").val(localStorage.phone);
	}
	if (localStorage.veeb) {
	$("#veeb").val(localStorage.veeb);
	}
	if (localStorage.message) {
	$("#message").val(localStorage.message);
	}
	if (localStorage.subscribe === "checked") {
	$("#subscribe").attr("checked", "checked");
	}
	/*
	* when a form field changes store it's value in local storage
	*/
	$("input[type=text],select,textarea").change(function(){
	$this = $(this);
	localStorage[$this.attr("name")] = $this.val();
	});
	$("input[type=checkbox]").change(function(){
	$this = $(this);
	localStorage[$this.attr("name")] = $this.attr("checked");
	});
	$("form")
	/*
	* clear local storage when the form is submitted
	*/
	.submit(function(){
	localStorage.clear();
	})
	/*
	* output local storage to the console each time the form changes
	* (you may want to remove this code on the production server)
	*/
	.change(function(){
	console.log(localStorage);
	});
	}
	});