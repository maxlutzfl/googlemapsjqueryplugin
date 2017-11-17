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
		{ lat: 1, lng: 1, infobox_data: { title: "", desc: "" } },
		{ lat: 2, lng: 2, infobox_data: { title: "", desc: "" } },
		{ lat: 3, lng: 3, infobox_data: { title: "", desc: "" } }
	]
	infobox_template: function(infobox_data) {
		return '<div> \
					<h1>' + infobox_data.title + '</h1> \
					<p>' + infobox_data.desc + '</p> \
				</div>';
	},
	on_infowindow_open: function(cb) {
		console.log(cb); // returns { i: index, infobox_data: infobox_data }
	},
	on_infowindow_close: function(cb) {
		
	},
	on_marker_click: function(cb) {
		
	}
});
```

```twig
{% for location in locations %}
	<li><a href="#" data-marker-trigger="{{ loop.index0 }}" data-location="{{ { 
		lat: 0, 
		lng: 0, 
		infowindow_data: { title: '': desc: '' } } 
	}}">{{ location.title }}</a></li>
{% endfor %}
```