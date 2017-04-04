// script.js

    // create the module and name it webAgentApp
        // also include ngRoute for all our routing needs
    var mongoExamApp = angular.module('projectifyApp', ['ui.router','ngMessages', 'ngResource']);

    // configure our routes
    mongoExamApp.config(function($stateProvider, $urlRouterProvider, $locationProvider,$resourceProvider) {
        //$locationProvider.hashPrefix('');
        // Don't strip trailing slashes from calculated URLs
        //$resourceProvider.defaults.stripTrailingSlashes = false;
        
        $urlRouterProvider.otherwise('/');
        
        $stateProvider
        
        .state('home', {
            url: '/',
            templateUrl: 'templates/mongooseexample.html',
            controller  : 'userCntrl'
        })
        
        
        $locationProvider.html5Mode(true);
        
    });

   