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
        $scope.newMemoryId = '';
        $scope.newMemoryContent = '';
        $scope.responseError = false;
        $scope.memoriesList = [];

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
            if($scope.newMemoryContent !== '') {
                var promise = memories.addMemory({memoryTitle: $scope.newMemoryTitle, memoryContent: $scope.newMemoryContent});

                promise.then(function(memory) { // success
                        var promise = memories.loadMemoriesFromServer();
                        promise.then(function() {
                            console.log(memory);
                            console.log('Memory ' + memory.memoryId + ' successfully created !');
                            $scope.memoriesList = memories.getMemories();
                        });
                    }
                );

                $scope.showFormNewMemory = false;
                $scope.newMemoryTitle = '';
                $scope.newMemoryContent = '';
            } else {
                if($scope.newMemoryId === '') {
                    $scope.newMemoryIdError = true;
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
            var promise = memories.deleteMemory(memoryIndex);

            promise.then(function(msg) {
                    var promise = memories.loadMemoriesFromServer();
                    promise.then(function() {
                        console.log(msg.data.message);
                        $scope.memoriesList = memories.getMemories();
                        $location.path('/');
                    });
                }
            );
        };

        $scope.showAddMemory = function() {
            $scope.init();
            $scope.showFormNewMemory = true;
        };
    });
