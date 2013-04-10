function haaleta_ready() {
    $.getJSON("uustest", function (data) {
        $.each(data, function (i, k) {
           
                info = '<div id="kandidaat">' +
                    '<div id="piltjatekst">' +
                    '<div id="pilt">' +
                    '<img alt="Andrus Ansip" src="view/images/kandidaadid/andrus.jpg">' +
                    '</div>' +

                    '<div id="andmed">' +
                    '<p>Nimi: ' + k.eesnimi + '</p>' +
                    '<p>Perenimi: ' + k.perenimi + '</p>' +
                    '<p>Maakond: ' + k.maakond + '</p>' +
                    '</div>' +
                    '</div>' +
                    '<div id="nupp">' +
                    '<form><input type="checkbox" name="fakeh22l" value="h22l"></form>'+
                    '</div>' +
                    '</div>';
                $(info).appendTo("#boxisisu");
            
        });
    });

};

function showStuff(id) {
document.getElementById(id).style.display = 'block';
}
function hideStuff(id) {
document.getElementById(id).style.display = 'none';
}

