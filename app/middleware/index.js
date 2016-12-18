var jwt         = require('jsonwebtoken');
var config      = require('../../config');

var middlewareObj = {};
middlewareObj.verifyToken = function(req, res, next) {
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
};

// configure our app to handle CORS requests
middlewareObj.handleCORSrequests =  function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
	next();
};

module.exports = middlewareObj;
