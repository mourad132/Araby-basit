var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

app.use(bodyParser.urlEncoded({ extended: true }))
app.set('view engine', 'ejs')

//Landing Page
app.get('/', (req, res) => {
    res.render('landing.ejs')
});

//Home Page
app.get('/home', (req, res) => {
    res.render('home.ejs')
})

//Homework Page
app.get('/homeworks', (req, res) => {
    res.render('homework.ejs')
})

//Exams Page
app.get('/exams', (req, res) => {
    res.render('exams.ejs')
})

//Questions Page
app.get('/questions', (req, res) => {
    res.render('questions.ejs')
})

//Profile Page
app.get('/profile', (req, res) => {
    res.render('profile.ejs')
})

//Login Page
app.get('/login', (req, res) => {
    res.render('login.ejs')
})

//Signup Page
app.get('/signup', (req, res) => {
    res.render('signup.ejs')
})

//Exam Page
app.get('/exam', (req, res) => {
    res.render('exam.ejs')
})

//Correct Exam Page
app.get('/exam/correct', (req, res) => {
    res.render('correctExam.ejs')
})

//New Question Page
app.get('/questions/new', (req, res) => {
    res.render('newQuestion.ejs')
})

//New Lesson Page
app.get('/lessons/new', (req, res) => {
    res.render('newLesson.ejs')
})

//New Homework Page
app.get('/homework/new', (req, res) => {
    res.render('newHomework.ejs')
})

//New Exam Page
app.get('/exam/new', (req, res) => {
    res.render('newExam.ejs')
})

//Exam Degress Page
app.get('/exam/degrees', (req, res) => {
    res.render('examDegrees.ejs')
})

//Profiles Page
app.get('/profiles', (req, res) => {
    res.render('profiles.ejs')
})

var port = 3000

//Server Listener
app.listen(port, function() {
    console.log(`Server started at port ${port}`)
})