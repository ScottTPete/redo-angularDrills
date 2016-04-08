app.controller('mainCtrl', function($scope, mainSvc) {
	mainSvc.getPokemon().then(function(response) {
		$scope.pokemon = response;
	})
})