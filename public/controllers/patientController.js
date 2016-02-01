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
        .controller("PatientController", ['$scope', '$location', 'PatientService', PatientController])
        .factory("PatientService",  ['$resource', PatientService]);
        
        function PatientController ($scope, $location, PatientService){
            var self = this;
            self.init = init;
            $scope.items = {};
            $scope.paciente = new Paciente();

            //Execute
            self.init();
            
            function Paciente() {
                this.nome = '';
                this.idade = '';
            } 
           
            function init() {
                PatientService.getPatientList().query(null, 
                    function(result) {
                        $scope.items = result;                       
                    })
            }
              
            function submitForm() {
              //  self.persist
              //      .post(null);
            }           
        }     
  
        function PatientService ($resource) {
            var urlBase = '/patient/';
            var service = {
                getPatientList : getPatientList,
                persist : persist
            };
            return service;
            
            function getPatientList(){
                var url = $resource(urlBase + "list",null,
                    {'get': { method: 'GET'}, isArray:true});
                return url;       
            };
            
            function persist(){
                var url = $resource(self.urlBase+ "persist");
                return url;       
            };           
        }    
})();