var db = require('./models');
var schemaChecker = require('./schemaChecker')

function create(res, next, schemaType, body, errStatus, redirect) {
    var schema = schemaChecker(schemaType)
    schema({...body}, (err, created) => {
        if(err){
            next({ status: errStatus, message: err})
        } else {
            res.send(JSON.stringify(created))
            next({ status: 201, message: "Created"})
        }
    })
}

module.exports = create();