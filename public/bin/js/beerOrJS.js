angular.module('Templates', ['app/features/donePage/donePage.html', 'app/features/questionsPage/questionsPage.html', 'app/features/welcomePage/welcomePage.html']);

angular.module("app/features/donePage/donePage.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/features/donePage/donePage.html",
    "<div class=done-page>I am done</div>");
}]);

angular.module("app/features/questionsPage/questionsPage.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/features/questionsPage/questionsPage.html",
    "<div class=questions-page>You will answer my questions</div>");
}]);

angular.module("app/features/welcomePage/welcomePage.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/features/welcomePage/welcomePage.html",
    "<div class=welcome-page>Hello!</div>");
}]);

angular.module("BeerOrJS", ["Templates", "ngRoute"])
	.config(["$routeProvider", function($routeProvider){
		$routeProvider.when("/", {
			templateUrl: "public/app/features/welcomePage/welcomePage.html",
			controller: "welcomePageController",
			reloadOnSearch: false
		});
		$routeProvider.when("/questions", {
			templateUrl: "public/app/features/questionsPage/questionsPage.html",
			controller: "questionsPageController",
			reloadOnSearch: false
		});
		$routeProvider.when("/done", {
			templateUrl: "public/app/features/donePage/donePage.html",
			controller: "donePageController",
			reloadOnSearch: false
		});
		$routeProvider.otherwise({redirectTo: "/"});
	}]);
angular.module("BeerOrJS").service("guidService", function () {

	function GuidService() {
	}

	GuidService.prototype.newGuid = function () {
		return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
			s4() + '-' + s4() + s4() + s4();
	};

	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	}

	return new GuidService();
});
angular.module("BeerOrJS").controller("donePageController", [
	"$scope",
	function ($scope) {

	}]);
angular.module("BeerOrJS").controller("questionsPageController", [
	"$scope",
	function ($scope) {

	}]);
angular.module("BeerOrJS").controller("welcomePageController", [
	"$scope",
	function ($scope) {

	}]);
//# sourceMappingURL=beerOrJS.js.map