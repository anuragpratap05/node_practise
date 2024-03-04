const { fork } = require("child_process");
const { longTask } = require("./longTask");

function getSumUsingFork(res, startTime) {
	const child = fork(__dirname + "/longTask.js");

	child.send("start");
	child.on("message", (sum) => {
		res.send({ sum: sum, time: Date.now() - startTime });
	});
}

function getSumWithoutFork(res, startTime) {
	const sum = longTask();
	return sum;
}

module.exports = { getSumUsingFork,getSumWithoutFork };
