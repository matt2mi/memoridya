describe('main ctrl', function() {

    var scope, httpBackend, memories, createController;

    beforeEach(angular.mock.module('memorydiaApp'));

    beforeEach(inject(function ($rootScope, $controller, $httpBackend, _memories_) {
        httpBackend = $httpBackend;
        memories = _memories_;
        scope = $rootScope.$new();

        createController = function() {
            return $controller('MainCtrl', {
                '$scope': scope
            });
        };
    }));

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('should tests', function() {
        var controller = createController();

        httpBackend.expect('GET', '/coucou')
            .respond(true);

        // have to use $apply to trigger the $digest which will
        // take care of the HTTP request
        scope.$apply(function() {
            scope.test();
        });

        httpBackend.flush();

        expect(scope.resultTest).toBe(true);
    });
});