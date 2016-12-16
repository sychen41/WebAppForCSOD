var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');
var passport    = require('passport');
var config      = require('./config');
var User        = require('./models/user');
var jwt         = require('jwt-simple');

// get our request parameters
//parse data in the form of x-www-form-urlencoded, http header: content-type: applicaion/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false})); //result in an object, use JSON.stringify() to transform to string if needed
//parse data in the form of json, http header: content-type: applicaion/json
app.use(bodyParser.json()); //result in an object, use JSON.stringify() to transform to string if needed

// log client side request info to console
app.use(morgan('dev'));

app.use(express.static('public'));
app.set('view engine', 'ejs');

// use the passport package in out app
app.use(passport.initialize());

var studentsRoutes = require('./routes/students');
app.use('/api/students/',studentsRoutes);

app.get('/', function(req, res){
    res.render('students/index');
});

var port = process.env.PORT || '8084';
app.listen(port, process.env.IP, function(){
    console.log('CSOD web app is listening to 8084...');
});