var mongoose = require('mongoose');
var Schema = mongoose.Schema({
    file: String,
    lesson: String,
    description: {
        title: String,
        description: String,
    },
    homework: String,
})

module.exports = mongoose.model('Card', Schema)