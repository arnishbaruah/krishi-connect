
const mongoose = require("mongoose");
const ArticalSchema = new mongoose.Schema({
    title: { type: String },
    thumbnaiText: { type: String },
    paragraphOne: { type: String },
    paragraphTwo: { type: String },
    category: { type: String },
    Author: { type: String, default: "ganesh golhar" },
    path : {type :String},
    filename : {type :String},
    verified: { type: Boolean, default: true },
}, {
    timestamps: true // This will add createdAt and updatedAt fields
});

// Define a virtual field for "date" to represent the current date
ArticalSchema.virtual("date").get(function() {
    return new Date();
});



module.exports = mongoose.model("Articals", ArticalSchema);