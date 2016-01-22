//Angular Project

(function() {
    'use strict';
    
     angular
        .module("app", [])
        .controller("MainController", MainController);
    
    MainController.$inject = ['$http', '$scope'];
    
    function MainController ($http, $scope) {
        var vm = this;
        
        vm.adicionaContato = adicionaContato;
        vm.contato = new Contato();        
        vm.contatos = [];
            
        function Contato() {
            this.nome = '';
            this.telefone = '';
        }        
        
        function adicionaContato() {
            $http.get('/teste').success(function(data) {
                vm.contato = new Contato();
                vm.contato.nome=data.nome;
                vm.contato.telefone=data.telefone;
                vm.contatos.push(vm.contato);
                
                console.log('Inseriu o cara');
            });
        }
    };
})();
