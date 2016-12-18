angular.module('studentCtrl', ['ngTable', 'studentService'])

.controller('studentController', function(NgTableParams, Student) {
    var vm = this;
    vm.processing = true;
    Student.getStudents()
        .success(function(data){
            //$scope.students = data;
            vm.processing = false;
            console.log(data);
            vm.tableParams = new NgTableParams({},{dataset: data});
        })
        .error(function(err){
            console.log("Error: " + err);
        });

    vm.deleteStudent = function(id) {
        vm.processing = true;
        Student.deleteStudent(id)
            .success(function(data){
                vm.processing = false;
                //$scope.students = data;
                //$location.path('/students');//this won't load the new data, so we do it manually
                vm.tableParams = new NgTableParams({},{dataset: data});
            })
            .error(function(err){
                console.log("Error:" + err);
            });
    };
})

.controller('studentCreateController', function(Student){
    var vm = this;
    vm.newStudent = {};
    vm.saveStudent = function() {
        vm.processing = true;
        Student.addStudent(vm.newStudent)
            .success(function(data){
                vm.processing = false;
                vm.message = data.message;
                vm.newStudent = {};
                //$location.path('/students'); 
            })
            .error(function(err){
                console.log("Error:" + err);
            });
    };
})

.controller('studentEditController',function($routeParams, Student){
    var vm = this;
    Student.getStudentById($routeParams.id)
            .success(function(data){
                vm.theStudent = data;
            })
            .error(function(err){
                console.log("Error:" + err);
            });
    vm.updateStudent = function() {
        vm.processing = true;
        Student.updateStudent($routeParams.id, vm.theStudent)
            .success(function(data){
                vm.processing = false;
                vm.message = data.message;
                console.log(data);
                //$location.path('/students'); 
            })
            .error(function(err){
                console.log("Error:" + err);
            });
    };
});