const { Worker } = require("worker_threads");

const fibPromise = (iterations) =>
	new Promise((resolve, reject) => {
		const start = Date.now();
		const worker = new Worker("./fib.js", {
			workerData: { iterations },
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

const main = async () => {
	const start = Date.now();

	let toExec = [];

	for (let i = 0; i < 8; i++) {
		toExec.push(fibPromise(40));
	}
	const ans = await Promise.all(toExec);
	console.log("ans-->", ans);

	console.log(`Done Process in ${Date.now() - start} ms`);
};

main();
