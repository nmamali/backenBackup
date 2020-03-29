'use strict';

//laod the jammie model from the model folder
var CovidModel = require('../model/covidModel');

//when routed to list all jammie stops x
exports.list_all_entries = function(req, res) {
  CovidModel.getAllEntries(function(err, cases) {

    console.log('controller recived data,  load all users');
    if (err)
      res.send(err);
    console.log('res', cases);
    res.send(cases);
  });
};

exports.add_new_entry = function(req, res) {
  CovidModel.addNewEntrySymptom(function(err, entry) {

    console.log('controller recived data,  add new symptom entry');
    if (err)
      res.send(err);
    console.log('res', entry);
    res.send(entry);
  } , req);
};
