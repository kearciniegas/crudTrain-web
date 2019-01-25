(function () {
    'use strict';
    angular.module('myApp').controller('eliminarPersonasCtl', eliminarPersonaController);
    function eliminarPersonaController($scope, $http, sharedMap) {
        $scope.eliminarPersona = eliminarPersona;
        function eliminarPersona() {
            $http({
                url: '/web/rest/personaCtl/eliminarPersona',
                method: 'POST',
                params: {
                    idPersona: $scope.persona.nbPersonIdn
                }
            }).success(function (data) {
                console.log("Se eliminar exitosamente el registro");
                alert('Se elimino exitosamente el registro');
                window.location.href = "#listaPersonas";

            }).error(function () {
                alert('la persona que desea eliminar no existe');
                window.location.href = "#listaPersonas";
            });
        }
    }
})();