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
        .factory("PatientService",  ['$resource', PatientService]);       
       
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
                     { alias: '@alias', code: '@code', birth: '@birth' }, 
                     {'save': { method: 'POST' }
                });
                return resource;       
            };           
        }    
})();        