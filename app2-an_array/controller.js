app.controller('arrayController', function($scope, mainSvc) {
	$scope.data = mainSvc.getData();
})