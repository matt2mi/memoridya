'use strict';

describe('Service: memories', function () {

  // load the service's module
  beforeEach(module('memorydiaApp'));

  // instantiate service
  var memories;
  beforeEach(inject(function (_memories_) {
    memories = _memories_;
  }));

  it('should do something', function () {
    expect(!!memories).toBe(true);
  });

});
