var express     = require('express');
var app         = express();
var path 		= require('path');
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');

var mongodbURL	= require('./config').mongodb;
var CORShandler = require('./app/middleware').handleCORSrequests;
var authRoutes 	= require('./app/routes/auth');
var usersRoutes = require('./app/routes/users');
var studentsRoutes = require('./app/routes/students');
var parentsRoutes = require('./app/routes/parents');

// get our request parameters
//parse data in the form of x-www-form-urlencoded, http header: content-type: applicaion/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true})); //result in an object, use JSON.stringify() to transform to string if needed
//parse data in the form of json, http header: content-type: applicaion/json
app.use(bodyParser.json()); //result in an object, use JSON.stringify() to transform to string if needed

// log client request info to console
//app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

app.use(CORShandler);

mongoose.connect(mongodbURL);

//ROUTES
//public, unprotected routes 
app.use('/api/authentication', authRoutes);

//protected routes that need to verify token
app.use('/api/users/', usersRoutes);
app.use('/api/students/',studentsRoutes);
app.use('/api/parents/',parentsRoutes);
//end of protected routes

// MAIN CATCHALL ROUTE --------------- 
// SEND USERS TO FRONTEND ------------
// has to be registered after API ROUTES
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});
//END OF ROUTES

var port = process.env.PORT || '8084';
app.listen(port, process.env.IP, function(){
	console.log('CSOD web app is listening to ' + port);
});