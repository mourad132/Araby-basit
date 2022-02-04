var mongoose = require("mongoose")
var Schema = mongoose.Schema({
    file: String, //Student Profile 
    answer: String,
    question: String,
})

module.exports = mongoose.model(Schema, "Question")