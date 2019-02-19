var _expressPackage = require("express");
var _bodyParserPackage = require("body-parser");
var _userrouter = require('./router/userRouter.js');

//Initilize app with express web framework  
var app = _expressPackage();  
//To parse result in json format  
app.use(_bodyParserPackage.json());  
app.use(_bodyParserPackage.urlencoded({extended:false}));
  
//Here we will enable CORS, so that we can access api on cross domain.  
app.use(function (req, res, next) {  
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");  
    next();  
});  
  
//Lets set up our local server now.  
var server = app.listen(process.env.PORT || 4000, function () {  
    var port = server.address().port;  
    console.log("Server is running at port: ", port);  
});  

app.use('/user', _userrouter);