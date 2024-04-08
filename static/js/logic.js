// Populate Year dropdown menu
for (let j = 1950; j < 2024; j++) {
    d3.select("#selYear").append("option").attr("value", j).text(j);
  };

// Populate States dropdown menu
// States JSON format from https://gist.github.com/mshafrir/2646763#file-states_titlecase-json
for (let i = 0; allstates.length; i++) {
    d3.select("#selState").append("option").attr("value", allstates[i]["abbreviation"]).text(allstates[i]["name"]);
  };

// Creating our initial map object:
// We set the longitude, latitude, and starting zoom level.
// This gets inserted into the div with an id of "map".
let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

let myMap = L.map("map", {
  center: [45.52, -122.67],
  zoom: 13,
  layers: [street]
});

// Adding a tile layer (the background map image) to our map:
// We use the addTo() method to add objects to our map.



  // function createMap() {
    
  //   // Create the base layers.
  // let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  // })

  // let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
  //   attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  // });


//   // Create layer group for earthquake markers
//   // let quakeLayer = L.layerGroup(earthquakeMarkers)

//   // Create a baseMaps object.
//   let baseMaps = {
//     "Street Map": street,
//     "Topographic Map": topo
//   };

//   // Create an overlay object to hold our overlay.
//   // let overlayMaps = {
//   //   Earthquakes: quakeLayer
//   // };

//   // Create our map, giving it the streetmap and earthquakes layers to display on load.
//   let myMap = L.map("map", {
//     center: [
//       37.09, -95.71
//     ],
//     zoom: 4,
//     layers: [street]
//   });

//   // Create a layer control.
// // Pass it our baseMaps and overlayMaps.
// // Add the layer control to the map.
// L.control.layers(baseMaps, 
//   overlayMaps, 
//   {collapsed: false}).addTo(myMap);
// }

// createMap()