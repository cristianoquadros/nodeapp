(function() {
'use strict';

    angular
        .module('rlab-app')
        .controller('TemplateController', ['$scope', '$location', 'TemplateService', TemplateController]);

    function TemplateController($scope, $location, TemplateService) {
        var self = this;  
        self.setClickedRow = setClickedRow;
        self.selectedRow = null;  
        
        $scope.$on('$viewContentLoaded', function() {
            TemplateService.list().query(function(result) {
                self.items = result;
            })
        });    
       
       
       function setClickedRow(index){
           self.selectedRow = index;
       }      

    }
})();