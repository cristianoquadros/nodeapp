/*
** Angular Project
**
** Cristiano Quadros
** 
*/
(function(){	
	'use strict';

	angular
        .module('rlab-app', ['ngResource', 'ngRoute', 'mobile-angular-ui'])
    	.config(['$routeProvider', viewRouter])
        .controller('MainController', ['$rootScope', '$scope', MainController]);
    
    function viewRouter($routeProvider){
        $routeProvider
            .when('/', {
                controller:'MainController',
                templateUrl:'home.html',
                reloadOnSearch: false
            })  
            .when('/research', {
                controller:'ResearchController as controller',
                templateUrl:'views/researchList.html',
                reloadOnSearch: false
            })
            .when('/fichade', {
                controller:'FormController as controller',
                templateUrl:'views/forms/prototipo-hu.html',
                reloadOnSearch: false
            })
            .when('/patient', {
                controller:'PatientController as controller',
                templateUrl:'views/patientList.html',
                reloadOnSearch: false
            })
            .otherwise({
               redirectTo: '/'
            });
	}; 	
	
    function MainController($rootScope, $scope){

		  // User agent displayed in home page
		  $scope.userAgent = navigator.userAgent;
		  
		  // Needed for the loading screen
		  $rootScope.$on('$routeChangeStart', function(){
		    $rootScope.loading = true;
		  });

		  $rootScope.$on('$routeChangeSuccess', function(){
		    $rootScope.loading = false;
		  });	
	};	  
	
})();	