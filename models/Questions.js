var mongoose = require("mongoose")
var Schema = mongoose.Schema({
    profile: String, //Student Profile 
    answer: String,
    question: String,
    grade: String,
})

module.exports = mongoose.model(Schema, "Question")