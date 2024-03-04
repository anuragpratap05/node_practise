const { exec } = require("child_process");
const { stdout, stderr } = require("process");

exec("pwd", (error, stdout, stderr) => {
	if (error) {
		console.log("error->", error);
	} else if (stderr) {
		console.log("stderr->", stderr);
	} else console.log("stdout->", stdout);
});
