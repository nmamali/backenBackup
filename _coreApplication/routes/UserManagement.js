'use strict';
var express = require('express');
var middleware =  require('../../middlewares/middlewares')

var UserRouter = express.Router();
var usersController = require('../controllers/UsersController');

// users app Routes
UserRouter.route('/login')
  .get(usersController.login)
  .post(usersController.login);

UserRouter.route('/list')
  .get(middleware.checkToken ,usersController.list_all_users)
  .post(middleware.checkToken ,usersController.list_all_users); //change this to a differrent function


module.exports = UserRouter;
