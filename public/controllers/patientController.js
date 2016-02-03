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
            $scope.submitForm = submitForm;
            $scope.items = {};
            $scope.paciente = new Paciente();

            //Execute
            self.init();
            
            function Paciente() {
                this.name = null;
                this.code = null;
                this.birth = null;
            } 
           
            function init() {
                PatientService.getPatientList().query(null, 
                    function(result) {
                        $scope.items = result;                       
                    })
            }
              
            function submitForm() {
                PatientService.persist().save($scope.paciente, 
                    function(data) {
                          Console.log('Registro Salvo');
                          $scope.paciente = new Paciente(); 
                    })
                $location.path('/patient');    
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
                var resource = $resource(urlBase + "list",null,
                    {'get': { method: 'GET'}, isArray:true});
                return resource;       
            };
            
            function persist(){
                var resource = $resource(urlBase+ "save",
                     { name: '@name', code: '@code', birth: '@birth' }, 
                     {'save': { method: 'POST' }
                });
                return resource;       
            };           
        }    
})();