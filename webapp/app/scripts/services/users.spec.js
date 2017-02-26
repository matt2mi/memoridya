/**
 * Created by mathieudeumie on 26/02/2017.
 */
describe('users', function() {

    var Users;

    beforeEach(angular.mock.module('memorydiaApp'));

    beforeEach(inject(function(_Users_) {
        Users = _Users_;
    }));

    it('should exist', function() {
        expect(Users).toBeDefined();
    });

    //describe('.all()', function() {
    //    it('should exist', function() {
    //        expect(Users.all).toBeDefined();
    //    });
    //
    //    it('should return a hard-coded list of users', function() {
    //        expect(Users.all()).toEqual(userList);
    //        expect(Users.all().length).toEqual(4);
    //    });
    //});


    //describe('.findById()', function() {
    //    it('should exist', function() {
    //        expect(Users.findById).toBeDefined();
    //    });
    //
    //    it('should return one user object if it exists', function() {
    //        expect(Users.findById('2')).toEqual(singleUser);
    //    });
    //
    //    it('should return undefined if the user cannot be found', function() {
    //        expect(Users.findById('ABC')).not.toBeDefined();
    //    });
    //});
});