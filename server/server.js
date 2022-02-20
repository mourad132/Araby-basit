//Node Modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var jwt = require('jsonwebtoken');

// *----- Routers -----*
var landing = require('routes/landing');

// *----- Models -----*
import { Exams, Questions, User, Lessons } from './models'

// *----- Middlewares ----*
var errHandler = require('./handlers/errorHandler')

// Connect To Database
mongoose.connect("mongodb+srv://mourad132:Momo2005@database.4gznf.mongodb.net/ArabyBasit?retryWrites=true&w=majority", { useUnifiedTopology: true })

// *---- Configuring Middlewares ----*
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));
app.use(errHandler)

//Exams Page
app.get('/exams', (req,  res) => {
    Exams.find({}, (err, exams) => {
        if(err){
            var error = {
                status: 401,
                message: err
            }
            next(error)
        } else {
            res.render('exams',)
        }
    })
})

//Exam Page
app.get('/exams/:id', (req, res) => {
    Exams.find({}, (err, found) => {
        if(err){
            var error = {
                status: 401,
                message: err
            }
            next(error)
        } else {
            res.render('exam', { exam: found, exam: "امتحان" })
        }
    })
})

//Questions Page
app.get('/questions', (req, res) => {
   Questions.find({}, (err, questions) => {
        if(err){
            var error = {
                status: 401,
                message: err
            }
            next(error)
        } else {
            res.render(questions, { questions: questions, page: "الأسئلة" })
        }
    })
})

//New Question Page
app.get('/questions/new', (req, res) => {
    res.render('newQuestion', { page: 'سؤال جديد' })
})

//New Question Route
app.post('/questions', (req, res) => {
    Questions.create({
        profile: req.body.id, //Student Profile 
        answer: "",
        question: req.body.question,
		type: {
			unit: req.body.unit,
			lesson: req.body.lesson,
			term: req.body.term
		}
    }, (err, created) => {
        if(err){
            var error = {
                status: 401,
                message: err
            }
            next(error)
        } else {
            res.redirect(`/questions#${created._id}`)
            next({ status: 201, message: 'created' })
        }
    })
})

//Profiles Page 
app.get('/profiles', (req, res) => {
    User.find({}, (err, found) => {
        if(err){
            var error = {
                status: 401,
                message: err
            }
            next(error)
        } else {
            res.render('profiles', { profiles: profiles, page: "ملفات الطلبة" })
        }
    })
})

//Profile Page
app.get('/profile/:id', (req, res) => {
    User.find({_id: req.params.id}, (err, profile) => {
        if(err){
            var error = {
                status: 401,
                message: err
            }
            next(error)
        } else {
            res.render("profile", { profile: profile, page: "ملف" })
        }
    })
})

//New Exam Page
app.get('/exams/new', (req, res) => {
    res.render('newExam.ejs', { page: 'انشأ امتحان' })
})

//New Exam Route
app.post('/exams/new', (req, res) => {
    Exams.create({
        questions: req.body.questions,
        time: req.body.time,
        title: req.body.title,
        passed: [],
        type: {
            unit: req.body.unit,
            lesson: req.body.lesson,
            branch: req.body.branch,
            term: req.body.term,
        }
    }, (err, created) => {
        if(err){
            var error = {
                status: 401,
                message: err
            }
            next(error)
        } else {
            res.redirect(`/exams#${created._id}`)
            next({ status: 201, message: "created" })
        }
    })
})

//Login Page
app.get('/login', (req, res) => {
    res.render('login.ejs', { page: "تسجيل الدخول" })
})

//Signup Page
app.get('/signup', (req, res) => {
    res.render('signup.ejs', { page: "انشأ حساب جديد" })
})

//Server Listener

var port = 3000

app.listen(port, function() {
    console.log(`Server started at port ${port}`)
})