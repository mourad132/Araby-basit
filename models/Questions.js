var mongoose = require("mongoose")
var Schema = mongoose.Schema({
    profile: String, //Student Profile 
    answer: String,
    question: String,
})

module.exports = mongoose.model("Question", Schema)