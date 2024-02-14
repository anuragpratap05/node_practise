require("dotenv").config();
const express = require("express");
const { myLogger } = require("./middlewares/logger");

const router = express.Router();

const app = express();
// app.use(express.json);
app.use(express.json());
app.use(myLogger);

const port = process.env.APP_PORT || 6000;

router.get("/", (req, res) => {
	console.log("hitted");
	res.send("good");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

module.exports = { router };
