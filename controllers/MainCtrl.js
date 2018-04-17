(function() {
   angular.module('app')
      .controller('MainCtrl', MainCtrl);

   function MainCtrl() {
      var vm = this;

      vm.title = "MainCtrl";
      vm.links = [
         { path: 'hello', name: 'Hello' },
         { path: 'contact', name: 'Contact' }
      ]

      vm.test = 'MAIN';

      vm.form = {
         name: '',
         email: ''
      }

      vm.update = function (val) {
         console.log('update in MainCtrl: ', val);
      }

      vm.updateAgain = function (val) {
         console.log('updateAgain no Main: ', val)
      }
   }
})();