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
				var token = jwt.sign({
					name: user.name,
					username: user.username
				}, secret , {
					expiresIn: '24h' // expires in 24 hours
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

router.post('/demoUser', function(req, res){
	// look for the user named demo 
	User.findOne({ 'username': 'demo' }, function(err, user) {
		console.log('demo user found');
		// if there is no demo user, create one
		if (!user) {
			var demoUser = new User();
			demoUser.name = 'Demo';  
			demoUser.username = 'demo'; 
			demoUser.password = '1234';
			demoUser.save();
		} 
		res.json({
			success: true,
			message: 'Account created, please use it to login'
		});
	});
});

module.exports = router;