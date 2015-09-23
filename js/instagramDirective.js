var app = angular.module('pirateApp');

	app.directive('instagramPic', function(){
		return{
			restrict: "E",
			template: "<div id='instafeed'> </div>",
			replace: false
		};
	});

// var app = angular.module('pirateApp');

// app.directive('oldTranslation', function(){
// 	return{
// 		restrict: "E",
// 		template: '<div class="something"> {{quotes}} </div>',
// 		replace: false
// 	};
// });