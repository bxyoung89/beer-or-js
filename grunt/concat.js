module.exports = {
	options: {
		sourceMap: true
	},
	dev: {
		src: [
			".tmp/dev-templates.js",
			"<%= paths.appSrc %>/beerOrJSApp.js",
			"<%= paths.appSrc %>/services/**/*.js",
			"<%= paths.appSrc %>/features/**/*.js"
		],
		dest: "<%= paths.binJs %>/beerOrJS.js"
	},
	lib: {
		src: [
			"<%= bowerJsFiles.angular %>",
			"<%= bowerJsFiles.angularRoute %>",
			"<%= bowerJsFiles.sugar %>"
		],
		dest: "<%= paths.binJs %>/lib.js"
	}
};