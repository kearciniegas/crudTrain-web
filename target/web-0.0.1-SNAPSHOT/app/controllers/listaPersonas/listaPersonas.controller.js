(function () {
    'use strict';
    angular.module('myApp').controller('myCtrl', personaController);

    function personaController($scope, $http) {
        $http.get('/web/rest/personaCtl/getPersonas')
            .success(function (data) {
                $scope.persona = data;
            });
    }
})();