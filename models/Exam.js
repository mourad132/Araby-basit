var mongoose = require("mongoose")
var Schema = mongoose.Schema({
    questions: [],
    time: Number,
    title: String,
    passed: [],
    type: {
        unit: Number,
        lesson: String,
        branch: String,
        term: Number,
    }
})

module.exports = mongoose.model(Schema, "Exam")