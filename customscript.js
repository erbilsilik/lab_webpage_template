function myMap() {
  var amsterdam = new google.maps.LatLng(52.395715,4.888916);

  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: amsterdam, zoom: 15};
  var map = new google.maps.Map(mapCanvas,mapOptions);

  var myCity = new google.maps.Circle({
    center: amsterdam,
    radius: 50000,
    strokeColor: "#0000FF",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#0000FF",
    fillOpacity: 0.4
  });
  myCity.setMap(map);
}