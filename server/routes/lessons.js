var express = require("express");
var router = express.Router();
var db = require('./models');
var create = require('./handlers/create')
var find = require('./handlers/find')

// ---- prefix "/lessons" -----

//Lessons Page
router.get('/', (req, res) => {
    db.Lessons.find({}, find(Lessons, ))
})

//New Lesson Page
router.route('/new')
      .get()
      .post(create(Lessons, req.body, 401, '/lessons'))
