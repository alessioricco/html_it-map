var annotation = Alloy.Globals.Map.createAnnotation({
	title : "html.it",
	subtitle : "HTML.it: corsi, guide, articoli e script",
	latitude : Alloy.Globals.html_latitude,
	longitude : Alloy.Globals.html_longitude,
	rightButton : "images/logo.png",
	// questa proprietà viene aggiunta per gestire l'evento click
	url : "http://www.html.it"
});
$.map.addAnnotation(annotation);

annotation.addEventListener("click", mapClick);

function mapClick(e) {

	Ti.API.info(JSON.stringify(e));

	if (e.annotation == null) {
		return;
	}
	if (e.clicksource != "rightButton") {
		return;
	}

	var url = e.annotation.url;
	if (url.length > 0) {
		Ti.Platform.openURL(url);
	}
}

function here() {
	Ti.Geolocation.getCurrentPosition(function(e) {
		
		Ti.API.info(JSON.stringify(e));
		
		if (e.success) {
			
			if (! e.coords) return;
			
			var lat = e.coords.latitude;
			var lon = e.coords.longitude;
			$.map.region = {
				latitude : lat,
				latitudeDelta : 0.05,
				longitude : lon,
				longitudeDelta : 0.05
			};

			var tmpAnnotation = Alloy.Globals.Map.createAnnotation({
				title : "La mia posizione",
				subtitle : lat + " " + lon,
				latitude : lat,
				longitude : lon,
			});
			$.map.addAnnotation(tmpAnnotation);

		}
	});
}

function html_it() {
	$.map.region = {
		latitude : Alloy.Globals.html_latitude,
		latitudeDelta : 0.05,
		longitude : Alloy.Globals.html_longitude,
		longitudeDelta : 0.05
	};
}

$.index.open();
