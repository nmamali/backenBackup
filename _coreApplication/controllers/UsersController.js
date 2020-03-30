'use strict';

//laod the jammie model from the model folder
var UsersModel = require('../model/UsersModel');
var Response = require('../model/Response');

//when routed to list all jammie stops x

exports.login = function(req, res) {
  UsersModel.login(function(err, data) {
    Response.send_response(err, data, res);
  } , res);
};

exports.list_all_users = function(req, res) {
  UsersModel.getAllUsers(function(err, data) {
    Response.send_response(err, data, res);
  });
};
