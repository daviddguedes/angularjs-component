(function () {
   'use strict';

   angular.module('app')
      .controller('FormCtrl', FormCtrl);

   function FormCtrl() {
      var vm = this;

      vm.onSubmit = function (val) {
         vm.update({ form: val })
         console.log('Submit button in FormCtrl: ', val);
      }

      vm.updateAgain = function (val) {
         console.log('updateAgain: ', val)
      }
   }
})();