'use strict';

module.exports = function(app) {
  //set router for test application
  var testRoute = require("./Test");
  app.use("/api/test" , testRoute);

};
