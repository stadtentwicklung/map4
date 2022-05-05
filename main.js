/* **** Leaflet **** */

// Base layers
//  .. OpenStreetMap
var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors', minZoom: 12, maxZoom: 25});

//  .. White background
//var white = L.tileLayer("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAAQMAAABmvDolAAAAA1BMVEX///+nxBvIAAAAH0lEQVQYGe3BAQ0AAADCIPunfg43YAAAAAAAAAAA5wIhAAAB9aK9BAAAAABJRU5ErkJggg==", {minZoom: 12, maxZoom: 16});

// Overlay layers (TMS)
var lyr = L.tileLayer('./{z}/{x}/{y}.png', {tms: true, opacity: 1, attribution: "&copy; Stadtentwicklung CB 2021", minZoom: 12, maxZoom: 25});

// GPX-Track
// Create Track with https://routing.openstreetmap.de/ 
var gpx = 'https://raw.githubusercontent.com/stadtentwicklung/map4/main/track/route.gpx'; // URL to your GPX file or the GPX itself
var track = new L.GPX(gpx, {
	async: true,
	marker_options: {
		startIconUrl: 'https://raw.githubusercontent.com/mpetazzoni/leaflet-gpx/main/pin-icon-start.png',
		endIconUrl: 'https://raw.githubusercontent.com/mpetazzoni/leaflet-gpx/main/pin-icon-end.png',
		wptIconUrls: 'https://raw.githubusercontent.com/mpetazzoni/leaflet-gpx/main/pin-icon-wpt.png',
		shadowUrl: 'https://raw.githubusercontent.com/mpetazzoni/leaflet-gpx/main/pin-shadow.png'
	},
	polyline_options: {
		color: 'red',
		opacity: 1,
		weight: 6,
		lineCap: 'round'
	}
}).on('loaded', function(e) {
	map.fitBounds(e.target.getBounds());
});

// Map
var map = L.map('map', {
    center: [51.727501287145, 14.324939214489],
	zoom: 12,
    minZoom: 12,
    maxZoom: 25,
    layers: [osm, track],
	loadingControl: true
});

var basemaps = {"OpenStreetMap": osm}
var overlaymaps = {"Route": track}

// Title
var title = L.control();
title.onAdd = function(map) {
    this._div = L.DomUtil.create('div', 'ctl title');
    this.update();
    return this._div;
};
title.update = function(props) {
    this._div.innerHTML = "Stadtteilrundgang Sachsendorf";
};
title.addTo(map);

// Add base layers
L.control.layers(basemaps, overlaymaps, {collapsed: false}).addTo(map);

// Fit to overlay bounds (SW and NE points with (lat, lon))
//map.fitBounds([[51.73538626510637, 14.358582223434118], [51.78209881565247, 14.30522229550299]]);
		
// LOCATING
		
function onLocationFound(e) {
    // var radius = e.accuracy / 2; /*Radius um den Marker*/
    var location = e.latlng
    L.marker(location).addTo(map).bindPopup("Du bist ungef&auml;hr hier.").openPopup();
    // L.circle(location, radius).addTo(map); /*Kreis zeigen*/
};

function onLocationError(e) {
	alert(e.message);
};

function getLocationLeaflet() {
	map.on('locationfound', onLocationFound);
	map.on('locationerror', onLocationError);
	map.locate({setView: true, maxZoom: 25});
};