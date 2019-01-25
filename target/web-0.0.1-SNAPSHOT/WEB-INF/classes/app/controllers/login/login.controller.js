(function () {
    angular.module('loginApp').controller('loginController',
        function ($scope) {
            $scope.IsVisible = false;
            $scope.ShowHide = function () {
                $scope.IsVisible = $scope.IsVisible = true;
            }
        });
})();
