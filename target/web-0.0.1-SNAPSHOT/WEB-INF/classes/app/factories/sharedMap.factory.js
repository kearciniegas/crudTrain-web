(function () {
    'use strict';
    angular.module('myApp').factory('sharedMap', sharedMapFactory);

    function sharedMapFactory() {

        var mapa = {};
        var metodos = {
            set: set,
            get: get
        }
        return metodos;

        function set(clave, valor) {
            mapa[clave] = valor;
        }

        function get(clave) {
            return mapa[clave];
        }
    }
})();