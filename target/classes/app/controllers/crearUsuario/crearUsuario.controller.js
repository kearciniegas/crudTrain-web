(function () {
    'use strict';
    angular.module('myApp').controller('crearUsuarioCtl', crearUsuarioController);
    function crearUsuarioController($scope, $http) {

        $scope.crearUsuario = crearUsuario;
        $scope.crearIngresar = crearIngresar;

        function crearUsuario() {
            $http({
                url: '/web/rest/personaCtl/guardarPersona',
                method: 'POST',
                data: $scope.persona
            }).success(function (data) {
                console.log("Se guardó exitosamente el registro");
                alert('Se guardó exitosamente el registro');
                window.location.href = "#listaPersonas";
            }).error(function () {
                console.error("Ocurrio un error al intentar almacenar persona");
            });
        }
        function crearIngresar() {
            $http({
                url: '/web/rest/usuarioCtl/guardarUsuario',
                method: 'POST',
                data: $scope.user
            }).success(function (data) {
                console.log("Se guardó exitosamente el usuario");
                alert('Se guardó exitosamente el usuario');
                window.location.href = "#listaPersonas";
            }).error(function () {
                console.error("Ocurrio un error al intentar almacenar usuario");
            });
        }
    }

})();