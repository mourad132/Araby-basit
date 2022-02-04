var mongoose = require('mongoose')
var Schema = mongoose.Schema({
    name: String,
    userName: String,
    number: Number,
    grade: String,
    school: String,
    password: String,
    degress: [],
})

module.exports = mongoose.model(Schema, "Profile")