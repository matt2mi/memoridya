var express = require('express');
var router = express.Router();
 
//var auth = require('../auth/auth');
var memoriesDao = require('../dao/memoriesDao');
//var user = require('../dao/users');
 
 
/*
 * Login, accessible by anyone, you can find the logic for login function in auth/validate.js
 */
//router.post('/login', auth.login);
 
/*
 * Routes for memories
 */
router.get('/memories', memoriesDao.getAll);
router.get('/memory/:id', memoriesDao.getOne);
router.post('/memory/', memoriesDao.createOne);
router.put('/memory/:id', memoriesDao.update);
router.delete('/memory/:id', memoriesDao.delete);
 
/*
 * Routes for users
 *  -Only accessible by role admin.
 *  -The logic that controls that is located in the user data access object)
 *
router.get('/users', user.getAll);
router.get('/user/:id', user.getOne);
router.post('/user/', user.create);
router.put('/user/:id', user.update);
router.delete('/user/:id', user.delete);
 */
module.exports = router;

