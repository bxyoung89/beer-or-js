module.exports = function (grunt) {

	var base = "public";
	var bowerFolder = "public/js/lib/bowerDependencies";

	// Load grunt tasks automatically
	require("load-grunt-config")(grunt, {
		data: {
			paths: {
				base: base,
				bin: base + "/bin",
				binJs: base + "/bin/js",
				binCss: base + "/bin/css",

				cssSrc: base + "/css",
				jsSrc: base + "/js",

				appSrc: base +"/app",

				libJsSrc: base + "/js/lib"
			},
			bowerJsFiles: {
				angular: bowerFolder+"/angular/angular.js",
				angularRoute: bowerFolder+"/angular-route/angular-route.js",
				sugar: bowerFolder+"/sugar/release/sugar-full.min.js",
			}
		}
	});
};