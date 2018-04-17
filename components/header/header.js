(function () {
   'use strict';

   angular.module('app')
      .component('appHeader', {
         templateUrl: './components/header/header.html',
         controller: 'HeaderCtrl',
         bindings: {
            items: '='
         }
      });
})();