(function() {
    'use strict';

    var module = angular.module('contact-show.controller', [
        'contact.service',
        'ui.router'
    ]);

    module.controller('ContactShowCtrl', ['$scope', 'Contact', '$stateParams',
        function($scope, Contact, $stateParams) {
            $scope.contact = Contact.get({contactId: $stateParams.id});

            $scope.supprimer = function(contact) {
                contact.$delete();

                var i = $scope.contacts.findIndex(function(c) {
                    return c.id === contact.id;
                });

                $scope.contacts.splice(i, 1);
            };
        }]);
}());
