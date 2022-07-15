const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = mongoose.model("User");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { email, password, user, adress, phone } = req.body;
  try {
    const newUser = new User({ email, password, user, adress, phone });
    await newUser.save();
    const token = jwt.sign({ userId: newUser._id }, "junior_salt");
    res.send({ token });
  } catch (err) {
    res.status(422).send(err.message);
  }
});

router.post("/signin", async (req, res) => {
  const { user, password } = req.body;
  if (!user || !password) {
    return res.status(422).send({ error: "Must provide user and password" });
  }
  const existingUser = await User.findOne({ user });
  if (!existingUser) {
    return res.status(404).send({ error: "user not found" });
  }
  try {
    await existingUser.comparePassword(password);
    const token = jwt.sign({ userId: existingUser._id }, "junior_salt");
    res.send({ token });
  } catch (err) {
    return res.status(422).send({ error: "Invalid user and password" });
  }
});

module.exports = router;
