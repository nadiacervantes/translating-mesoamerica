---
layout: default-en
---
  <!-- Leaflet -->
   <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
     integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
     crossorigin=""/>
   <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
     integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
     crossorigin=""></script>
     
   <style>
   #mapmenu {background: white; font-size:0.8em;padding:1em;}
   #mapmenu ul { margin:0px; padding:0px; }
   #mapmenu ul li { list-style-type:none;; }
   .colorsquare { width: 32px; height:20px;background:green;display:inline-block;margin-right:1em; }
   .icon {}
   </style>
     
     
<div class='container'>
     <div class="row">
	      
		<div class="col-md-12">
<h2>Map</h2>

<div id="mapframe" style="display:flex;flex-wrap:nowrap;">
<div id="map" style="width:80%;height:700px;"></div>
<div id="mapmenu" style="width:20%">
  <ul></ul>
</div>
</div>
<script>

jQuery(document).ready(function(){


var colors = ["#df0119","#3d3d3d","#a53636","#d7b58a","#649d9f","#f28258","#106a10","#f28e10","#91b991","#51478d","#2b92f2","#d4a42d","#aec0d8"];

const myCustomColour = '#700'





var locs = [];

const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

const map = L.map('map', {
	center: [17.197435967112632, -95.60086982775229],
	zoom: 6,
	layers: [osm]
});

jQuery.getJSON("/translating-mesoamerica/assets/locations.json", function( data ) {
  jQuery.each(data, function(i,v){
  


var markerHtmlStyles = `
  background-color: ${colors[i]};
  width: 2rem;
  height: 2rem;
  display: block;
  left: -1rem;
  top: -1rem;
  position: relative;
  border-radius: 2rem 2rem 0;
  transform: rotate(45deg);
  border: 1px solid #FFFFFF`

var myIcon = L.divIcon({className: "my-custom-pin",iconAnchor: [0, 24],labelAnchor: [-6, 0],popupAnchor: [0, -36],html: `<span style="${markerHtmlStyles}" />`})

     jQuery("#mapmenu ul").append("<li><span class='colorsquare'></span>"+v.layer+"</li>");
  
  
      jQuery.each(v.locations, function(j,k){
         var latlng = k.coordinates.split(',');
         L.marker(latlng, { icon: myIcon }).bindPopup(k.title).addTo(map);
      });
      
  });

});


});





</script>
  
		</div>
	</div> <!-- /.row -->
</div> <!-- /.container -->


