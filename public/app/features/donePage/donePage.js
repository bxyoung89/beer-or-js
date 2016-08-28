angular.module("BeerOrJS").controller("donePageController", [
	"$scope",
	"scoreService",
	function ($scope, scoreService) {
		$scope.totalCorrect = scoreService.getTotalCorrect();
		$scope.total = scoreService.getTotal();
		$scope.score = scoreService.getFinalScore();
	}]);