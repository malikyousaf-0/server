const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:127/db");
const userschema = mongoose.Schema({
  username: String,
  id: Number,
});
module.exports = mongoose.model("users", userschema);
