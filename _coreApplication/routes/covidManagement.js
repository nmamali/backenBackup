var express = require('express');
var middleware =  require('../../middlewares/middlewares')

var CovidRouter = express.Router();
var covidController = require('../controllers/covidController');

//app Routes
CovidRouter.route('/list')
  .get(covidController.list_all_entries)
  .post(covidController.list_all_entries); //change this to a differrent function

//adda new enrtry
CovidRouter.route('/addSymptomEntry')
  .get(middleware.checkToken ,covidController.add_new_entry)
  .post(middleware.checkToken ,covidController.add_new_entry); //change this to a differrent function

module.exports = CovidRouter;
