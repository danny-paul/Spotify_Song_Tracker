export function middleware_test(req, res, next) {
	let tmp_str = "I am from middlewware!"
	console.log(tmp_str);
	// res.send(tmp_str);
	next();
	// next(tmp_str);
}