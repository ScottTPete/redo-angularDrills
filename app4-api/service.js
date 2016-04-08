app.service('mainSvc', function($http, $q) {
	
	this.getPokemon = function() {
		var defer = $q.defer();
		$http ({
			method: 'GET',
			url: "http://pokeapi.co/api/v2/pokemon"
		}).then(function(response) {
			console.log(response);
			var data = response.data.results;
			defer.resolve(data);
		})
		
		return defer.promise;
	}
	
})