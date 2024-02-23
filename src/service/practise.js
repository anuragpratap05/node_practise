const fs = require("fs");
function generateRandom(n) {
	let minNum = Math.pow(10, n - 1);
	let maxNum = Math.pow(10, n) - 1;
	let num = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
	console.log(num);
	return num;
}

function getFileData() {
	const data = fs.readFileSync(__dirname + "/abc.txt", "utf-8");
	// fs.readFile(__dirname + "/abc.txt", (err, data) => {
	// 	if (err) {
	// 		console.log("err->", err);
	// 	} else console.log("data-->", data.toString());
	// });
	console.log("Data-->", data);
	return "good";
}

function getFileDataInChunks() {
	const stream = fs.createReadStream(__dirname + "/abc.txt", "utf-8");
	stream.on("data", (chunk) => res.write(chunk));
	stream.on("end", () => res.end());

	console.log("Data-->", data);
	return "good";
}
module.exports = { generateRandom, getFileData };
