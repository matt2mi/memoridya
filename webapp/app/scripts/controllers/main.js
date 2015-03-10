'use strict';

/**
 * @ngdoc function
 * @name memorydiaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the memorydiaApp
 */
angular.module('memorydiaApp')
    .controller('MainCtrl', function ($scope, $location, memories) {
        $scope.showFormNewMemory = false;
        $scope.hoverMemory = false;
        $scope.newMemoryTitle = '';
        $scope.newMemoryContent = '';
        $scope.responseError = false;

        $scope.init = function() {
            memories.loadMemoriesFromServer().then(function(data) {
                    $scope.memoriesList = data.data;
                    $scope.responseError = false;
                },
                function(error) {
                    console.log('Erreur : ' + error);
                    $scope.responseError = true;
                }
            );
        };

        $scope.addMemory = function () {
            if($scope.newMemoryTitle !== '' || $scope.newMemoryContent !== '') {
                memories.addMemory({title: $scope.newMemoryTitle, content: $scope.newMemoryContent});
                $scope.memoriesList = memories.getMemories();

                $scope.showFormNewMemory = false;
                $scope.newMemoryTitle = '';
                $scope.newMemoryContent = '';
            } else {
                if($scope.newMemoryTitle === '') {
                    $scope.newMemoryTitleError = true;
                }
                if($scope.newMemoryContent === '') {
                    $scope.newMemoryContentError = true;
                }
            }
        };

        $scope.cancelAddMemory = function() {
            $scope.showFormNewMemory = false;
        };

        $scope.openMemory = function(memoryIndex) {
            $location.path('/memoryDetails/' + memoryIndex);
        };

        $scope.deleteMemory = function(memoryIndex) {
            memories.deleteMemory(memoryIndex);
        };

        $scope.showAddMemory = function() {
            $scope.init();
            $scope.showFormNewMemory = true;
        };
    });
