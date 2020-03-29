'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'database-2.ce4xeyyyfquk.sa-east-1.rds.amazonaws.com',
    user     : 'admin',
    password : 'corenect2019',
    database : 'covid19',
    port: 3306

});

connection.connect(function(err) {
    if (err) throw err;
    console.log ( "database connected ");
});



module.exports = connection;
