(function() {
    'use strict';

    var module = angular.module('app.routes', [
        'ui.router',
        'contact-list.controller',
        'contact-add.controller',
    ]);

    module.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {

        $locationProvider.html5Mode(false);

        $stateProvider.state({
            name: 'contact',
            url: '/contact',
            controller: 'ContactListCtrl',
            templateUrl: 'app/contact-list/contact-list.template.html',
        });

        $stateProvider.state({
            name: 'contact.ajouter',
            url: '/ajouter',
            templateUrl: 'app/contact-add/contact-add.template.html',
        });

        $urlRouterProvider.otherwise(function($injector){
            var $state = $injector.get('$state');
            $state.go('contact');
        });

    }]);
}());
