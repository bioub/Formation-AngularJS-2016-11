(function() {
    'use strict';

    var module = angular.module('contact-list.controller', []);

    module.controller('ContactListCtrl', ['$scope', '$http', function($scope, $http) {
        
        $scope.contacts = [];

        $http.get('db.json')
            .then(function(response) {
                $scope.contacts = response.data.contacts;
            });

    }]);
}());
