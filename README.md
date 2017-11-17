# Google Maps jQuery Plugin

```js
$('.map').bcore_google_maps({
	api_key: "fhaskjehfkajsehfkjhse",
	lat: 0,
	lng: 0,
	zoom: 13,
	marker_icon: 'marker.png',
	marker_icon_w: 20,
	marker_icon_h: 20,
	styles: [
		{ find_awesome_styles_here: "https://snazzymaps.com/explore" }
	],
	cluster: true,
	markers: [
		{ lat: 1, lng: 1, infowindow_data: { title: "", desc: "" } },
		{ lat: 2, lng: 2, infowindow_data: { title: "", desc: "" } },
		{ lat: 3, lng: 3, infowindow_data: { title: "", desc: "" } }
	]
	infowindow_template: function(infowindow_data) {
		return '<div> \
					<h1>' + infowindow_data.title + '</h1> \
					<p>' + infowindow_data.desc + '</p> \
				</div>';
	},
	on_infowindow_open: function(cb) {
		console.log(cb); // returns { i: index, infowindow_data: infowindow_data }
	},
	on_infowindow_close: function(cb) {
		
	},
	on_marker_click: function(cb) {
		
	}
});
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