'use strict';

/**
 * @ngdoc overview
 * @name memorydiaApp
 * @description
 * # memorydiaApp
 *
 * Main module of the application.
 */
angular
  .module('memorydiaApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/memoryDetails/:id', {
        templateUrl: 'views/memorydetails.html',
        controller: 'MemorydetailsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
