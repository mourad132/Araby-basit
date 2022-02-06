var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

app.use(bodyParser.urlEncoded({ extended: true }))
app.set('view engine', 'ejs')