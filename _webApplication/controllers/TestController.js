'use strict';

//laod the jammie model from the model folder
var TestModel = require('../model/TestModel');

//when routed to list all test stops
exports.list_all_tests = function(req, res) {
  TestModel.getAllTests(function(err, test) {

    console.log('controller recived data,  load all test stops');
    if (err)
      res.send(err);
    console.log('res', test);
    res.send(test);
  });
};
