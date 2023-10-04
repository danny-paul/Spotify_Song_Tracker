import {generate_random_string, generate_code_challenge} from '../middleware/user_auth.js';
import express from 'express';

const main_router = express.Router();

main_router.use("/media", express.static('static_test'));

main_router.get("/", (req, res) => {
	let tmp_str = generate_random_string(10);
	let code_chall = generate_code_challenge(tmp_str);

	code_chall.then((challenge_is) =>{
		res.send(`ran_str: ${tmp_str}<br> code_chall:${challenge_is}`);
	});
});

export default main_router;