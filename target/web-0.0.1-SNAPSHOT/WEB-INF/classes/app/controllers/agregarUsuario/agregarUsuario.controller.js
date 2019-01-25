(function () {
    'use strict';
    angular.module('myApp').controller('agregarUsuarioCtl', agregarUsuarioController);

    function agregarUsuarioController($scope, $http) {
        $scope.guardarUsuario = guardarUsuario;

        function guardarUsuario() {
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