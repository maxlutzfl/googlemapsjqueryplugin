# Google Maps jQuery Plugin

```js
var API_KEY = $('[data-map-api]').attr('data-map-api');
var MARKERS = getMarkers();

$('.map').bcore_google_maps({
	api_key: API_KEY,
	lat: 0,
	lng: 0,
	zoom: 13,
	marker_icon: 'marker.png',
	marker_icon_w: 20,
	marker_icon_h: 20,
	styles: [],
	cluster: true,
	markers: [
		{ lat: 1, lng: 1, infowindow_data: {  } },
		{ lat: 2, lng: 2, infowindow_data: {  } },
		{ lat: 3, lng: 3, infowindow_data: {  } }
	]
	infowindow_template: function(infowindow_data) {
		return '<div> \
					<h1>' + infowindow_data.title + '</h1> \
					<p>' + infowindow_data.desc + '</p> \
				</div>';
	},
	on_infowindow_open: function(cb) {  },
	on_infowindow_close: function(cb) {  },
	on_marker_click: function(cb) {  }
});

function getMarkers() {
	var markers = [];
	var locations = $('[data-marker-trigger]');
	for (var i = 0; i < locations.length; i++) {
		markers.push({
			lat: $(locations[i]).attr('data-marker-lat'),
			lng: $(locations[i]).attr('data-marker-lng'),
			infowindow_data: JSON.parse($(locations[i]).attr('data-marker-content'))
		});
	}
	return markers;
}
```

```twig
{% for location in locations %}
	<li><a href="#" data-marker-trigger="{{ loop.index0 }}" data-location="{{ 
		{ 
			lat: 0, 
			lng: 0, 
			infowindow_data: { title: '': desc: '' }
		}|stringify 
	}}">{{ location.title }}</a></li>
{% endfor %}
```


### Consider adding
```scss
// Outer Container
.gm-style-iw-container {
	width: 320px !important;
	padding: 15px !important;
	height: auto !important;

	* {
		box-sizing: border-box !important;
	}

	> div:first-child { 
		
		// Drop Shadow
		> div:nth-child(2) {
			width: 322px !important;
		}
			
		// White Container
		> div:last-child {
			width: 320px !important;
			padding: 15px !important;
		}
	}
}

.gm-style-iw {
	position: relative !important;
	top: 0 !important;
	left: 0 !important;
	right: 0 !important;
	width: 100% !important;

	> div:first-child {
		display: block !important;
		max-height: none !important;
	}

	img {
		width: 100% !important;
	}

	+ div {
		display: none !important;
	}
}
```