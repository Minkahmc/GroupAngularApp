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

// !!!!!!!!! this kills the instagram partial if live. !!!!!!!!!!!!!!!!
// app.controller('HeaderController', ['$location', function($location) {
//     var self = this;
// ​
//     self.isActive = function (viewLocation) { 
//         return viewLocation === $location.path();
//     };
// }]);

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
      //calls push function from services page
      apiCall.push($scope.pirate);
      $scope.oldQuotes = apiCall.toView();
  		apiCall.clear();
  	});

}]);

app.controller('nameController', function(){

});

app.controller('404controller', function(){

});




