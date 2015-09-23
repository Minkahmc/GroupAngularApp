var app = angular.module('pirateApp');

app.factory('apiCall', ['$http', function ($http){
	var piratesArray = [];
	var oldQuotes = [];
	return {

		set: function(whatev){
			var splitWords = whatev.split(" ");
			// console.log(splitWords);
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
		push: function(x){
			//pushes latest version of pirate talk to array
			oldQuotes.push(x);
		},
		toView: function(){
			//returns the array so it can be put on the scope and used for display
			return oldQuotes;
		},

		clear: function() {
			piratesArray= [];
		}
		
	}
	
	
}]);
