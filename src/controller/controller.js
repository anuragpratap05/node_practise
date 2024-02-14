const { router } = require("../router/router");
const { generateRandom } = require("../service/practise");
router.get("/random", (req, res) => {
	const {
		body: { size },
	} = req;
	console.log("from get method");
	let random = generateRandom(size);
	res.send({ random });
});
