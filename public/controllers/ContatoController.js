//Angular Project

(function() {
    'use strict';
    
     angular
        .module("app", ["ngResource"])
        .controller("ContatoController", ['$scope', 'ContatoService', ContatoController])
        .factory("ContatoService",  ['$resource', ContatoService])
        
        function ContatoController ($scope, ContatoService){
            var vm = this;
            
            vm.adicionaContato = adicionaContato;
            $scope.contato = new Contato();        
            vm.contatos = [];
                
            function Contato() {
                this.nome = '';
                this.telefone = '';
            }        
            
            function adicionaContato() {
                ContatoService
                    .get({ nome : $scope.contato.nome, fone : $scope.contato.telefone}, 
                    function(data) {
                        $scope.contato = new Contato();
                        $scope.contato.nome = data.nome;
                        $scope.contato.telefone = data.telefone;
                        vm.contatos.push($scope.contato);
                        
                        console.log('Inseriu o cara');
                    })
            }
        }     
  
        function ContatoService ($resource) {
            var url = $resource('/teste/',null,
                {'get': { method: 'GET'}});
                return url;       
        }
    
})();