module.exports = {
	dev: {
		files: [{
			expand: true,
			cwd: "<%= paths.binJS %>",
			src: ["beerOrJS.js"],
			dest: "<%= paths.binJS %>"
		}]
	}
};