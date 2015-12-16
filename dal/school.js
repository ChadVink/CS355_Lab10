var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.GetAll = function(callback) {
    connection.query('SELECT * FROM school;',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            console.log(result);
            callback(false, result);
        }
    );
};


exports.GetByID = function(schoolName, callback) {
    console.log(schoolName);
    var query = 'SELECT * FROM school WHERE schoolName=\'' + schoolName + '\'';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
};


exports.Insert = function(school_info, callback) {

    //console.log(school_info);

    var dynamic_query = 'INSERT INTO school (schoolName, street, city, state, zip) VALUES (' +
        '\'' + school_info.schoolName + '\', ' +
        '\'' + school_info.street + '\', ' +
        '\'' + school_info.city + '\', ' +
        '\'' + school_info.state + '\', ' +
        '\'' + school_info.zip + '\'' +
        ');';

    /* this console.log() will print out the query I'm about to send to the MySQL server via the connection.query() method.
     this log message can be copied and pasted into MySQL workbench to see if there are any SQL syntax errors.
     */console.log("test");
    console.log(dynamic_query);

    // connection.query(query, is where the SQL string we built above is actually sent to the MySQL server to be run
    connection.query(dynamic_query,
        function (err, result) {

            if(err) {
                console.log(err);
                callback(true);
                return;
            }

            callback(false, result);
        }
    );
};
