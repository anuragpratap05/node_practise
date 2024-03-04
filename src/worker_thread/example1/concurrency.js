function getFib(n) {
	return n < 1 ? 0 : n <= 2 ? 1 : getFib(n - 1) + getFib(n - 2);
}

const fibPromise = (iterations) =>
	new Promise((resolve, reject) => {
		const start = Date.now();
		const results = getFib(iterations);
		console.log(`completed fib in ${Date.now() - start} ms`);
		resolve(results);
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
