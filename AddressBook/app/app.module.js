(function() {
    'use strict';

    var module = angular.module('app.module', ['app.routes']);

    module.constant('config', {
        REST_URL: 'http://localhost:3000',
    });
}());
