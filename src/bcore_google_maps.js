$.fn.bcore_google_maps = function(args) {
		
	return this.each(function(index) {

		var container = this;
		var googleapi = 'https://maps.googleapis.com/maps/api/js?key=' + args.api_key;
		var googleapi_cluster = 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js';

		$.getScript(googleapi, function() {

			var options = {
				scrollwheel: false,
				center: new google.maps.LatLng(args.lat, args.lng),
				zoom: args.zoom,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				styles: args.styles,
			}

			var map = new google.maps.Map(container, options);

			var bounds = new google.maps.LatLngBounds();

			var infowindow = new google.maps.InfoWindow({
				buttons: { 
					close: { visible: false }  
				} 
			});

			var icon = {
				url: args.marker_icon,
				size: new google.maps.Size(args.marker_icon_w, args.marker_icon_h),
				scaledSize: new google.maps.Size(args.marker_icon_w, args.marker_icon_h)
			};

			var marker;
			var markers = [];

			for (var i = 0; i < args.markers.length; i++) { 

				marker = new google.maps.Marker({
					animation: google.maps.Animation.DROP,
					position: new google.maps.LatLng(args.markers[i].lat, args.markers[i].lng),
					map: map,
					icon: icon,
				});

				markers.push(marker);

				bounds.extend(marker.position);

				var openInfoWindow = (function(marker, i) {

					return function() {

						if (infowindow.opened) {
							args.on_infowindow_close({
								i: infowindow.i
							});
							infowindow.opened = false;
							infowindow.close();
						}

						infowindow.i = i;
						infowindow.opened = true;
						infowindow.infobox_data = args.markers[i].infobox_data;
						infowindow.setContent(args.infobox_template(args.markers[i].infobox_data));
						infowindow.open(map, marker);
						args.on_infowindow_open({
							i: infowindow.i,
							marker: args.markers[i]
						});
					}
				})(marker, i);


				marker.addListener('mouseover', openInfoWindow);

				var closeInfoWindow = function(event) {

					if (infowindow.opened) {
						args.on_infowindow_close({
							i: infowindow.i
						});
						infowindow.opened = false;
						infowindow.close();
					}
				};

				marker.addListener('mouseout', closeInfoWindow);

				var markerClick = function() {
					args.on_marker_click({
						i: infowindow.i,
						infobox_data: infowindow.infobox_data
					});
				}

				marker.addListener('click', markerClick);

				if (document.querySelector('[data-marker-trigger="' + i + '"]')) {
					document.querySelector('[data-marker-trigger="' + i + '"]').addEventListener('mouseover', openInfoWindow);
					document.querySelector('[data-marker-trigger="' + i + '"]').addEventListener('mouseout', closeInfoWindow);
					document.querySelector('[data-marker-trigger="' + i + '"]').addEventListener('click', markerClick);
				}

			}

			if (args.cluster) {

				$.getScript(googleapi_cluster, function() {

					var clusterOptions = {
						gridSize: 40,
						maxZoom: 15,
						styles: [{
							width: 40,
							height: 40,
							url: 'data:image/svg+xml;base64,' + window.btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path fill="#333333" stroke="#333333" stroke-width="10" stroke-opacity="0.25" d="M15,5c5.524,0,10,4.478,10,10s-4.478,10-10,10S5,20.522,5,15S9.478,5,15,5z"/></svg>'),
							textColor: 'white',
							textSize: 13
						}]
					}

					var markerCluster = new MarkerClusterer(map, markers, clusterOptions);
				});
			}

			map.fitBounds(bounds);
		});
	});
}