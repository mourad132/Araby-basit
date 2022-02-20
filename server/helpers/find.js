var db = require('./models');
var schemaChecker = reqiure('./schemaChecker')
function find(res, next, schemaType){
    var schema = schemaChecker(schemaType)
    schema.find({}, foundCallback())
}

function foundCallback(err, found){
    if(err){
        next({ status: 503, message: err })
    } else {
        res.send(JSON.stringify(found))
    }
}