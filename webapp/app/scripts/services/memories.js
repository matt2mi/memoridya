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
                    console.log(data.message);
                });
            promise.then(function(memories) {
                    memoriesSrv.setMemories(memories.data);
                }
            );

            return promise;
        };
        memoriesSrv.addMemory = function(memory) {
            return $http.post('http://localhost:9001/memory',
                {
                    memoryId: memoriesSrv.getNextId(),
                    memoryContent: memory.memoryContent
                }).
                success(function(data) {
                    return data;
                }).
                error(function(data) {
                    console.log(data.message);
                });
        };
        memoriesSrv.deleteMemory = function(memoryId) {
            var idMongo = memoriesSrv.getMemoryById(memoryId).memoryId;
            return $http.delete('http://localhost:9001/memory/' + idMongo).
                success(function(data) {
                    return data.message;
                }).
                error(function(data) {
                    console.log(data.message);
                });
        };
        memoriesSrv.getMemoryById = function(id) {
            return memoriesSrv.memories[id];
        };
        memoriesSrv.getMemories = function() {
            return memoriesSrv.memories;
        };
        memoriesSrv.setMemories = function(memories) {
            memoriesSrv.memories = memories;
        };
        memoriesSrv.getNextId = function() {
            return memoriesSrv.getMemories().length + 1;
        };

        return memoriesSrv;
  });