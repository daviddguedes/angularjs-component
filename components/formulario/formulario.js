(function () {
    'use strict';

    angular.module('app')
        .component('appFormulario', {
            templateUrl: './components/formulario/formulario.html',
            controller: 'FormCtrl',
            bindings: {
                update: '&',
                testando: '='
            }
        });
})();