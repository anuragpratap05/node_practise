const { Worker, workerData } = require("worker_threads");

const threads = 4;
async function computePromise() {
	return new Promise((resolve, reject) => {
		const start = Date.now();
		const worker = new Worker(__dirname + "/fourCompute.js", {
			workerData: { threads },
		});
		worker.once("message", (data) => {
			console.log(
				`worker [${worker.threadId}]: completed fib in ${
					Date.now() - start
				} ms`,
			);
			resolve(data);
		});
		worker.once("error", (err) => reject(err));
	});
}

async function startComputationFourThreads() {
	let toExec = [];
	for (let i = 0; i < threads; i++) {
		toExec.push(computePromise());
	}

	const values = await Promise.all(toExec);
	console.log("values-->", values);
	let sum = 0;
	for (let val of values) {
		sum += val;
	}

	return sum;
}
module.exports = { startComputationFourThreads };
