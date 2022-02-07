var mongoose = require('mongoose')
var Schema = mongoose.Schema({
    name: String,
    number: Number,
    grade: String,
    school: String,
    password: String,
})

module.exports = mongoose.model(Schema, "Profile")