$(document).ready(function () {
    $.getJSON("uustest", function (data) {
        $.each(data, function (key, val) {
           
                info = '<div id="kandidaat">' +
                    '<div id="piltjatekst">' +
                    '<div id="pilt">' +
                    '<img alt="Andrus Ansip" src="view/images/kandidaadid/andrus.jpg">' +
                    '</div>' +

                    '<div id="andmed">' +
                    '<p>Nimi: ' + val + '</p>' +
                    '<p>Perenimi: ' + val + '</p>' +
                    '<p>Maakond: ' + val + '</p>' +
                    '</div>' +
                    '</div>' +
                    '<div id="nupp">' +
                    '<form><input type="checkbox" name="fakeh22l" value="h22l"></form>'+
                    '</div>' +
                    '</div>';
                $(info).appendTo("#boxisisu");
            
        });
    });

});

function showStuff(id) {
document.getElementById(id).style.display = 'block';
}
function hideStuff(id) {
document.getElementById(id).style.display = 'none';
}

