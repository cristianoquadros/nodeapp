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
        'huComponents'])
    	.config(['$routeProvider', viewRouter])
        .controller('MainController', ['$rootScope', '$scope', MainController])
        .factory('GlobalService', ['$location', GlobalService])
        .run(function($rootScope, GlobalService) {
            $rootScope.service = GlobalService;  
        });    
    
    function viewRouter($routeProvider){
        $routeProvider
            .when('/home', {
                controller:'MainController',
                templateUrl:'/public/home.html'
            })  
            .when('/research', {
                controller:'ResearchController as controller',
                templateUrl:'/public/views/researchList.html'
            })
            .when('/fichade', {
                controller:'FormController as controller',
                templateUrl:'/public/views/forms/prototipo-hu.html'
            })
            .when('/patient', {
                controller:'PatientController as controller',
                templateUrl:'/public/views/patient/patientList.html'
            })
            .when('/newpatient', {
                controller:'PatientController as controller',
                templateUrl:'/public/views/patient/patientCrud.html'
            })       
            .when('/template', {
                controller:'TemplateController as controller',
                templateUrl:'/public/views/template/templateList.html'
            })    
            .when('/template-edit', {
                controller:'TemplateEditController as controller',
                templateUrl:'/public/views/template/templateEdit.html'
            })                           
            .otherwise({
               redirectTo: '/home'
            });

	}; 	
	
    function MainController($rootScope, $scope){

		  // User agent displayed in home page
		  $scope.userAgent = navigator.userAgent;
		  
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