$(document).ready(function () {
    $.getJSON("data/otsi.json", function (data) {
        $("#button").click(function () {
            $.each(data.kandidaat, function (i, kandidaat) {
                $('#kandidaadibox').remove();
            });
        })
    });
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






$(document).ready(function () {
    $("#button").click(function () {

        $.getJSON("data/otsi.json", function (data) {
            $('select#select').ready(function () {
                var selected = $(this).find('#select option:selected');
                var test = selected.val();


                $('select#valik').ready(function () {
                    var selected1 = $(this).find('#valik option:selected');
                    var test1 = selected1.val();


                    $.each(data.kandidaat, function (i, kandidaat) {
                        if (test != 'All' && test1 == 'All') {
                            if (kandidaat.erakond == test) {
                                info = '<div id="kandidaadibox">' +
                                    '<div id="kandidaadipilt">' +
                                    '<img alt="Andrus Ansip" src="view/images/kandidaadid/andrus.jpg">' +
                                    '</div>' +
                                    '<div id="kandidaadiandmed">' +
                                    '<p>Nimi: ' + kandidaat.nimi + '</p>' +
                                    '<p>Asukoht: ' + kandidaat.location + '</p>' +
                                    '<p>Erakond: ' + kandidaat.erakond + '</p>' +
                                    '<p>Lisainfo: ' + kandidaat.lisainfo + '</p>' +

                                    '</div>' +
                                    '</div>' +
                                    '</div>';
                                $(info).appendTo("#boxisisu");
                            }
                        }

                        if (test == 'All' && test1 != 'All') {
                            if (kandidaat.location == test1) {
                                info = '<div id="kandidaadibox">' +
                                    '<div id="kandidaadipilt">' +
                                    '<img alt="Andrus Ansip" src="view/images/kandidaadid/andrus.jpg">' +
                                    '</div>' +
                                    '<div id="kandidaadiandmed">' +
                                    '<p>Nimi: ' + kandidaat.nimi + '</p>' +
                                    '<p>Asukoht: ' + kandidaat.location + '</p>' +
                                    '<p>Erakond: ' + kandidaat.erakond + '</p>' +
                                    '<p>Lisainfo: ' + kandidaat.lisainfo + '</p>' +

                                    '</div>' +
                                    '</div>' +
                                    '</div>';
                                $(info).appendTo("#boxisisu");
                            }
                        }

                        if (test != 'All' && test1 != 'All') {
                            if (kandidaat.location == test1 && kandidaat.erakond == test) {
                                info = '<div id="kandidaadibox">' +
                                    '<div id="kandidaadipilt">' +
                                    '<img alt="Andrus Ansip" src="view/images/kandidaadid/andrus.jpg">' +
                                    '</div>' +
                                    '<div id="kandidaadiandmed">' +
                                    '<p>Nimi: ' + kandidaat.nimi + '</p>' +
                                    '<p>Asukoht: ' + kandidaat.location + '</p>' +
                                    '<p>Erakond: ' + kandidaat.erakond + '</p>' +
                                    '<p>Lisainfo: ' + kandidaat.lisainfo + '</p>' +

                                    '</div>' +
                                    '</div>' +
                                    '</div>';
                                $(info).appendTo("#boxisisu");
                            }
                        } else if (test == 'All' && test1 == 'All') {
                            info = '<div id="kandidaadibox">' +
                                '<div id="kandidaadipilt">' +
                                '<img alt="Andrus Ansip" src="view/images/kandidaadid/andrus.jpg">' +
                                '</div>' +
                                '<div id="kandidaadiandmed">' +
                                '<p>Nimi: ' + kandidaat.nimi + '</p>' +
                                '<p>Asukoht: ' + kandidaat.location + '</p>' +
                                '<p>Erakond: ' + kandidaat.erakond + '</p>' +
                                '<p>Lisainfo: ' + kandidaat.lisainfo + '</p>' +

                                '</div>' +
                                '</div>' +
                                '</div>';
                            $(info).appendTo("#boxisisu");

                        }
                    });
                });

            });
        })
    });
});