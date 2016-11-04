(function() {
    'use strict';

    // Création d'un module
    var app = angular.module('app', [])

    // Récupère un module existant
    angular.module('app')

    // Injection de dépendance ($scope existe et 
    // nous est fourni par angular)
    app.controller('PrenomCtrl', ['$scope', function($scope) {
        $scope.prenoms = ['Jean', 'Eric'];

        $scope.ajouter = function() {
            $scope.prenoms.push($scope.prenom);
            $scope.prenom = '';
        };

        $scope.$watch('prenom', function() {
            console.log('prenom a évolué : ' + $scope.prenom);
        });
    }]);

}());