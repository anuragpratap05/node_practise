const { Worker } = require("worker_threads");

async function computePromise() {
	return new Promise((resolve, reject) => {
		const worker = new Worker(__dirname + "/longCompute.js");
		worker.once("message", (data) => resolve(data));
		worker.once("error", (err) => reject(err));
	});
}

async function startComputation() {
	console.log("startComputation");
	const ans = await computePromise();
	console.log("startComputation ans");

	return ans;
}
module.exports = { startComputation };
