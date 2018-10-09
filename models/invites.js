const mongoose = require("mongoose");

const inviteSchema = mongoose.Schema({
  guests: { type: String, required: true },
  email: { type: String }
});

module.exports = mongoose.model("Invite", inviteSchema);
