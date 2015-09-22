var app = angular.module('formApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/',
		{
			templateUrl: 'partials/form.html',
			controller: 'FormController'
		})
		.when('/result',
		{
			templateUrl: 'partials/result.html',
			controller: 'ResultController'
		})
		.when('/tom-waits',
		{
			templateUrl: 'partials/tom-waits.html',
			controller: 'TomWaitsController'
		})
		.otherwise(
		{
			redirectTo: '/404',
			templateUrl: 'partials/404.html'
		});
});

app.controller('HeaderController', ['$location', function($location) {
    var self = this;

    self.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
}]);

app.controller('FormController', ['$location', 'myService', function($location, myService) {
	var self = this;

	self.add = function() {
		myService.add({
			name: this.name, 
			album: this.album
		});
		self.name = '';
		self.album = '';
		$location.path('/result');
	};
}]);