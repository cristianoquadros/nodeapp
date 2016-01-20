(function() {
    "use strict";
    
     angular
        .module('app')
        .controller('MainController', MainController);
        


    function MainController($scope) {    
        $scope.nome = "teste";    
    }
    
    MainController.$inject =  ['$scope','$http'] ;
    
  
});