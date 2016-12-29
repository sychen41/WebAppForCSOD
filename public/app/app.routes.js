angular.module('app.routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {

	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'app/views/pages/home.html'
		})
		
		// login page
		.when('/login', {
			templateUrl : 'app/views/pages/login.html',
   			controller  : 'mainController',
    		controllerAs: 'login'
		})
		
		// show all users
		.when('/users', {
			templateUrl: 'app/views/pages/users/all.html',
			controller: 'userController',
			controllerAs: 'user'
		})

		// form to create a new user
		// same view as edit page
		.when('/users/new', {
			templateUrl: 'app/views/pages/users/single.html',
			controller: 'userCreateController',
			controllerAs: 'user'
		})

		// page to edit a user
		.when('/users/:user_id', {
			templateUrl: 'app/views/pages/users/single.html',
			controller: 'userEditController',
			controllerAs: 'user'
		})

        //for students
        .when('/students', {
			templateUrl: 'app/views/pages/studentsDev/all.html',
        	controller: 'studentController',
			controllerAs: 'student'
        })
        .when('/students/new', {
			templateUrl: 'app/views/pages/studentsDev/single.html',
            controller: 'studentCreateController',
			controllerAs: 'student'
        })
        .when('/students/:id/edit', {
			templateUrl: 'app/views/pages/studentsDev/single.html',
            controller: 'studentEditController',
			controllerAs: 'student'
        });

	$locationProvider.html5Mode(true);

});
