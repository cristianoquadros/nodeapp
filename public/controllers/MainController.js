     angular.module("app", [])
         .controller("MainController", 
    
    function ($scope, $http) {
            
        function Contato() {
            this.nome = '';
            this.telefone = '';
        }
        
        $scope.contato = new Contato();        
        $scope.contatos = [];
        
        $scope.adicionaContato = function() {
          $http.get('/teste').success(function(data) {
                $scope.contato = new Contato();
                $scope.contato.nome=data.nome;
                $scope.contato.telefone=data.telefone;
                $scope.contatos.push($scope.contato);
                
                console.log('Inseriu o cara');
            });
        }
    });
