$(document).ready(function loca(){

  var tempF;
  var tempC;
  var city;
  var zip;
  var country;
  var lon;
  var lat;
  var state;

var api_1 = "http://ip-api.com/json";
  $.getJSON(api_1, function vars(obj) {
  console.log(obj);
  zip = obj.zip;
  city = obj.city;
  country = obj.countryCode;
  lon = obj.lon;
  lat = obj.lat;
  state = obj.regionName;



var api = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=e5e62079a2fcfa4112afa14c181597e1";
  $.getJSON(api, function(data){

    var kel = data.main.temp;
    tempF = Math.round(1.8*(kel - 273) + 32);
    tempC = Math.round((5/9)*(tempF - 32));

    setInterval(function(){
      $("#iconW").html("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png' alt='Icon depicting current weather.'>");
    }, 2000);

    $("#tempC").html(tempC);
    $("#temp").html(tempF + "&deg;F");
    $("#loc").html(city +"<br>" +state);


    console.log(api);
    console.log(api_1);
    console.log(city);
    console.log(zip);
    console.log(country);
    console.log(tempF);
    console.log(lon);
    console.log(lat);
    console.log(state);
    });
  });
  var toggleC = false;

  $("#cToF").on("click", function() {
      if (toggleC == true) {
        toggleC = false;
        $("#temp").html(tempF + "&deg;F");
      } else if (toggleC == false) {
        toggleC = true;
        $("#temp").html(tempC + "&deg;C");
      }
    });
});

(function () {

  var time = document.getElementById( "clock" );

  function updateClock ( data ) {
    clock.innerHTML = new Date().toLocaleTimeString();
  }

  setInterval(function () {
      updateClock( time );
  }, 1000);

}());
