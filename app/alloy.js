// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
Alloy.Globals.Map = require('ti.map');

Alloy.Globals.html_latitude = 41.8885867;
Alloy.Globals.html_longitude = 12.5894068;

if (OS_ANDROID) {
	var rc = Alloy.Globals.Map.isGooglePlayServicesAvailable();
	switch (rc) {
	case Alloy.Globals.Map.SUCCESS:
		Ti.API.info('Google Play services is installed.');
		break;
	case Alloy.Globals.Map.SERVICE_MISSING:
		alert('Google Play services is missing. Please install Google Play services from the Google Play store.');
		break;
	case Alloy.Globals.Map.SERVICE_VERSION_UPDATE_REQUIRED:
		alert('Google Play services is out of date. Please update Google Play services.');
		break;
	case Alloy.Globals.Map.SERVICE_DISABLED:
		alert('Google Play services is disabled. Please enable Google Play services.');
		break;
	case Alloy.Globals.Map.SERVICE_INVALID:
		alert('Google Play services cannot be authenticated. Reinstall Google Play services.');
		break;
	default:
		alert('Unknown error.');
		break;
	}
}