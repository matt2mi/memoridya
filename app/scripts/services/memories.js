'use strict';

/**
 * @ngdoc service
 * @name memorydiaApp.memories
 * @description
 * # memories
 * Service in the memorydiaApp.
 */
angular.module('memorydiaApp')
  .service('memories', function () {
        this.memories = [
            {title: 'memory1', content: 'content of memory1'},
            {title: 'memory2', content: 'content of memory2'}
        ];

        this.addMemory = function(memory) {
            this.memories.push(memory);
        };
        this.getMemories = function() {
            return this.memories;
        };
        this.getMemoryById = function(id) {
            return this.memories[id];
        };
  });
