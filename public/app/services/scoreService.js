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