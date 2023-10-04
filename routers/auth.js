import express from 'express';
import querystring from 'query-string';
import {generate_random_string} from '../middleware/user_auth.js';
import {CLIENT_ID, SCOPES, REDIRECT_URI} from '../config/config.js';

const auth_router = express.Router();

auth_router.get('/login', function(req, res) {
	var state = generate_random_string(16);

	res.redirect('https://accounts.spotify.com/authorize?' +
		querystring.stringify({
		response_type: 'code',
		client_id: CLIENT_ID,
		scope: SCOPES,
		redirect_uri: REDIRECT_URI,
		state: state
	}));
});

auth_router.get('/callback',function(req, res) {
	res.send("login approved!");
});
export {auth_router as default};
