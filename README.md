## Args
```js
api_key: "string",
lat: 0,
lng: 0,
zoom: 13,
marker_icon: 'marker.png',
marker_icon_w: 20,
marker_icon_h: 20,
styles: [
	find_awesome_styles_here: "https://snazzymaps.com/explore"
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
	
},
on_infowindow_close: function(cb) {
	
},
on_marker_click: function(cb) {
	
}
```