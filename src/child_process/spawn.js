const { spawn } = require("child_process");
const child = spawn("find", ["/"]);

child.stdout.on("data", (data) => console.log("stdout->", data.toString()));

child.stderr.on("data", (data) => console.log("stderr->", data));

child.on("error", (error) => console.log("error->", error));

child.on("exit", (code, signal) => {
	if (code) console.log("process exit with code: ", code);
	if (signal) console.log("process exit with code: ", signal);
	console.log("DONE 😎");
});
