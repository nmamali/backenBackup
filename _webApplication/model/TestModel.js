'user strict';

//connect to mysqldatabase and  create tables that have not been created
var conn_sql = require("../../config/connectDatabaseMysql");

//Task object constructor
var TestModel = function(testModel){
  this.testModel = testModel.testModel;
  this.testModel = testModel.testModel;
  this.created_at = new Date();
};

TestModel.getAllTests = function (result) {
  //get all test from the stops table
  var sql = "Select * from stops";
  conn_sql.query(sql , function (err, res) {
      if(err) {
        console.log("error: ", err);
        result(null, err);
      }
      else{
        console.log('test fetched in model : ', res);
        result(null, res);
      }
  });
};

module.exports= TestModel;
