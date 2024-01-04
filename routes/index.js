var express = require("express");
var router = express.Router();
const usermodel = require("./users");

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index", { title: "Express" });
});

router.get("/adduser", async function (req, res) {
  try {
    const newUser = await usermodel.create({ username: "usaa", id: 2 });
    res.send(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
///khukhkjhkjhkjhkjhkjhkjh

router.get("/user", async function (req, res, next) {
  try {
    const users = await usermodel.find();
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
