'use strict';

module.exports = function(app) {
  //add users mgt route
  
  var usersRoute = require("./UserManagement");
  app.use("/api/users" , usersRoute);

};
