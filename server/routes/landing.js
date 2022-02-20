var express = require("express");
var router = express.Router();
var handlers = require('./handlers')

// ---- prefix "/" -----

//Landing Page
route.get('/', handlers.render(res, 'landing', 'صفحة الهبوط'));