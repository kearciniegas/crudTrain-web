(function () {
    'use strict';
    angular.module('myApp').controller('agregarPersonasCtl', agregarPersonaController);

    function agregarPersonaController($scope, $http) {

        $scope.guardarPersona = guardarPersona;

        function guardarPersona() {
            $http({
                url: '/web/rest/personaCtl/guardarPersona',
                method: 'POST',
                data: $scope.persona
            }).success(function (data) {
                console.log("Se guardó exitosamente el registro");
                window.location.href = "#listaPersonas";
            }).error(function () {
                console.error("Ocurrio un error al intentar almacenar persona");
            });
        }
    }
})();