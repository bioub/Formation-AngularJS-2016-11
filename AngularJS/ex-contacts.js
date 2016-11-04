(function() {
    'use strict';

    var app = angular.module('app', []);

    app.controller('ContactCtrl', ['$scope', function($scope) {
        $scope.contacts = [];

        $scope.ajouter = function() {
            var contact = angular.copy($scope.contact);
            $scope.contacts.push(contact);
        };

        $scope.supprimer = function(contact) {
            var i = $scope.contacts.indexOf(contact);
            $scope.contacts.splice(i, 1);
        };
    }]);
}());