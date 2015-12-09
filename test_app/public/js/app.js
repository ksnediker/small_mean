// angular.module('contactApp', []).controller('ContactAppController', function() {
	
// 	console.log("working app");
	
// });

// angular.module('contactApp', []).directive('ngcontactapp', function() {

// 	var katie = "hello";
// });

var contactApp = angular.module('contactApp', []);
contactApp.controller('ContactCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");
}]);
