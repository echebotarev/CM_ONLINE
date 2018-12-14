import express from 'express';
const router = express.Router();

import logger from './../log';
const log = logger(module);

function isAuthenticated(req, res, next) {
    if (
    	!req.isAuthenticated() &&
	    (
		    !req.path.includes('verify-email') &&
	    	!req.path.includes('users') &&
	        !req.path.includes('error') &&
		    !req.path.includes('auth')
	    )
    ) {
	    res
		    .status(403)
		    .send({
			    error: 'AUTHENTICATE_FAIL',
			    auth: false,
			    username: null
		    });
    }
    else {
    	next();
    }
}

export default isAuthenticated;
