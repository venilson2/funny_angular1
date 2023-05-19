angular.module("meuModulo", ["ngRoute"])
.config(function($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl: "dist/home.html",
        controller: "indexController"
    })
    .when("/contato", {
        templateUrl: "dist/contact.html",
        controller: "contactController"
    })
})