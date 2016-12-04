var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    passport        = require("passport"),
    cookieParser    = require("cookie-parser"),
    session         = require("express-session"),
    Sequelize       = require("sequelize"),
    ejs             = require("ejs"),
    config          = require("./models/config"),
    // require other models if needed
    Student         = require("./models/Student_Tab");


// Requiring Routes

// app configuration
app.set("view engine", "ejs");


// connect to local mysql database using sequelize
var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});

// Test sequelize connection success or not
sequelize
    .authenticate()
    .then(function(err) {
        console.log("connections has been established successfully");
    })
    .catch(function(err) {
        console.log("Unable to connect to the database", err);
    });



// Landing page of the Chinese School app
app.get('/', function(req, res) {
    // find all rows from student_tab
    student = Student(sequelize, Sequelize);
    student.findAll({
        attributes: ['StudentKey', 'LName', 'FName']
    })
        .then(function(students) {
        for (var i = 0; i <= 10; i++) {
            console.log(students[i]);
        }
    });


    res.render("landing");
});

// app listen 2000 port on localhost
app.listen(2000, function() {
    console.log("The Chinese School Server is Running");
});


