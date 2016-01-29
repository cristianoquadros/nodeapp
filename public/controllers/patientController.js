/*
** Angular Project
**
** Cristiano Quadros
** 
*/

(function() {
    'use strict';
    
     angular
        .module("rlab-app")
        .controller("PatientController", ['$scope', 'PatientService', PatientController])
        .factory("PatientService",  ['$resource', PatientService]);
        
        function PatientController ($scope, PatientService){
            var self = this;            
            self.getPatientList = getPatientList; 
            $scope.items = {};
            
            self.getPatientList();
           
            function getPatientList() {
                PatientService
                    .query(null, 
                    function(result) {
                        $scope.items = result;                       
                    })
            }
        }     
  
        function PatientService ($resource) {
            var urlBase = '/patient/';
            
            var url = $resource(urlBase,null,
                {'get': { method: 'GET'}, isArray:true});
            return url;       
        }    
})();