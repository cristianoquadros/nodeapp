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
        .factory("TemplateService",  ['$resource', TemplateService]);
       
        function TemplateService ($resource) {
            var urlBase = '/template/';
            var service = {
                list : list,
                persist : persist
            };
            return service;
            
            function list(){
                var resource = $resource(urlBase + "list",null,
                    {'get': { method: 'GET'}, isArray:true});
                return resource;       
            };
            
            function persist(){
                var resource = $resource(urlBase+ "save",
                     { name: '@name', code: '@code', description: '@description'}, 
                     {'save': { method: 'POST' }
                });
                return resource;       
            };           
        }    
})();        