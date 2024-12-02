const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    fullname: { type: String, default: null },
    name: { type: String , trim : true },
  email: { type: String, unique: true },
  password: { type: String },
  roleganesh: {type: Number},
  role: {type: Number , default :0},
  phone : {type : String},
  address : {type : String},
  verified :{type:Boolean , default:false},
  token: { type: String },
  resetToken: String,
  resetTokenExpiration: Date,
},{timestamps:true});

module.exports = mongoose.model("users", userSchema);