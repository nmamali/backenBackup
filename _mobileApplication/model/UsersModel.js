'user strict';

//connect to mysqldatabase and  create tables that have not been created
var conn_sql = require("../../config/connectDatabaseMysql");

//Task object constructor
var UsersModel = function(usersModel){
  this.usersModel = usersModel.usersModel;
  this.usersModel = usersModel.usersModel;
  this.created_at = new Date();
};

UsersModel.getAllUsers = function (result) {
  //get all users from the users table
  var sql = "Select * from users";
  conn_sql.query(sql , function (err, res) {
      if(err) {
        console.log("error: ", err);
        result(null, err);
      }
      else{
        console.log('users fetched in model : ', res);
        result(null, res);
      }
  });
};

module.exports= UsersModel;
