const express = require("express");
const { generateRandom } = require("../service/practise");

const router = express.Router();

router.get("/random", (req, res) => {
	const {
		body: { size },
	} = req;

	const num = generateRandom(size);
	res.send({ num });
});

module.exports = router;
