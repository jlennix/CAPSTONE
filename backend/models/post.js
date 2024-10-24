const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const useSchema = new Schema({
  title: { type: String, trim: true, required: true },
  description: { type: String, trim: true, required: true },
  image: { type: String, trim: true, required: true, unique: true }, //ask if this is right 
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user'}
});
module.exports = mongoose.model("post", useSchema);