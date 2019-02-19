var _sqlPackage = require("mssql");  
var configurationManager = require('../package.json');

//db connection URL
var dbConfig = configurationManager.config;

//Function to connect to database and execute scalar query  
exports.ExecuteScalar = function (response, strQuery) {  
    //close sql connection before creating an connection otherwise you will get an error if connection already exists.  
    _sqlPackage.close();  
    //Now connect your sql connection  
    _sqlPackage.connect(dbConfig, function (error) {  
        if (error) {  
            console.log("Error while connecting to database :- " + error);  
            response.send(error);  
        }  
        else {  
            //let's create a request for sql object  
            const request = new _sqlPackage.Request();  
            //Query to run in our database  
            request.query(strQuery, (error, result) => {  
                if (error) {  
                    console.log("Error while connecting to database:- " + error);  
                    response.send(error.message);  
                }  
                else {  
                    console.log(result);
                    response.status(200).json({ result: result.recordset[0][Object.keys(result.recordset[0])[0]]});  
                }
            });  
        }  
    });             
 }

 //Function to connect to database and execute non-query  
exports.ExecuteNonQuery = function (response, strQuery) {  
    //close sql connection before creating an connection otherwise you will get an error if connection already exists.  
    _sqlPackage.close();  
    //Now connect your sql connection  
    _sqlPackage.connect(dbConfig, function (error) {  
        if (error) {  
            console.log("Error while connecting to database :- " + error);  
            response.send(error);  
        }  
        else {  
            //let's create a request for sql object  
            const request = new _sqlPackage.Request();  
            //Query to run in our database  
            request.query(strQuery, function(error, result) {  
                if (error) {  
                    console.log("Error while connecting to database:- " + error);  
                    response.send(error.message);  
                }  
                else {  
                    response.send(Object.keys(result.recordset)[0]);  
                }  
            });  
        }  
    });             
 }