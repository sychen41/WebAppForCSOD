angular.module('mainCtrl', [])

.controller('mainController', function($rootScope, $location, Auth) {

	var vm = this;

	// get info if a person is logged in
	vm.loggedIn = Auth.isLoggedIn();

	// check to see if a user is logged in on every request
	$rootScope.$on('$routeChangeStart', function() {
		vm.loggedIn = Auth.isLoggedIn();	

		// get user information on page load
		Auth.getUser()
			.then(function(data) {
				vm.user = data.data;
			});	
	});	

	// function to handle login form
	vm.doLogin = function() {
		console.log('doing login');
		vm.processing = true;

		// clear the error
		vm.error = '';

		Auth.login(vm.loginData.username, vm.loginData.password)
			.then(function(data) {
				vm.processing = false;			

				// if a user successfully logs in, redirect to users page
				if (data.success) {
					console.log('user autheticated');
					$location.path('/users');
				}	
				else {
					console.log('user not autheticated');
					console.log(data.message);
					vm.error = data.message;
				}
				
			});
	};

	// function to handle logging out
	vm.doLogout = function() {
		Auth.logout();
		vm.user = '';
		
		$location.path('/login');
	};

	//create demo user
	vm.createDemoUser = function() {
		Auth.createDemoUser()
			.then(function(data){
				vm.demoUserCreated = data.data.success;
				vm.demoUserMessage = data.data.message;
			});
	};

});
