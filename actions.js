// actions.js {}
$(document).ready(function(e) {
	document.addEventListener("deviceready",function(){
	var onSuccess = function(position) {
    initialize(position.coords.latitude,position.coords.longitude);
};
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);
},false);	
});


function initialize(lat,long) {
				//Posición del mapa
				var latlng = new google.maps.LatLng(lat,long);
				var myOptions = {
					zoom: 16,
					center: latlng,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};
				var map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
				//Marcador
				var marker = new google.maps.Marker({
					position: latlng, 
					map: map, 
					title:"OperadoraFQS"
				});
			}