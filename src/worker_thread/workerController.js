const express = require("express");

const { startComputationFourThreads } = require("./example2/fourWorker");
const { startComputation } = require("./example2/worker");
const workerRouter = express.Router();

workerRouter.get("/non-blocking", (req, res) =>
	res.send({
		content: "This is non blocking",
		resolvedBy: process.pid,
	}),
);

workerRouter.get("/blocking", async (req, res) => {
	console.log("single worker");
	const counter = await startComputation();
	res.send({ count: counter, resolvedBy: process.pid });
});

workerRouter.get("/four-workers", async (req, res) => {
	console.log("four worker");
	const counter = await startComputationFourThreads();
	res.send({ count: counter, resolvedBy: process.pid });
});
module.exports = workerRouter;
