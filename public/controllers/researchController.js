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
        .controller("ResearchController", ['$scope', 'ResearchService', ResearchController])
        .factory("ResearchService",  ['$resource', ResearchService]);
        
        function ResearchController ($scope, ResearchService){
            var self = this;
            
            self.getResearchList = getResearchList;
            $scope.items;
            
            self.getResearchList();
           
            function getResearchList() {
                ResearchService
                    .query(null, 
                    function(result) {
                        $scope.items = result;                       
                    })
            }
        }     
  
        function ResearchService ($resource) {
            var urlBase = '/research/';
            
            var url = $resource(urlBase,null,
                {'get': { method: 'GET'}, isArray:true});
            return url;       
        }    
})();