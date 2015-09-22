var app = angular.module('ajaxCall');

app.factory('apiCall', ['$http', function ($http){
	var pirates;
	return {
		// talk: function(){
		// 	return pirates;
		// },
		set: function(whatev){
			pirates = whatev;
			console.log(pirates);
			return pirates;
			// return $http.get('http://isithackday.com/arrpi.php?text=hello+friend+quick&format=json');
		},
		link: function(){
			return $http.get('http://isithackday.com/arrpi.php?text=hello+friend+quick&format=json');
		}
		
	}
	// console.log(pirates);
	// return $http.get('http://isithackday.com/arrpi.php?text=' + pirates + '&format=json');
	
}]);
