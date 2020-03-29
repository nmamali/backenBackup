'use strict';
var express = require('express');

var UserRouter = express.Router();
var jammieController = require('../controllers/UsersController');

// users app Routes
UserRouter.route('/list')
  .get(jammieController.list_all_users)
  .post(jammieController.list_all_users); //change this to a differrent function

module.exports = UserRouter;
