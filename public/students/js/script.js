//Module
var csodApp = angular.module('csodApp', ['ngRoute', 'ngResource', 'ngTable']);

//Routes
csodApp.config(function ($routeProvider) {
    $routeProvider
        //for students
        .when('/students', {
        templateUrl: 'students/pages/index.html',
        controller: 'IndexController'
        })
        .when('/students/new', {
            templateUrl: 'students/pages/new.html',
            controller: 'NewController'
        })
        .when('/students/:id/edit', {
            templateUrl: 'students/pages/edit.html',
            controller: 'EditController'
        })
});


//Services
csodApp.service('studentService',['$http', function($http){
    this.getStudents = function() {
        return $http.get('/api/students');
    };
    this.addStudent = function(newStudent) {
        return $http.post('api/students', newStudent);   
    };
    this.getStudentById = function(id) {
        return $http.get('api/students/'+id);
    };
    this.updateStudent = function(id, theStudent) {
        return $http.put('api/students/'+id, theStudent);
    };
    this.deleteStudent = function(id) {
        return $http.delete('/api/students/'+id);
    };
}]);

//Controllers
csodApp.controller('IndexController', ['$scope', '$location', 'NgTableParams', 'studentService', 
    function($scope, $location, NgTableParams ,studentService){
    studentService.getStudents()
            .success(function(data){
                //$scope.students = data;
                $scope.tableParams = new NgTableParams({},{dataset: data});
            })
            .error(function(err){
                console.log("Error: " + err);
            });
    $scope.deleteStudent = function(id) {
        studentService.deleteStudent(id)
            .success(function(data){
                //$scope.students = data;
                //$location.path('/students');//this won't load the new data, so we do it manually
                $scope.tableParams = new NgTableParams({},{dataset: data});
            })
            .error(function(err){
                console.log("Error:" + err);
            });
    };
}]);

csodApp.controller('NewController',['$scope', '$location', 'studentService', function($scope, $location, studentService){
    $scope.newStudent = {};
    $scope.addStudent = function() {
        studentService.addStudent($scope.newStudent)
            .success(function(data){
                console.log(data);
                $location.path('/students'); 
            })
            .error(function(err){
                console.log("Error:" + err);
            });
    };
}]);

csodApp.controller('EditController',['$scope', '$routeParams', '$location', 'studentService', function($scope, $routeParams, $location, studentService){
    studentService.getStudentById($routeParams.id)
            .success(function(data){
                $scope.theStudent = data;
            })
            .error(function(err){
                console.log("Error:" + err);
            });
    $scope.updateStudent = function() {
        studentService.updateStudent($routeParams.id, $scope.theStudent)
            .success(function(data){
                console.log(data);
                $location.path('/students'); 
            })
            .error(function(err){
                console.log("Error:" + err);
            });
    };
}]);
//Directives


