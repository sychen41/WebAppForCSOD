angular.module('studentCtrl', ['ngTable', 'studentService'])

.controller('studentController', function($routeParams, NgTableParams, Student) {
    var vm = this;
    vm.processing = true;
    vm.processingMsg = 'Loading Students...';
    vm.lastNameFilter = {
        LName: {
            id: "text",
            placeholder: "Filters"
        }
    };
    //if no parent_id parameter, then show all students
    //else show students who are children of the parent
    if ($routeParams.parent_id === undefined) {
        vm.type = 'allStudents';
        Student.getStudents()
            .success(function(data){
                vm.processing = false;
                //if fail to autheticate (invalid token, because of expired or sth else)
                if(data.success === false){
                    vm.message = data.message;
                } else {
                    //console.log(data);
                    vm.tableParams = new NgTableParams({},{dataset: data});
                }
            })
            .error(function(err){
                console.log("Error: " + err);
            });
    } else {
        vm.type = 'studentsOfAParent';
        vm.parentsName = $routeParams.parents_name;
        Student.getStudentsByParentId($routeParams.parent_id)
            .success(function(data){
                vm.processing = false;
                if(data.success === false){
                    vm.message = data.message;
                } else {
                    if(data.length != 0) {
                        //console.log(data);
                        vm.tableParams = new NgTableParams({},{dataset: data});
                    } else {
                        console.log("data not found");
                        vm.message = "Sorry, no children of the chosen parent(s) found in the database";
                    }
                }
            })
            .error(function(err){
                console.log("Error: " + err);
            })
    }

    vm.deleteStudent = function(id) {
        if(confirm("Are you sure to delete this student?")) {
            vm.processing = true;
            vm.processingMsg = 'Deleting...';
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
        }
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

.controller('studentCreateController', function($routeParams, Student){
    var vm = this;
    vm.type = 'create';
    vm.parentsName = $routeParams.parents_name;
    vm.theStudent = {};
    console.log($routeParams.parent_id);
    vm.theStudent.ParentKey = $routeParams.parent_id;
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
    vm.processing = true;
    Student.getStudentById($routeParams.id)
            .success(function(data){
                vm.processing = false;
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