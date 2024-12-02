// models/contactus.js
const mongoose = require('mongoose');

const contactUsSchema = new mongoose.Schema({
  name : String ,
  email: String,
  message: String,
  timestamp: { type: Date, default: Date.now },
});

const ContactUs = mongoose.model('contactUs', contactUsSchema);

module.exports = ContactUs;
