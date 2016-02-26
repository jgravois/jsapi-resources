define([
  "esri/map",
  "esri/dijit/Measurement",
  "esri/layers/FeatureLayer",
  "dojo/domReady!"
], function (
  Map, Measurement, FeatureLayer
) {
  var map = new Map("map-area", {
    basemap: "dark-gray",
    center: [-119.11, 36.65],
    zoom: 7,
    minZoom: 7,
    maxZoom: 9
  });

  var states = new FeatureLayer("http://services1.arcgis.com/4yjifSiIG17X0gW4/arcgis/rest/services/Alternative_Fuel_Stations/FeatureServer/2");
  map.addLayer(states);

  map.on('load', function() {
    var measurement = new Measurement({
      map: map
    }, document.getElementById('measureDiv'));
    measurement.startup();
  });
});
