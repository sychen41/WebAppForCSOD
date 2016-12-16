var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');
var config      = require('./config');
var User        = require('./models/user');
var jwt         = require('jsonwebtoken');

// get our request parameters
//parse data in the form of x-www-form-urlencoded, http header: content-type: applicaion/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false})); //result in an object, use JSON.stringify() to transform to string if needed
//parse data in the form of json, http header: content-type: applicaion/json
app.use(bodyParser.json()); //result in an object, use JSON.stringify() to transform to string if needed

// log client side request info to console
app.use(morgan('dev'));

app.use(express.static('public'));
app.set('view engine', 'ejs');

// configure our app to handle CORS requests
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
	next();
});

mongoose.connect(config.mongodb);

//public, unprotected routes 
app.get('/', function(req, res){
	res.render('students/index');
});
var authRoutes = require('./routes/auth');
app.use('/api/authetication', authRoutes);

//protected routes that need authetication
// middleware to use for all requests
app.use(function(req, res, next) {
	// do logging
	console.log('Somebody just came to our app!');
	// check header or url parameters or post parameters for token
	var token = req.body.token || req.query.token || req.headers['x-access-token'];
	// decode token
	if (token) {
		// verifies secret and checks exp
		jwt.verify(token, config.secret, function(err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next(); // make sure we go to the next routes and don't stop here
            }
		});
	} else {
		// if there is no token
		// return an HTTP response of 403 (access forbidden) and an error message
		return res.status(403).send({
            success: false,
            message: 'No token provided.'
		});
	}
});

var usersRoutes = require('./routes/users');
app.use('/api/users/', usersRoutes);
var studentsRoutes = require('./routes/students');
app.use('/api/students/',studentsRoutes);
//end of protected routes

var port = process.env.PORT || '8084';
app.listen(port, process.env.IP, function(){
	console.log('CSOD web app is listening to 8084...');
});