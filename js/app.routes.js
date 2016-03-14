angular.module('routerRoutes',['ngRoute'])

.config(function($routeProvider,$locationProvider){

	$routeProvider

	.when('/',{

		templateUrl: '/pages/intro.html',
		controller:'homeController',
		controllerAs:'home'
	})

	.when('/about',{

		templateUrl: '/pages/about.html',
		controller:'aboutController',
		controllerAs:'about'
	})

	.when('/contact',{

		templateUrl: '/pages/contact.html',
		controller:'contactController',
		controllerAs:'contact'
	})
 
	.when('/work',{

		templateUrl: '/pages/work.html',
		controller:'workController',
		controllerAs:'work'
	})

	.when('/skills',{

		templateUrl: '/pages/skills.html',
		controller:'skillsController',
		controllerAs:'skills'
	})

	.when('/career',{

		templateUrl: '/pages/career.html',
		controller:'graphController',
		controllerAs:'graph'
	})

	.when('/recos',{

		templateUrl: '/pages/recos.html',
		controller:'graphController',
		controllerAs:'graph'
	})
 

	$locationProvider.html5Mode(true);

});