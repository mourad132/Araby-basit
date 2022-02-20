var mongoose = require('mongoose')
var Schema = mongoose.Schema({
    name: String,
    userName: String,
    number: Number,
    grade: String,
    school: String,
    password: String,
})

module.exports = mongoose.model("User", Schema)