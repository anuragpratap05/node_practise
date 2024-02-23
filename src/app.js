require("dotenv").config();
const express = require("express");
const { myLogger } = require("./middlewares/logger");
const router = require("./controller/controller");

const app = express();
app.use(express.json());
app.use(myLogger);
app.use("/", router);

const port = process.env.APP_PORT || 6000;

app.listen(port, () => {
	console.log(` app listening on port ${port}`);
});
