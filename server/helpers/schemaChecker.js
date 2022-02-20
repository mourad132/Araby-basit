var db = require('../models')

function schemaChecker(schemaType){
    var schema;
    if(schemaType == "Lesson") {
        schema = db.Lessons
        return schema
    } else if(schemaType == "User") {
        schema = db.User
        return schema
    } else if(schemaType == "Question"){
        schema = db.Questions
        return schema
    } else if(schemaType == "Exam") {
        schema = db.Exam
        return schema
    } else {
        next({ status: 500, message: "Can't find DB Model" })
    }
}

module.exports = schemaChecker()