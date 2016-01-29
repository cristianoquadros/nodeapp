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
        .controller("FormController", ['$scope', 'FormService', FormController])
        .factory("FormService",  ['$resource', FormService]);
        
        function FormController ($scope, FormService){
            var self = this;
             
            $scope.tabs = [{
                title: '1',
                url: 'aba1.tpl.html',
                sub: 'tab1-step1'	
            }, {
                title: '2',
                url: 'aba2.tpl.html',
                sub: 'tab2-step1'
            }, {
                title: '3',
                url: 'aba3.tpl.html',
                sub: 'tab3-step1'
            }];

            self.currentTab = 'aba1.tpl.html';
            self.subtab = 'tab1-step1';

            self.onClickTab = function (tab) {
                self.currentTab = tab.url;
                self.subtab = tab.sub;
            }

            self.onClickSubTab = function (subtab) {
            self.subtab = subtab;
            }
            
            self.isActiveTab = function(tabUrl) {
                return tabUrl == self.currentTab;
            }		
            
            self.isActiveSubTab = function(subtabUrl) {
                return subtabUrl ==self.subtab;
            }		            
           
        }     
  
        function FormService ($resource) {
            var urlBase = '/form/';
            
            var url = $resource(urlBase,null,
                {'get': { method: 'GET'}});
            return url;       
        }    
})();