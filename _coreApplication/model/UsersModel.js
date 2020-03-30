'user strict';

//connect to mysqldatabase and  create tables that have not been created
var conn_sql = require("../../config/connectDatabaseMysql");
let jwt = require('jsonwebtoken');
let config = require('../../config/config');
let middleware = require('../../middlewares/middlewares');

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

UsersModel.login = function (result , res) {
      let username = "admin" ;  // req.body.username;
      let password = "password"; //req.body.password;
      // For the given username fetch user from DB
      let mockedUsername = 'admin';
      let mockedPassword = 'password';

      if (username && password) {
        if (username === mockedUsername && password === mockedPassword) {
          let token = jwt.sign({username: username},
            config.secret,
            { expiresIn: '1h' // expires in 24 hours
            }
          );
          // return the JWT token for the future API calls
          res.json({
            success: true,
            message: 'Authentication successful!',
            token: token
          });
        } else {
          res.send(403).json({
            success: false,
            message: 'Incorrect username or password'
          });
        }
      } else {
        res.send(400).json({
          success: false,
          message: 'Authentication failed! Please check the request'
        });
      }
};

module.exports= UsersModel;
