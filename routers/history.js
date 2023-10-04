import express from 'express';

const history_router = express.Router();

history_router.get("/", function(req, res) {
	console.log("in history_router");
	res.send("fjdslafjkldsjafj!");
});

history_router.get("/about", (req, res) =>{
	res.send("in app/history/about/");
});

export default history_router;
