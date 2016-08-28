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