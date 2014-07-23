





function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
    	$('#b_loca').text(' Not Supported');
    }
}

function showPosition() {
	    navigator.geolocation.getCurrentPosition(function(position) {
	        $.getJSON('http://ws.geonames.org/countryCode', {
	            lat: position.coords.latitude,
	            lng: position.coords.longitude,
	            type: 'JSON',
	            username:'demo'
	        }, function(result) {
	        	$('#loc_lat').text(position.coords.latitude);
	        	$('#loc_long').text(position.coords.longitude);

	        	$("#loc_country").text(result.countryName);
	            // alert('Country: ' + result.countryName + '\n' + 'Code: ' + result.countryCode);
	        });
	    });
}

$(document).ready(function(){
	showPosition();

	$.get("http://ipinfo.io", function(response) {
		$('#ipinfo_country').text(response.country);
	    // console.log(response.city, response.country);
	}, "jsonp");


});
