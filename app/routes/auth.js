var express         = require('express');
var router          = express.Router();
var User            = require('../models/user');
var secret          = require('../../config').secret;
var jwt             = require('jsonwebtoken');

// route to authenticate a user (POST http://localhost:8084/api/authenticate)
router.post('/', function(req, res) {
	// find the user
	User.findOne({
	username: req.body.username
	}).select('name username password').exec(function(err, user) {

		if (err) throw err;

		// no user with that username was found
		if (!user) {
			res.json({
			success: false,
			message: 'Authentication failed. User not found.'
			});
		} else if (user) {

			// check if password matches
			var validPassword = user.comparePassword(req.body.password);
			if (!validPassword) {
				res.json({
					success: false,
					message: 'Authentication failed. Wrong password.'
				});
			} else {

				// if user is found and password is right
				// create a token
				var name = user.name;
				//we have to assign user.name and user.username to new variables and use
				//them in jwt.sign(...) otherwise the expiresIn won't work. This is because
				//the first arg of jws.sign(...) has be a plain object, while the 'user' return
				//by mongoose is sth a little bit different than a plain object, so we extract
				//data we needed from the 'user' and construct the plain object needed for jwt.sign(...)
				var username = user.username;
				var token = jwt.sign({
					name: name,
					username: username
					//name: user.name, //this won't work, see comments above
					//username: user.username
				}, secret , {
					expiresIn: '8h' // expires in 8 hours
				});

				// return the information including token as JSON
				res.json({
					success: true,
					message: 'Enjoy your token!',
					token: token
				});
			}

		}

	});
});

/*
//WARNING! DO NOT UNCOMMENT THIS CODE!
router.post('/demoUser', function(req, res){
	// look for the user named demo 
	User.findOne({ 'username': 'demo' }, function(err, user) {
		console.log('demo user found');
		// if there is no demo user, create one
		if (!user) {
			var demoUser = new User();
			demoUser.name = 'Shiyi Chen';  
			demoUser.username = 'Shiyi'; 
			demoUser.password = 'Cacc';
			demoUser.save();
		} 
		res.json({
			success: true,
			message: 'Account created, please use it to login'
		});
	});
});
*/

module.exports = router;