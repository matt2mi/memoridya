'use strict';

/**
 * @ngdoc function
 * @name memorydiaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the memorydiaApp
 */
angular.module('memorydiaApp')
    .controller('MainCtrl', function ($scope) {
        $scope.showFormNewMemory = false;
        $scope.newMemoryTitle = '';
        $scope.newMemoryContent = '';
        $scope.memories = [
            {title: 'memory1', content: 'content of memory1'},
            {title: 'memory2', content: 'content of memory2'},
            {title: 'memory3', content: 'content of memory3'},
            {title: 'memory4', content: 'content of memory4'},
            {title: 'memory5', content: 'content of memory5'}
        ];

        $scope.addMemory = function () {
            if($scope.newMemoryTitle !== '' || $scope.newMemoryContent !== '') {
                $scope.memories.push({title: $scope.newMemoryTitle, content: $scope.newMemoryContent});
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

        $scope.openMemory = function(memoryIndex) {
            console.log($scope.memories[memoryIndex]);
        };

        $scope.showAddMemory = function() {
            $scope.showFormNewMemory = true;
        };
    });
