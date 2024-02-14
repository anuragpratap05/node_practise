require("dotenv").config();
const express = require("express");
const { myLogger } = require("./middlewares/logger");
const { generateRandom } = require("./service/practise");

const app = express();
const router = express.Router();
app.use(express.json());
app.use("/", router);
app.use(myLogger);

const port = process.env.APP_PORT || 6000;

router.get("/random", (req, res) => {
	const {
		body: { size },
	} = req;
	console.log("from get method");
	let random = generateRandom(size);
	res.send({ random });
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

module.exports = { router };
