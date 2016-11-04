(function() {
    'use strict';

    var module = angular.module('app.routes', [
        'ui.router',
        'contact-list.controller',
        'contact-add.controller',
        'contact-show.controller',
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
            controller: 'ContactAddCtrl',
            templateUrl: 'app/contact-add/contact-add.template.html',
        });

        $stateProvider.state({
            name: 'contact.show',
            url: '/:id',
            controller: 'ContactShowCtrl',
            templateUrl: 'app/contact-show/contact-show.template.html',
        });

        $urlRouterProvider.otherwise(function($injector){
            var $state = $injector.get('$state');
            $state.go('contact');
        });

    }]);
}());
