//laod the jammie model from the model folder
var CovidModel = require('../model/covidModel');
var Response = require('../model/Response');

//when routed to list all jammie stops x
exports.list_all_entries = function(req, res) {
  CovidModel.getAllEntries(function(err, data) {
  Response.send_response(err, data, res);
  });
};

exports.add_new_entry = function(req, res) {
  CovidModel.addNewEntrySymptom(function(err, data) {
  Response.send_response(err, data, res);
  } , req);
};
