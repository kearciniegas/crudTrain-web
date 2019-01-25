(function () {
    'use strict';
    angular.module('myApp').controller('consultaPersonasCtl', consultaPersonaController);

    function consultaPersonaController($scope, $http) {

        $scope.consultaPersona = consultaPersona;

        function consultaPersona() {
            $http({
                url: '/web/rest/personaCtl/getPersonaById',
                method: 'GET',
                params: {
                    idPersona: $scope.persona.nbPersonIdn
                }
            }).success(function (data) {
                $scope.persona = data;
                console.log(data);
                if(data != null && data != '') {
                    alert('Se consulto exitosamente el registro');
                    window.location.href = "#actualizarPersonas";
                } else{
                    alert('la persona no existe registrada');
                    window.location.href = "#listaPersonas";
                }
            }).error(function () {
                console.error("Ocurrio un error al intentar consultar persona");
            });
        }
    }
})();