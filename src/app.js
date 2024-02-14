const express = require("express");

const app = express();

const port = process.env.APP_PORT || 6000;

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
