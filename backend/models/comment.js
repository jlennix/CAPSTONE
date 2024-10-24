const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const useSchema = new Schema({
  comment: { type: String, trim: true, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user'}
});
module.exports = mongoose.model("comment", useSchema);