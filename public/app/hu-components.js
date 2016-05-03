/*
** Angular Project
**
** Cristiano Quadros
** 
*/
(function(){	
	'use strict';

	angular
        .module('huComponents',[])
        .directive('huInputText', [inputTextComponent])
        .directive('huInputTextarea', [inputTextareaComponent])
        .directive('huSelectItem', [selectItemComponent])
         .directive('huSelectOneItem', [selectOneItemComponent]);

    function inputTextComponent() {
        return {
            restrict: "E",   
            require:'ngModel',        
            scope: {
                label:'@',
                index:'@',
                type:'@',
                class:'@',
                inputstyle:'@',
                tag:'@'
            },
            templateUrl: "/public/directives/input-text.html", 
            link: function (scope, element, attrs, ctrl) {     
                if (!scope.type){
                    scope.type='text';
                }                  
                element.bind("change", function () {     
                    ctrl.$setViewValue(scope.answer);
                    ctrl.$render();      
                });                
            }            
        };
    } 
    
 function inputTextareaComponent() {
        return {
            restrict: "E",   
            require:'ngModel',        
            scope: {
                label:'@',
                index:'@',
                tag:'@',
                class:'@',
                inputStyle:'@',
                rows:'@'
            },
            templateUrl: "/public/directives/input-textarea.html", 
            link: function (scope, element, attrs, ctrl) {                      
                element.bind("change", function () {     
                    ctrl.$setViewValue(scope.answer);
                    ctrl.$render();      
                });                
            }            
        };
    }   
    
 function selectItemComponent() {
        return {
            restrict: "E",   
            require:'ngModel',        
            scope: {
                label:'@',
                index:'@',
                tag:'@',
                class:'@',
                selectStyle:'@',
                options:'='
            },
            templateUrl: "/public/directives/select-item.html", 
            link: function (scope, element, attrs, ctrl) {                      
                element.bind("change", function () {     
                    ctrl.$setViewValue(scope.answer);
                    ctrl.$render();      
                });                
            }            
        };
    }    
    
 function selectOneItemComponent() {
        return {
            restrict: "E",   
            require:'ngModel',        
            scope: {
                label:'@',
                index:'@',
                tag:'@',
                class:'@',
                selectStyle:'@',
                options:'='
            },
            templateUrl: "/public/directives/select-one-item.html", 
            link: function (scope, element, attrs, ctrl) {   
                scope.changeComponent = function(value){    
                    scope.answer.value=value;           
                    ctrl.$setViewValue(scope.answer);
                    ctrl.$render();      
                }                
            }            
        };
    }                                  


})();        