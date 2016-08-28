angular.module('Templates', ['app/features/donePage/donePage.html', 'app/features/questionAnswer/questionAnswer.html', 'app/features/questionsPage/questionsPage.html', 'app/features/welcomePage/welcomePage.html']);

angular.module("app/features/donePage/donePage.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/features/donePage/donePage.html",
    "<div class=done-page><div class=done-page-title>You got <span>{{totalCorrect}}</span> correct of <span>{{total}}</span></div><div class=done-page-body>{{score.text}}</div></div>");
}]);

angular.module("app/features/questionAnswer/questionAnswer.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/features/questionAnswer/questionAnswer.html",
    "<div class=question-answer><div class=question-answer-header>{{data.name}}</div><a class=question-answer-link href={{data.link}} target=_blank>Website</a><div class=question-answer-content><div class=question-answer-description>{{data.description}}</div><div class=question-answer-image><img ng-src={{data.image}}></div></div><button class=question-answer-button ng-click=nextClick()><span ng-if=isLastQuestion>Done</span> <span ng-if=!isLastQuestion>Next</span></button></div>");
}]);

angular.module("app/features/questionsPage/questionsPage.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/features/questionsPage/questionsPage.html",
    "<div class=questions-page><div class=\"question-page-section question-page-beer-section\" style=\"background-image: url('public/images/beer.jpg')\" ng-class=\"{'answered': answered, 'correct': currentQuestion.isBeer}\"><div class=question-page-section-title>BEER</div><div class=question-page-section-answer-wrapper ng-if=\"answered && currentQuestion.isBeer\"><question-answer data-data=currentQuestion is-last-question=isLastQuestion next-click=nextClick></question-answer></div><button class=question-page-section-button ng-click=chooseBeer() ng-if=!answered></button></div><div class=\"question-page-section question-page-javascript-section\" style=\"background-image: url('public/images/javascript.jpg')\" ng-class=\"{'answered': answered, 'correct': currentQuestion.isJS}\"><div class=question-page-section-title>Javascript</div><div class=question-page-section-answer-wrapper ng-if=\"answered && currentQuestion.isJS\"><question-answer data-data=currentQuestion is-last-question=isLastQuestion next-click=nextClick></question-answer></div><button class=question-page-section-button ng-click=chooseJavascript() ng-if=!answered></button></div><div class=question-page-name ng-if=!answered>What is <span>{{currentQuestion.name}}</span>?</div></div>");
}]);

angular.module("app/features/welcomePage/welcomePage.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/features/welcomePage/welcomePage.html",
    "<div class=welcome-page><div class=welcome-page-title><span class=welcome-page-title-beer>BEER</span> or <span class=welcome-page-title-javascript>Javascript</span>?</div><div class=welcome-page-body>Waddup playas? I know you been trackin all these wack names for brews, code, and other shit. Time to test yo knowledge son! See how many of these dope rhymes you can kick to prove yo'self as true lover of brew and code!</div><div class=welcome-page-link-wrapper><a class=welcome-page-link href=#/questions>Let's Get Started!</a></div></div>");
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
angular.module("BeerOrJS").service("questionService", [
	"$sce",
	function($sce){

	var questions = [
		{
			name: "Velocity",
			isBeer: false,
			isJS: true,
			description: "Velocity is an animation engine with the same API as jQuery's $.animate(). It works with and without jQuery. It's incredibly fast, and it features color animation, transforms, loops, easings, SVG support, and scrolling. It is the best of jQuery and CSS transitions combined.",
			image: $sce.trustAsResourceUrl("public/images/questions/velocity-js.png"),
			link: $sce.trustAsResourceUrl("http://velocityjs.org/")
		},
		{
			name: "Golden Monkey",
			isBeer: true,
			isJS: false,
			description: "Strong and sensual, this golden Belgian-style ale glows with goodness. The richness of imported malts and Belgian yeast are tempered by a sparkling approach and overall light body. Considerable depth of character with abundant, herbal, fruity notes make this one to savor.",
			image: $sce.trustAsResourceUrl("public/images/questions/golden monkey.png"),
			link: $sce.trustAsResourceUrl("http://www.victorybeer.com/beers/golden-monkey/")
		}
	];

	function QuestionService(){}

	QuestionService.prototype.getQuestions = function(){
		return questions;
	};




	return new QuestionService();
}]);
angular.module("BeerOrJS").service("scoreService", [
	"$sce",
	function ($sce) {
		var total = 0;
		var totalCorrect = 0;

		var scores = [
			{
				isInScore: function(percentage){
					return percentage === 0;
				},
				text: "Getcho ass to school. You need some knowledge!"
			},
			{
				isInScore: function(percentage){
					return percentage === 100;
				},
				text: "Damn son, you know yo' shit! I'm in the presence of a masta!"
			}
		];

		function ScoreService() {
		}

		ScoreService.prototype.setTotal = function (t) {
			total = t;
		};

		ScoreService.prototype.addCorrect = function(){
			totalCorrect += 1;
		};

		ScoreService.prototype.getTotal = function () {
			return total;
		};

		ScoreService.prototype.getTotalCorrect = function () {
			return totalCorrect;
		};

		ScoreService.prototype.getFinalScore = function(){
			var percentage = Math.round((totalCorrect/total)*100);
			return scores.find(function(score){
				return score.isInScore(percentage);
			})
		};


		return new ScoreService();
	}]);
angular.module("BeerOrJS").controller("donePageController", [
	"$scope",
	"scoreService",
	function ($scope, scoreService) {
		$scope.totalCorrect = scoreService.getTotalCorrect();
		$scope.total = scoreService.getTotal();
		$scope.score = scoreService.getFinalScore();
	}]);
angular.module("BeerOrJS").directive("questionAnswer", [function(){

	function link($scope){

	}

	return {
		restrict: "E",
		templateUrl: "public/app/features/questionAnswer/questionAnswer.html",
		link: link,
		scope: {
			data:"=",
			isLastQuestion:"=",
			nextClick:"="
		}
	};

}]);
angular.module("BeerOrJS").controller("questionsPageController", [
	"$scope",
	"$location",
	"questionService",
	"scoreService",
	function ($scope, $location, questionService, scoreService) {
		var questions = questionService.getQuestions();
		scoreService.setTotal(questions.length);

		$scope.answered = false;
		$scope.currentQuestion = questions[0];
		$scope.isLastQuestion = questions.length === 1;

		$scope.nextClick = function(){
			if($scope.isLastQuestion){
				$location.path("/done");
				return;
			}
			$scope.answered = false;
			$scope.currentQuestion = questions.pop();
			$scope.isLastQuestion = questions.length === 1;
		};

		$scope.chooseBeer = function(){
			$scope.answered = true;
			if($scope.currentQuestion.isBeer){
				scoreService.addCorrect();
			}
		};

		$scope.chooseJavascript = function(){
			$scope.answered = true;
			if($scope.currentQuestion.isJS){
				scoreService.addCorrect();
			}
		};


	}]);
angular.module("BeerOrJS").controller("welcomePageController", [
	"$scope",
	function ($scope) {

	}]);
//# sourceMappingURL=beerOrJS.js.map