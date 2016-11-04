(function() {
    'use strict';

    var module = angular.module('bs-alert.component', []);

    module.controller('BsAlertCrl', [function() {
        this.type = this.type || 'danger';
    }]);

    module.component('bsAlert', {
        bindings: {
            type: '<'
        },
        transclude: true,
        controller: 'BsAlertCrl',
        templateUrl: 'app/bs-alert/bs-alert.template.html',
    });
}());
