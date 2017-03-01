$(document).ready(function(){
  var long;
  var lat;
  var temp;

var api = "http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=e5e62079a2fcfa4112afa14c181597e1";

  $.getJSON(api, function(data){
    alert("Your current location is " + data.coord.lat +" "+ data.coord.lon);
  });
});
