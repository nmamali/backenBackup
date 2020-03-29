'use strict';
var express = require('express');

var TestRouter = express.Router();
var testController = require('../controllers/TestController');

// TestRouter app Routes
TestRouter.route('/testStops')
  .get(testController.list_all_tests)
  .post(testController.list_all_tests); //change this to a differrent function

module.exports = TestRouter;
