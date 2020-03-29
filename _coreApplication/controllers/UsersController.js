'use strict';

//laod the jammie model from the model folder
var UsersModel = require('../model/UsersModel');

//when routed to list all jammie stops x
exports.list_all_users = function(req, res) {
  UsersModel.getAllUsers(function(err, users) {

    console.log('controller recived data,  load all users');
    if (err)
      res.json(err);
    console.log('res', users);
    res.json(users);
  });


};
