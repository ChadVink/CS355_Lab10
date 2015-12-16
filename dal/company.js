var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.GetGPA = function(callback) {
    connection.query('SELECT * FROM companyGPA;',
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
}

exports.GetAll = function(callback) {
    connection.query('SELECT * FROM company;',
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
}

exports.GetCompany = function(companyName, callback) {
    connection.query('SELECT * FROM company WHERE companyName = \'' + companyName + '\'',
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
}

exports.Insert = function(company_info, callback) {

    //console.log(company_info);

    var dynamic_query = 'INSERT INTO company (companyName, street, city, state, zip) VALUES (' +
        '\'' + company_info.companyName + '\', ' +
        '\'' + company_info.street + '\', ' +
        '\'' + company_info.city + '\', ' +
        '\'' + company_info.state + '\', ' +
        '\'' + company_info.zip + '\'' +
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
