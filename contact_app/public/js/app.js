var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

$http.get('/contactlist')

    person1 = {
    	name: "Katie",
    	email: "katie@katie.com",
    	number: "716-880-5867"
    };

    person2 = {
    	name: "Katie2",
    	email: "k@katie.com",
    	number: "716-880-5867"
    };

    person3 = {
    	name: "Katie3",
    	email: "katie@k.com",
    	number: "716-880-5867"
    };

    var contactlist = [person1, person2, person3];
    $scope.contactlist = contactlist;

}]);