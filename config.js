(function() {
   'use strict';

   angular.module('app')
      .config(AppConfig)

   AppConfig.$inject = ['$stateProvider'];

   function AppConfig($stateProvider) {
      var helloState = {
         name: 'hello',
         url: '/hello',
         templateUrl: './views/hello.html'
      }

      var aboutState = {
         name: 'contact',
         url: '/contact',
         templateUrl: './views/contact.html'
      }

      $stateProvider.state(helloState);
      $stateProvider.state(aboutState);
   }
})();