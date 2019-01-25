angular.module('myApp').config(function ($routeProvider) {
    $routeProvider
        .when("/listaPersonas", {
            templateUrl: "app/controllers/listaPersonas/listaPersonas.controller.html",
            controller: "myCtrl"
        })
        .when("/agregarPersonas", {
            templateUrl: "app/controllers/agregarPersonas/agregarPersonas.controller.html",
            controller: "agregarPersonasCtl"
        })
        .when("/actualizarPersonas", {
            templateUrl: "app/controllers/actualizarPersonas/actualizarPersonas.controller.html",
            controller: "actualizarPersonasCtl"
        })
        .when("/agregarUsuario", {
            templateUrl: "app/controllers/agregarUsuario/agregarUsuario.controller.html",
            controller: "agregarUsuarioCtl"
        })
        .when("/eliminarPersonas", {
            templateUrl: "app/controllers/eliminarPersonas/eliminarPersonas.controller.html",
            controller: "eliminarPersonasCtl"
        })
        .when("web/crearUsuario.html", {
            templateUrl: "crearUsuario.html",
            controller: "crearUsuarioCtl"
        })
});