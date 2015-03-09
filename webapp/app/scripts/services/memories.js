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
        this.memories = [
            {title: 'memory1', content: 'content of memory1'},
            {title: 'memory2', content: 'content of memory2'}
        ];

        this.loadMemoriesFromServer = function() {
            var reutrnStatus = {
                'success': true,
                'msg': ''
            };
            var memories = [];
            var req = {
                method: 'GET',
                url: 'localhost:9001/memories'
            };
            $http(req).
                success(function(data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    reutrnStatus.success = true;
                    reutrnStatus.msg = status;
                    memories = data;
                }).
                error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    reutrnStatus.success = false;
                    reutrnStatus.msg = status;
                });
            this.setMemories(memories);
            return reutrnStatus;
        };
        this.addMemory = function(memory) {
            this.memories.push(memory);
        };
        this.deleteMemory = function(memoryId) {
            this.memories.splice(memoryId, 1);
        };
        this.getMemories = function() {
            return this.memories;
        };
        this.getMemoryById = function(id) {
            return this.memories[id];
        };
        this.setMemories = function(memories) {
            this.memories = memories;
        };
  });