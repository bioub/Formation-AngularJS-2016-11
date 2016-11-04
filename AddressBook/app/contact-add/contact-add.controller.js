(function() {
    'use strict';

    var module = angular.module('contact-add.controller', []);

    module.controller('ContactAddCtrl', ['$scope', '$state', 'Contact', function($scope, $state, Contact) {

        $scope.ajouter = function() {
            /*
            Contact.save($scope.contact, function() {
                // REDIRECT
            });
            */

            var contact = new Contact($scope.contact);
            contact.$save(function() {
                $state.go('contact.show', {id: contact.id});
            });
        };

    }]);
}());
