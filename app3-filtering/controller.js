app.controller('mainCtrl', function($scope, mainSvc) {
	
	$scope.data = mainSvc.getData();
})