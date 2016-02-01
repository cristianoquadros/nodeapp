/*
** Angular Project
**
** Cristiano Quadros
** 
*/
(function(){	
	'use strict';

	angular
        .module('rlab-app',[
        'ngResource', 
        'ngRoute', 
        'ngMessages', 
        'mobile-angular-ui'])
    	.config(['$routeProvider', viewRouter])
        .controller('MainController', ['$rootScope', '$scope', MainController])
        .factory('GlobalService', ['$location', GlobalService])
        .run(function($rootScope, GlobalService) {
            $rootScope.service = GlobalService;  
        });    
    
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
                templateUrl:'views/patient/patientList.html',
                reloadOnSearch: false
            })
            .when('/newpatient', {
                controller:'PatientController as controller',
                templateUrl:'views/patient/patientCrud.html',
                reloadOnSearch: false
            })            
            .otherwise({
               redirectTo: '/'
            });
            //$locationProvider.html5Mode(true);
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
    
    function GlobalService ($location) {
        var service = {
            go : go
        };
        
        function go(path) {
                $location.path( path ); 
        }            
        
        return service;    
    }    
    
})();