(function() {
    'use strict';

    var module = angular.module('contact.service', [
        'ngResource'
    ]);

    /*
    // .service : la fonction qui suit est une fonction constructeur
    module.service('Contact', function() {
        this.get = function() {};
    });
    */

    /*
    // .factory : la fonction qui suit retourne le service
    module.factory('Contact', function() {
        return function Contact() {
            this.get = function() {

            };
        };
    });
    */

    module.factory('Contact', ['$resource', 'config', function($resource, config) {
        return $resource(config.REST_URL + '/contacts/:contactId', {contactId:'@id'});
    }]);
   
}());
