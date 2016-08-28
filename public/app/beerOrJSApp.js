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