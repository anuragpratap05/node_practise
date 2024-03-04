require("dotenv").config();
const cluster = require("cluster");
const os = require("os");
const express = require("express");
const { myLogger } = require("./middlewares/logger");
const router = require("./controller/controller");
const workerRouter = require("./worker_thread/workerController");

const app = express();
app.use(express.json());

app.use(myLogger);
app.use("/", router);
app.use("/worker", workerRouter);

let numOfCpus = os.cpus().length;

const port = process.env.APP_PORT || 6000;

// if (cluster.isPrimary) {
// 	while (numOfCpus--) {
// 		cluster.fork();
// 	}
// } else {
// 	app.listen(port, () => {
// 		console.log(` app listening on port ${port} at pid ${process.pid}`);
// 	});
// }
app.listen(port, () => {
	console.log(` app listening on port ${port} at pid ${process.pid}`);
});
