(function () {
    'use strict';
    angular.module('myApp').controller('actualizarPersonasCtl', actualizarPersonaController);

    function actualizarPersonaController($scope, $http) {

        $scope.actualizarPersona = actualizarPersona;

        function actualizarPersona() {
            $http({
                url: '/web/rest/personaCtl/actualizarPersona',
                method: 'POST',
                data: $scope.persona
            }).success(function (data) {
                console.log("Se actualizo exitosamente el registro");
                alert('Se actualizo exitosamente el registro');
                window.location.href = "#listaPersonas";
            }).error(function () {
                console.error("Ocurrio un error al intentar actualizar persona");
            });
        }
    }
})();