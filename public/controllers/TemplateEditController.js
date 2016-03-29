(function() {
'use strict';

    angular
        .module('rlab-app')
        .controller('TemplateEditController', ['$scope', '$location', 'TemplateService', TemplateEditController]);

    function TemplateEditController($scope, $location, TemplateService) {
        var self = this;  
        self.parseTemplatePreview = parseTemplatePreview;
        self.salvarTemplate = salvarTemplate;
        self.templatePreview = [];
        self.result = [];
        self.template = new Template();        
        
        function Template() {
            this.name = "template1";
            this.description = "Template of questions for RLAB test";
            this.code = '{"component":"input-text", "label":"Qual é o seu nome?", "tag":"NOME", "type":"text"},' +
                '{"component":"input-text", "label":"Qual é sua idade?", "tag":"IDADE", "type":"number", "inputstyle":"width:100px"},' +
                '{"component":"input-textarea", "label":"Qual é seu endereço?", "rows":"3", "tag":"ENDERECO"},' +
                '{"component":"input-text", "label":"Qual sua cidade?", "tag":"CIDADE", "type":"text"},' + 
                '{"component":"select-item", "label":"Qual seu estado?", "tag":"UF", "options":["RS", "SC","SP"]},' +
                '{"component":"select-one-item", "label":"Qual a sua Cor?", "tag":"COR", "options":[{"label":"Branca","value":"B"},{"label":"Negra","value":"N"},{"label":"Mestiça","value":"M"},{"label":"Índio","value":"I"}]}';
        }            
       
        function salvarTemplate() {
            TemplateService.persist().save(self.template, 
                function(data) {
                    Console.log('Registro Salvo');
                    self.template = new Template(); 
                })  
            $location.path('/template');    
        }       
       
       
       function parseTemplatePreview(){
           self.templatePreview = JSON.parse('[' + self.template.code + ']');
       }       

    }
})();