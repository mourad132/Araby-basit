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
    var lessons = Lessons.find({}, (err, lessons) => {
        if(err){
            console.log(err)
        } else {
            return lessons
        }
    })
    res.render("home", { lessons: lessons })
})

//Homework Page
app.get('/homeworks', (req, res) => {
    var homeworks = Homeworks.find({}, (err, homeworks) => {
        if(err){
            console.log(err)
        } else {
            return homeworks
        }
    })
    res.render("homeworks", { homeworks: homeworks })
})

//Exams Page
app.get('/exams', (req, res) => {
    var exams = Exams.find({}, (err, exams) => {
        if(err){
            console.log(err)
        } else {
            return exams
        }
    })
    res.render("exams", { exams: exams })
})

//Questions Page
app.get('/questions', (req, res) => {
    var questions = Questions.find({}, (err, questions) => {
        if(err){
            console.log(err)
        } else {
            return questions
        }
    })
    res.render("questions", { questions: questions })
})

//Profile Page
app.get('/profile/:id', (req, res) => {
    Profile.find({_id: req.params.id}, (err, profile) => {
        if(err){
            console.log(err)
        } else {
            res.render('profile', { profile: profile })
        }
    })
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

//Server Listener

var port = 3000

app.listen(port, function() {
    console.log(`Server started at port ${port}`)
})