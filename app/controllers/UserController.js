var _dbHelper = require('../../dbHelper/dbHelper.js');

exports.authenticateUser = function(_req, _res){
    var Sqlquery = "SELECT COUNT(1) AS isValid FROM [BBS].[Master].[Users] WHERE [LoginName] = '" + _req.params.uname + "' AND [Password] = '" + _req.params.pwd + "'";  
    _dbHelper.ExecuteScalar(_res, Sqlquery);
}
