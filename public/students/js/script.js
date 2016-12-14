//Module
var csodApp = angular.module('csodApp', ['ngRoute', 'ngResource']);

//Routes
csodApp.config(function ($routeProvider) {
    $routeProvider
        .when('/students', {
        templateUrl: 'students/pages/index.html',
        controller: 'IndexController'
        })
});


//Services
csodApp.service('studentService',['$http', function($http){
    this.getStudents = function() {
        return $http.get('/api/students');
    }
    this.deleteStudent = function(id) {
        return $http.delete('/api/students/'+id);
    }
}]);

//Controllers
csodApp.controller('IndexController', ['$scope', 'studentService', function($scope, studentService){
    studentService.getStudents()
            .success(function(data){
                //console.log(data);
                $scope.students = data;
            })
            .error(function(err){
                console.log("Error: " + err);
            });
    $scope.deleteStudent = function(id) {
        studentService.deleteStudent(id)
            .success(function(data){
                $scope.students = data;
            })
            .error(function(err){
                console.log("Error:" + err);
            });
    }
}]);


//Directives


