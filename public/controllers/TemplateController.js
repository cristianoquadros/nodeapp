(function() {
'use strict';

    angular
        .module('rlab-app')
        .controller('TemplateController', TemplateController);

    function TemplateController($scope) {
        var self = this;  
              
        $scope.result = [];
        self.parseTemplate = parseTemplate;
        self.name = "template1";
        self.descr = "Template of questions for RLAB test";
        
        self.text = '{"component":"input-text", "label":"Qual é o seu nome?", "tag":"NOME", "type":"text"},' +
           '{"component":"input-text", "label":"Qual é sua idade?", "tag":"IDADE", "type":"number", "inputstyle":"width:100px"},' +
           '{"component":"input-textarea", "label":"Qual é seu endereço?", "rows":"3", "tag":"ENDERECO"},' +
           '{"component":"input-text", "label":"Qual sua cidade?", "tag":"CIDADE", "type":"text"},' + 
           '{"component":"select-item", "label":"Qual seu estado?", "tag":"UF", "options":["RS", "SC","SP"]},' +
           '{"component":"select-one-item", "label":"Qual a sua Cor?", "tag":"COR", "options":[{"label":"Branca","value":"B"},{"label":"Negra","value":"N"},{"label":"Mestiça","value":"M"},{"label":"Índio","value":"I"}]}';           
       self.template = [];
       
       function parseTemplate(){
           self.template = JSON.parse('[' + self.text + ']');
       }  
       
       parseTemplate();

    }
})();