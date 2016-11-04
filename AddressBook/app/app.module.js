(function() {
    'use strict';

    var module = angular.module('app.module', [
        'app.routes',
        '404-interceptor.service',
        'angular-loading-bar',
        'bs-alert.component',
    ]);

    module.constant('config', {
        REST_URL: 'http://localhost:3000',
    });

    module.config(['$httpProvider', function($httpProvider) {
        $httpProvider.interceptors.push('404HttpInterceptor');
    }]);
}());
