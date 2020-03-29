const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

// include routes
var coreAppRoutes = require('./_coreApplication/routes/index');
coreAppRoutes(app); //register the core app api

var mobileAppRoutes = require('./_mobileApplication/routes/index');
mobileAppRoutes(app); //register the mobile app api

var webAppRoutes = require('./_webApplication/routes/index');
webAppRoutes(app); //register the web app api

app.use(express.static('public'));

// start server
const server = app.listen(port, () => {
  console.log("Server started on port " + port);
});

module.exports = server;
