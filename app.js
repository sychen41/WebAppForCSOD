var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');

//parse data in the form of x-www-form-urlencoded, http header: content-type: applicaion/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true})); //result in an object, use JSON.stringify() to transform to string if needed
//parse data in the form of json, http header: content-type: applicaion/json
app.use(bodyParser.json()); //result in an object, use JSON.stringify() to transform to string if needed
app.use(express.static('public'));
app.set('view engine', 'ejs');

var studentsRoutes = require('./routes/students');
app.use('/api/students/',studentsRoutes);


app.listen('8084', process.env.IP, function(){
    console.log('CSOD web app started...');
});