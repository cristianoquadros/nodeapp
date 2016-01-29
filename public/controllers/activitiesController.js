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
        .controller("ActivitiesController", ['$scope', 'ActivitiesService', ActivitiesController])
        .factory("ActivitiesService",  ['$resource', ActivitiesService]);
        
        function ActivitiesController ($scope, ActivitiesService){
            var self = this;
            
            self.getActitiviesList = getActitiviesList;
            $scope.items;
           
            function getActitiviesList() {
                ActivitiesService
                    .query(null, 
                    function(result) {
                        $scope.items = result;                       
                    })
            }
        }     
  
        function ActivitiesService ($resource) {
            var urlBase = '/activities/';
            
            var url = $resource(urlBase,null,
                {'get': { method: 'GET'}});
            return url;       
        }    
})();