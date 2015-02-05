'use strict';

/**
 * @ngdoc function
 * @name memorydiaApp.controller:MemorydetailsCtrl
 * @description
 * # MemorydetailsCtrl
 * Controller of the memorydiaApp
 */
angular.module('memorydiaApp')
  .controller('MemorydetailsCtrl', function ($scope, $routeParams, memories) {
    $scope.memory = memories.getMemoryById($routeParams.id);
  });
