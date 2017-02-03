angular.module('parentCtrl', ['ngTable', 'parentService'])

.controller('parentController', function($routeParams, NgTableParams, Parent) {
    var vm = this;
    vm.processing = true;
    vm.processingMsg = 'Loading Parents...';
    //if no id provided, than show all parents
    //else show the specific parent(s) of the id
    if($routeParams.id === undefined) {
        vm.type = 'allParents';
        Parent.getParents()
            .success(function(data){
                vm.processing = false;
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
        vm.type = 'parentsOfAStudent';
        vm.studentName = $routeParams.student_name;
        //vm.type = 'edit';
        Parent.getParentById($routeParams.id)
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
                        vm.message = "Sorry, we don't have any information of this student's parents in the database";
                    }
                }
            })
            .error(function(err){
                console.log("Error: " + err);
            });
    }

    vm.deleteParent = function(id) {
        if(confirm("Are you sure to delete this parent?")) {
            vm.processing = true;
            vm.processingMsg = 'Deleting...';
            Parent.deleteParent(id)
                .success(function(data){
                    vm.processing = false;
                    //$scope.parents = data;
                    //$location.path('/parents');//this won't load the new data, so we do it manually
                    vm.tableParams = new NgTableParams({},{dataset: data});
                })
                .error(function(err){
                    console.log("Error:" + err);
                });
        };
    }
})

.controller('parentCreateController', function(Parent){
    var vm = this;
    vm.type = 'create';
    vm.theParent = {};
    vm.saveParent = function() {
        vm.processing = true;
        Parent.addParent(vm.theParent)
            .success(function(data){
                vm.processing = false;
                vm.message = data.message;
                vm.theParent = {};
                //$location.path('/parents'); 
            })
            .error(function(err){
                console.log("Error:" + err);
            });
    };
})

.controller('parentEditController',function($routeParams, Parent){
    var vm = this;
    vm.processing = true;
    vm.type = 'edit';
    Parent.getParentById($routeParams.id)
            .success(function(data){
                vm.processing = false;
                vm.theParent = data[0];
            })
            .error(function(err){
                console.log("Error:" + err);
            });
    vm.saveParent = function() {
        vm.processing = true;
        vm.processingMsg = 'Updaing...';
        Parent.updateParent($routeParams.id, vm.theParent)
            .success(function(data){
                vm.processing = false;
                vm.message = data.message;
                console.log(data);
                //$location.path('/parents'); 
            })
            .error(function(err){
                console.log("Error:" + err);
            });
    };
});