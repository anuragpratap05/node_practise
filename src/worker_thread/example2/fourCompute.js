const { workerData, parentPort } = require("worker_threads");

function getComputation() {
	let count = 0;
	console.log("executing...");
	for (let i = 0; i < 20_000_000_000 / workerData.threads; i++) {
		count++;
	}
	return count;
}
const ans = getComputation();

parentPort.postMessage(ans);
