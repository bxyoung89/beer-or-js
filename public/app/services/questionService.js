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