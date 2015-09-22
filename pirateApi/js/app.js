var app = angular.module('ajaxCall', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'partials/form.html',
		controller: 'formCtrl'
	});

	$routeProvider.when('/display', {
		templateUrl: 'partials/display.html',
		controller: 'displayController'
  });

});

app.controller('formCtrl', function($scope, apiCall){
  $scope.submit = function(x){
  	apiCall.set(x);
  	console.log(x);
  }



  
    
});

app.controller('displayController', ['apiCall', '$scope', function(apiCall, $scope){

  apiCall.link()
  	.then(function(response){
  		$scope.pirate = response.data.translation.pirate;
  		
  	});

	
	  // The above moves the get request line to the service and returns it. 
	  // both work the same way. 
	  
	  // $http.get('https://twlaas.herokuapp.com/').
	  // 	then(function(response){
	  // 		$scope.details = response.data;
	  // 		console.log(response);
	  // });

}]);

