
function init(){	
	var map = new L.Map('map', {center: new L.LatLng(40.73061, 1.17554), zoom: 7});
	map.options.maxZoom=15;
	var osm = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
	/*s'ha de descomentar per a tenir la capa de google activa*/
	var ggl = new L.Google();
	var ggl2 = new L.Google('TERRAIN');
	

	
	
	
	/*var orto25 = new L.tileLayer.wms("http://geoserveis.icc.cat/icc_mapesbase/wms/service", {
	    layers: 'orto25m',
	    format: 'image/png',
	    transparent: false,
	    version: '1.1.0',
	    //display:'none',
	    //maxZoom:12,
	    attribution: "© Base cartogràfica (ortofotografia) propietat de l'Institut Cartogràfic i Geològic de Catalunya, disponible a www.icgc.cat."
	});
	
	

	var orto5 = new L.tileLayer.wms("http://geoserveis.icc.cat/icc_mapesbase/wms/service", {
	    layers: 'orto5m',
	    format: 'image/png',
	    transparent: false,
	    version: '1.1.0',
	    //display:'none',
	    //maxZoom:12,
	    attribution: "© Base cartogràfica (ortofotografia) propietat de l'Institut Cartogràfic i Geològic de Catalunya, disponible a www.icgc.cat."
	});*/
		

	map.addLayer(osm);
	
	

	// LEGEND
        var legend = L.control({position: 'bottomright'});

        legend.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'info legend');

            div.innerHTML +=
            '<i style="background:red"></i>' + 'Trams senyalitzats (troncal)'+'</br>'+
	    '<i style="background:yellow"></i>' + 'Trams senyalitzats (brancals)'+'</br>'+
	    '<i style="background:orange"></i>' + 'Trams definits sobre mapa o GPS (no senyalitzats)'+'</br>'+
	    '<i style="background:green"></i>' + 'Trams en procés de definició'+'</br>'+	    
            '<i style="background:#383838"></i>' + 'Trams per definir'+'</br>'
	    ;

        return div;
        };

        legend.addTo(map);	

	
	var baseMaps = {	
		
		"OSM:":osm,
		"Google":ggl,
		"Google Terrain":ggl2,
		//"ICC":orto25,
	};
	L.control.layers(baseMaps).addTo(map);
	
	
	
	
	
	for(i=0;i<83;i++){
		//var nomTram = camins[i][0];
		//var nomCami = camins[i][1];
		
		var nomTram = new L.geoJson(camins[i][1],{
			style:{"color": camins[i][2], "dashArray":camins[i][3]},
			onEachFeature:function(feature,layer){
				layer.bindPopup(''+camins[i][4]);
			
			}
		}).addTo(map);
	        
	}

	
	

	L.control.scale(
		'bottomleft'
	).addTo(map);	
	

	

	

}
