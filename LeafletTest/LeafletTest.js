// Leaflet js

// For original London map use 51, -0.0
var north = 51
var east = -0.0

//////////////////////////////////////////////////////////////////////////////
// define map
//////////////////////////////////////////////////////////////////////////////

var map = L.map('map').setView([north + 0.505, east - 0.09], 13);

// open streetmap
// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

var USGS_USTopo = L.tileLayer('https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}', {
	maxZoom: 20,
	attribution: 'Tiles courtesy of the <a href="https://usgs.gov/">U.S. Geological Survey</a>'
});

//////////////////////////////////////////////////////////////////////////////
//  markers
//////////////////////////////////////////////////////////////////////////////

//  marker
var marker = L.marker([north + 0.5, east - 0.09]).addTo(map);

//  circle
var circle = L.circle([north + 0.508, east - 0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

// polygon
var polygon = L.polygon([
    [north + 0.509, east - 0.08],
    [north + 0.503, east - 0.06],
    [north + 0.51, east - 0.047]
]).addTo(map);


//////////////////////////////////////////////////////////////////////////////
// popups 
//////////////////////////////////////////////////////////////////////////////

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

var popup = L.popup()
    .setLatLng([north + 0.513, east - 0.09])
    .setContent("I am a standalone popup.")
    .openOn(map);

//////////////////////////////////////////////////////////////////////////////
// popup version click on map
//////////////////////////////////////////////////////////////////////////////

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

//////////////////////////////////////////////////////////////////////////////
// alert version of click on map
//////////////////////////////////////////////////////////////////////////////

// alert version of click on map
// function onMapClick(e) {
//     alert("You clicked the map at " + e.latlng);
// }

// map.on('click', onMapClick);

// supposed to work to import gjs data, doesn't
// fetch(
//     polyData
//   ).then(
//     res => res.json()
//   ).then(
//     data => L.geoJSON(data).addTo(map)
//   )
// L.geoJSON(reaches).addTo(map)


// L.geoJson()
// L.geoJSON(polyData).addTo(map);
// var polyj = L.geoJSON(polyData).addTo(map)

// define geoJson data
// var polyData = "D:/mpoed/coding_envs/Repos/WebDev/Testing/MohawkFourReaches.geojson";