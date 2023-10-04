import { error } from 'console';
import express from 'express';

const error_router = express.Router();

error_router.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send("Something Broke");
});

export {error_router};