// Load the Visualization API and the piechart package.
google.load('visualization', '1', {'packages':['table','corechart']});
// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(customCallBack);

var selleVandiValik = 2;
var screenName = "KeegiEiTea";

$(document).ready(function(){
    $("#left li").click(function(){
    	$("#pohi").empty();
    	var menuItem = $(this).attr("id")
    	$("#pohi").load(menuItem + ".html", function(response, status, xhr){
    		location.hash = menuItem;
    		if(window[menuItem + "_ready"]()) window[menuItem + "_ready"]();
    	});
    });
    
    //Load info

    if (location.hash != '') {
    	var menuItem = String(location.hash).substr(1);
    	$("#pohi").load(menuItem + ".html", function(response, status, xhr) {
    		if(window[menuItem + "_ready"]()) window[menuItem + "_ready"]();
    	});
    }
    else {
    	$("#pohi").load("info.html");
		location.hash = "info";
    }
});

function customCallBack(){
}
