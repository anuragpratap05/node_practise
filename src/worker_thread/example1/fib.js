const { workerData, parentPort } = require("worker_threads");

function getFib(n) {
	console.log("getFib");
	return n < 1 ? 0 : n <= 2 ? 1 : getFib(n - 1) + getFib(n - 2);
}
function start(x) {
	console.log(x);
}
start(":message is good");
const result = getFib(workerData.iterations);
parentPort.postMessage(result);
