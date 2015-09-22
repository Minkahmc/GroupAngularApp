app.controller('ResultController', ['myService', function(myService) {
	var self = this;

	self.list = function(){
		return myService.list();
	};
}]);