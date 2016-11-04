(function() {
    'use strict';

    var module = angular.module('404-interceptor.service', [
        'ui.router'
    ]);


    module.factory('404HttpInterceptor', ['$q', '$injector', function($q, $injector) {
        return {
            // optional method
            'responseError': function(rejection) {
                if (rejection.status === 404) {
                    var $state = $injector.get('$state');
                    $state.go('contact');
                }

                return $q.reject(rejection);
            }
        };
    }]);
   
}());



