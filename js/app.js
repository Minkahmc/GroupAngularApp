var app = angular.module('pirateApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when('/', {
    templateUrl: 'partials/placeHolder.html',
    controller: 'indexController'
  });

  $routeProvider.when('/instagram', {
    templateUrl: 'partials/instagram.html',
    controller: 'instagramController'
  });

  $routeProvider.when('/translate', {
		templateUrl: 'partials/pirateTranslate.html',
		controller: 'formCtrl'
	});

	$routeProvider.when('/display', {
    templateUrl: 'partials/translateDisplay.html',
    controller: 'displayController'
  });

  $routeProvider.when('/pirateName', {
		templateUrl: 'partials/pirateName.html',
		controller: 'nameController'
  });

  $routeProvider.otherwise({
    templateUrl: 'partials/404.html',
    controller: '404controller'
  });

});

app.controller('indexController', function(){

});

app.controller('instagramController', function(){

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
      //pushes most recent pirate translation to oldQoutes[]
      apiCall.push($scope.pirate);
      $scope.oldQuotes = apiCall.blah();
  		apiCall.clear();
  	});

}]);

app.controller('nameController', function(){

});

app.controller('404controller', function(){

});

