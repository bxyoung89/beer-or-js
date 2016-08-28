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