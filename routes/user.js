const express = require("express");
const userRouter = express.Router();
const User = require("../models/User");
// add user
userRouter.post("/add", async (req, res) => {
  try {
    let newuser = new User(req.body);
    let result = await newuser.save();
    res.send({ user: result, msg: "user is added" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "error adding user" });
  }
});

//get all users

userRouter.get("/", async (req, res) => {
  try {
    let result = await User.find();
    res.send({ users: result, msg: "all users" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "error adding user" });
  }
});

//find user By Id

userRouter.get("/:id", async (req, res) => {
  try {
    let result = await User.findById(req.params.id);
    res.send({ user: result, msg: "one user" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "error adding user" });
  }
});

//delete user

userRouter.delete("/:id", async (req, res) => {
  try {
    let result = await User.findByIdAndDelete(req.params.id);
    res.send({ msg: " user Is Deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "error adding user" });
  }
});

//edit user

userRouter.put("/:id", async (req, res) => {
  try {
    let result = await User.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ msg: " user Is Updated" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "error adding user" });
  }
});

module.exports = userRouter;
