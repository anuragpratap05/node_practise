const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/my_db");
const MyModel = mongoose.model("Test", new mongoose.Schema({ name: String }));
