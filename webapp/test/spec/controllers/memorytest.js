'use strict';

describe('Controller: MemorytestCtrl', function () {

  // load the controller's module
  beforeEach(module('memorydiaApp'));

  var MemorytestCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MemorytestCtrl = $controller('MemorytestCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
