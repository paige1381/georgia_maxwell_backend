// Dependencies =======================
// require
const express = require("express");
const router = express.Router();

// model
const Invite = require("../models/invites.js");

// Routes =============================
// index
router.get("/", async (req, res) => {
  const allInvites = await Invite.find();
  res.send(allInvites);
});

// create
router.post("/", async (req, res) => {
  try {
    const newInvite = await Invite.create(req.body);
    res.send(newInvite);
  } catch (err) {
    res.send(err.message);
  }
});

// update
router.put("/:id", async (req, res) => {
  try {
    const invite = await Invite.findByIdAndUpdate(req.params.id, req.body);
    res.send(invite);
  } catch (err) {
    res.send(err.message);
  }
});

// delete
router.delete("/:id", async (req, res) => {
  try {
    const invite = await Invite.findByIdAndRemove(req.params.id);
    res.send("invite deleted");
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
