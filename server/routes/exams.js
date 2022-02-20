var express = require('express');
var router = express.Router();
var helper = require("./hepler")

// --- prefix "/exams" ----

router.route('/')
      .get((req, res, next) => helper.find(res, next, "Exam"))
      .post((req, res, next) => helper.create())