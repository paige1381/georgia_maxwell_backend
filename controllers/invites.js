// Dependencies =======================
// require
const express = require("express");
const router = express.Router();
const cors = require("cors"); // npm i cors

// model
const Invite = require("../models/invites.js");

var whitelist = [
  "http://www.georgiaandmaxwell.com/",
  "http://localhost:3000/",
  "https://georgia-maxwell-ui.herokuapp.com/",
  "https://georgia-maxwell-backend.herokuapp.com/"
];
var corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};

// Routes =============================
// index
router.get("/", cors(corsOptions), async (req, res, next) => {
  const allInvites = await Invite.find();
  res.send(allInvites);
});

// create
router.post("/", cors(corsOptions), async (req, res, next) => {
  try {
    const newInvite = await Invite.create(req.body);
    res.send(newInvite);
  } catch (err) {
    res.send(err.message);
  }
});

// update
router.put("/:id", cors(corsOptions), async (req, res, next) => {
  try {
    const invite = await Invite.findByIdAndUpdate(req.params.id, req.body);
    res.send(invite);
  } catch (err) {
    res.send(err.message);
  }
});

// delete
router.delete("/:id", cors(corsOptions), async (req, res, next) => {
  try {
    const invite = await Invite.findByIdAndRemove(req.params.id);
    res.send("invite deleted");
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
