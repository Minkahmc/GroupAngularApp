app.factory('myService', [function() {
	var artists = [
		{ name: 'Madlib', album: 'Shades of Blue'},
		{ name: 'Flying Lotus', album: 'Los Angeles'}
	];
	
	return {
		list: function() {
			return artists;
		},

		add: function(artist) {
			artists.push(artist);
		}
	};

}]);
