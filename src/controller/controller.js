const express = require("express");
const { generateRandom, getFileData } = require("../service/practise");

const router = express.Router();

router.get("/random", (req, res) => {
	const {
		body: { size },
	} = req;

	const num = generateRandom(size);
	res.send({ num });
});

router.get("/readFile", (req, res) => {
	const data = getFileData();
	res.send({ data });
});

module.exports = router;
