var app = angular.module('ajaxCall', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'partials/pirateTranslate.html',
		controller: 'formCtrl'
	});

	$routeProvider.when('/display', {
		templateUrl: 'partials/translateDisplay.html',
		controller: 'displayController'
  });

});

app.controller('formCtrl', function($scope, apiCall){
  $scope.submit = function(x){
  	apiCall.set(x);
  	// console.log(x);
  }  
    
});

app.controller('displayController', ['apiCall', '$scope', function(apiCall, $scope){

  apiCall.link()
  	.then(function(response){
  		$scope.pirate = response.data.translation.pirate;
  		apiCall.clear();
  	});

}]);

