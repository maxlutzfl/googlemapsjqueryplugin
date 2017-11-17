## Args
```
api_key (string)
lat (int)
lng (int)
zoom (int)
marker_icon (string)
marker_icon_w (int)
marker_icon_h (int)
styles (array) (https://snazzymaps.com/explore)
cluster (boolean)
markers (array)
infobox_template (function)
```

## Events
```
on_infowindow_open
on_infowindow_close
on_marker_click
```

## markers
```
markers: [
	{
		lat: {{ int }},
		lng: {{ int }},
		infobox_data: {
			arg1: "",
			arg2: "",
			arg3: ""
		}
	}
]
```

## infobox_template
```
infobox_template: function(args) {
	return '<div> \
				<h1>' + args.title + '</h1> \
				<p>' + args.desc + '</p> \
			</div>';
},
```
