const express = require("express");
const {
	generateRandom,
	getFileData,
	getFileDataInChunks,
} = require("../service/practise");
const { getSumUsingFork, getSumWithoutFork } = require("../child_process/fork");

const router = express.Router();

router.get("/random", (req, res) => {
	const {
		body: { size },
	} = req;

	const num = generateRandom(size);
	res.send({ num, resolvedBy: process.pid });
});

router.get("/readFile", (req, res) => {
	const data = getFileData();
	res.send({ data });
});

router.get("/readFileChunks", (req, res) => {
	getFileDataInChunks(res);
});

router.get("/fork", (req, res) => {
	const startTime = Date.now();
	getSumUsingFork(res, startTime);
});

router.get("/without-fork", (req, res) => {
	const startTime = Date.now();
	const sum = getSumWithoutFork();
	res.send({ sum, Time: Date.now() - startTime });
});

module.exports = router;
