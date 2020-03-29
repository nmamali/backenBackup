'user strict';

//connect to mysqldatabase and  create tables that have not been created
var conn_sql = require("../../config/connectDatabaseMysql");

//Task object constructor
var CovidModel = function(covidModel){
  this.covidModel = covidModel.covidModel;
  this.covidModel = covidModel.covidModel;
  this.created_at = new Date();
};

CovidModel.getAllEntries = function (result) {
  //get all users from the users table
  var sql = "Select * from symptomsEntries";
  conn_sql.query(sql , function (err, res) {
      if(err) {
        console.log("error: ", err);
        result(null, err);
      }
      else{
        console.log('cases fetched in model : ', res);
        result(null, res);
      }
  });
};

CovidModel.addNewEntrySymptom = function (result, req) {
  //add new symptomsEntries

  console.log( req.body  + " >>>>>>>>>>>>>>>>>>>");

  cough =  Math.floor(Math.random() * 11);
  fever =  Math.floor(Math.random() * 11);
  weakness =  Math.floor(Math.random() * 11);
  breathing =  Math.floor(Math.random() * 11);
  headache =  Math.floor(Math.random() * 11);


  var sql = "INSERT INTO symptomsEntries (userId, cough, fever, weakness, breathing, headache) VALUES ('"+999+"', '"+cough+"', '"+fever+"', '"+weakness+"', '"+breathing+"', '"+headache+"')";

  conn_sql.query(sql , function (err, res) {
      if(err) {
        console.log("error: ", err);
        result(null, err);
      }
      else{
        console.log('cases fetched in model : ', res);
        result(null, res);
      }
  });

};

module.exports= CovidModel;
