const mongoose = require("mongoose");
const AddGovSchemes = new mongoose.Schema({
  name: { type: String, default: null },
  details: { type: String},
  state: { type: String },
  type: {type: String},
  category : {type : String},
  link : {type : String},
});

module.exports = mongoose.model("schemes", AddGovSchemes);