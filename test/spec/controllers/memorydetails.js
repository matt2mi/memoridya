'use strict';

describe('Controller: MemorydetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('memorydiaApp'));

  var MemorydetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MemorydetailsCtrl = $controller('MemorydetailsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
