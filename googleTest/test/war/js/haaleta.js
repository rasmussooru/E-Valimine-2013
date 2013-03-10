$(document).ready(function () {
    $.getJSON("data/test.json", function (data) {
        $.each(data.kandidaat, function (i, kandidaat) {
            if (kandidaat.location == 'Tartumaa') {
                info = '<div id="kandidaat">' +
                    '<div id="piltjatekst">' +
                    '<div id="pilt">' +
                    '<img alt="Andrus Ansip" src="view/images/kandidaadid/andrus.jpg">' +
                    '</div>' +

                    '<div id="andmed">' +
                    '<p>Nimi: ' + kandidaat.firstName + '</p>' +
                    '<p>Perenimi: ' + kandidaat.lastName + '</p>' +
                    '<p>Maakond: ' + kandidaat.location + '</p>' +
                    '</div>' +
                    '</div>' +
                    '<div id="nupp">' +
                    '<button class="submit" type="submit">H&auml;&auml;leta</button>' +
                    '</div>' +
                    '</div>';
                $(info).appendTo("#boxisisu");
            }
        });
    });

});