function generateRandom(n) {
	let minNum = Math.pow(10, n - 1);
	let maxNum = Math.pow(10, n) - 1;
	let num = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
	return num;
}

module.exports = { generateRandom };