var app = angular.module('ajaxCall');

app.factory('apiCall', ['$http', function ($http){
	var piratesArray = [];
	return {

		set: function(whatev){
			var splitWords = whatev.split(" ");
			console.log(splitWords);
			for (i=0; i<splitWords.length; i++) {
				piratesArray.push(splitWords[i]);
			}

			// console.log(piratesArray);
		
		},
		link: function(){
			// console.log(piratesArray[0]);
			// console.log(piratesArray.length);
			var string="";
			for (i=0; i<piratesArray.length; i++) {
				string += piratesArray[i] + "+";
				}
			// console.log(string);
			return $http.get('http://isithackday.com/arrpi.php?text=' + string + '&format=json');	
		},

		clear: function() {
			piratesArray= [];
		}
		
	}
	
	
}]);
