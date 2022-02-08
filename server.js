//Node Modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var passport = require('passport');
var LocalStrategy = require('passport-local');

//Models
var Questions = require('./models/Questions.js');
var Exams = require('./models/Exam.js');
var User = require('./models/Profile.js');
var Lessons = require('./models/Cards.js')

// Connect To Database
mongoose.connect("mongodb+srv://mourad132:Momo2005@database.4gznf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useUnifiedTopology: true })

//Configuring App
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(passport.initialize())
app.use(passport.session())

app.set('view engine', 'ejs')

//Configure Passport
passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
      });
    }
));

//Landing Page
app.get('/', (req, res) => {
    res.send('landing page')
});

//Home Page
app.get('/lessons', (req, res) => {
    var lessons = Lessons.find({}, (err, lessons) => {
        if(err){
            console.log(err)
            res.sendStatus(500)
        } else {
            return lessons
        }
    })
    res.send(lessons)
    res.sendStatus(200)
})

//Exams Page
app.get('/exams', (req, res) => {
    var exams = Exams.find({}, (err, exams) => {
        if(err){
            console.log(err)
            res.sendStatus(500)
        } else {
            return exams
        }
    })
    res.send(exams)
    res.sendStatus(200)
})

//Exam Page
app.get('/exams/:id', (req, res) => {
    Exams.find({}, (err, found) => {
        if(err){
            console.log(err)
            res.sendStatus(500)
        } else {
            found.passed.push(req.user)
            found.save()
            res.send(found)
            res.sendStatus(200)
        }
    })
})

//Questions Page
app.get('/questions', (req, res) => {
    var questions = Questions.find({}, (err, questions) => {
        if(err){
            console.log(err)
            res.sendStatus(500)
        } else {
            return questions
        }
    })
    res.send(questions)
    res.sendStatus(200)
})

//New Question Page
app.get('/questions/new', (req, res) => {
    res.send('newQuestion')
})

//New Question Route
app.post('/questions', (req, res) => {
    Questions.create({
        profile: req.body.id, //Student Profile 
        answer: "",
        question: req.body.question,
    }, (err, created) => {
        if(err){
            console.log(err)
            res.sendStatus(500)
        } else {
            res.sendStatus(200)
        }
    })
})

//Profiles Page 
app.get('/profiles', (req, res) => {
    User.find({}, (err, found) => {
        if(err){
            console.log(err)
            res.sendStatus(500)
        } else {
            res.send(found)
            res.sendStatus(200)
        }
    })
})

//Profile Page
app.get('/profile/:id', (req, res) => {
    User.find({_id: req.params.id}, (err, profile) => {
        if(err){
            console.log(err)
            res.sendStatus(500)
        } else {
            res.send(profile)
            res.sendStatus(200)
        }
    })
})

//New Lesson Page
app.get('/lessons/new', (req, res) => {
    res.send('newLesson.ejs')
})

//New Lesson Route
app.post('/lesson/new', (req, res) => {
    Lessons.create({
        file: req.body.file,
        lesson: req.body.lesson,
        description: {
            title: req.body.title,
            description: req.body.description,
        },
        homework: req.body.homework,
    }, (err, created) => {
        if(err){
            console.log(err)
            res.sendStatus(500)
        } else {
            res.sendStatus(200)
        }
    })
})

//New Exam Page
app.get('/exams/new', (req, res) => {
    res.send('newExam.ejs')
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
            console.log(err)
            res.sendStatus(500)
        } else {
            res.sendStatus(200)
        }
    })
})

//Login Page
app.get('/login', (req, res) => {
    res.send('login.ejs')
})

//Signup Page
app.get('/signup', (req, res) => {
    res.send('signup.ejs')
})

//Server Listener

var port = 3000

app.listen(port, function() {
    console.log(`Server started at port ${port}`)
})