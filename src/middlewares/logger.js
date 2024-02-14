const myLogger = function (req, res, next) {
	console.log("From middleware");
	next();
};
module.exports = { myLogger };
