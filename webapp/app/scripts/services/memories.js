'use strict';

/**
 * @ngdoc service
 * @name memorydiaApp.memories
 * @description
 * # memories
 * Service in the memorydiaApp.
 */
angular.module('memorydiaApp')
  .service('memories', function ($http) {
        var memoriesSrv = this;
        memoriesSrv.memories = [];

        memoriesSrv.loadMemoriesFromServer = function() {
            var promise = $http({method: 'GET', url: 'http://localhost:9001/memories'}).
                success(function(data) {
                    var memories = [];
                    angular.forEach(data, function(value) {
                        memories.push({memoryId: value.memoryId, memoryContent: value.memoryContent});
                    });
                    return memories;
                }).
                error(function(data) {
                    console.log('Erreur dans memories.js : ' + data);
                    return [];
                });
            promise.then(function(memories) {
                memoriesSrv.setMemories(memories.data);
            });

            return promise;
        };
        memoriesSrv.addMemory = function(memory) {
            memoriesSrv.memories.push(memory);
        };
        memoriesSrv.deleteMemory = function(memoryId) {
            memoriesSrv.memories.splice(memoryId, 1);
        };
        memoriesSrv.getMemories = function() {
            return memoriesSrv.memories;
        };
        memoriesSrv.getMemoryById = function(id) {
            return memoriesSrv.memories[id];
        };
        memoriesSrv.setMemories = function(memories) {
            memoriesSrv.memories = memories;
        };

        return memoriesSrv;
  });