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
        .controller("PatientController", ['$scope', '$location', 'PatientService', PatientController]);
     
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
})();