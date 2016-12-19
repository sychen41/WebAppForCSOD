angular.module('studentCtrl', ['ngTable', 'studentService'])

.controller('studentController', function(NgTableParams, Student) {
    var vm = this;
    vm.processing = true;
    Student.getStudents()
        .success(function(data){
            //$scope.students = data;
            vm.processing = false;
            //console.log(data);
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
    vm.parseDate = function(dateStr) {
        if (dateStr) {
            var dateArr = dateStr.split(" ");
            if(dateArr.length == 1) {
                return new Date(dateStr).toDateString();
            }
            return dateArr[1] + " " + dateArr[2] + " " + dateArr[dateArr.length-1];
        } else {
            return "Not found";
        }
    }
})

.controller('studentCreateController', function(Student){
    var vm = this;
    vm.type = 'create';
    vm.theStudent = {};
    vm.saveStudent = function() {
        vm.processing = true;
        //vm.theStudent.DOB = new Date(vm.theStudent.DOB).toDateString();
        Student.addStudent(vm.theStudent)
            .success(function(data){
                vm.processing = false;
                vm.message = data.message;
                vm.theStudent = {};
                //$location.path('/students'); 
            })
            .error(function(err){
                console.log("Error:" + err);
            });
    };
})

.controller('studentEditController',function($routeParams, Student){
    var vm = this;
    vm.type = 'edit';
    Student.getStudentById($routeParams.id)
            .success(function(data){
                vm.theStudent = data;
            })
            .error(function(err){
                console.log("Error:" + err);
            });
    vm.saveStudent = function() {
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