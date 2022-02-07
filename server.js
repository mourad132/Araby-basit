var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var passport = require('passport');
var localStrategy = require('passport-local')

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlEncoded({ extended: true }))
app.set('view engine', 'ejs')

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

//Exam Route
app.get('/exams/:id', (req, res) => {
    Exam.find({}, (err, found) => {
        if(err){
            console.log(err)
        } else {
            found.passed.push(req.user)
            found.save()
            res.render('exam', { exam: found })
        }
    })
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

//New Question Route
app.post('/questions', (req, res) => {
    Questions.create({
        profile: req.user._id, //Student Profile 
        answer: "",
        question: req.body.question,
    }, (err, created) => {
        if(err){
            console.log(err)
        } else {
            res.redirect(`/questions#${found._id}`)
        }
    })
})

//Profile Page
app.get('/profile/:id', (req, res) => {
    User.find({_id: req.params.id}, (err, profile) => {
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

//New Question Page
app.get('/questions/new', (req, res) => {
    res.render('newQuestion.ejs')
})

//New Lesson Page
app.get('/lessons/new', (req, res) => {
    res.render('newLesson.ejs')
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
    })
})

//New Exam Page
app.get('/exam/new', (req, res) => {
    res.render('newExam.ejs')
})

app.post('/exam/new', (req, res) => {
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
        } else {
            res.redirect("/exams#_id")
        }
    })
})

//Exam Degress Page
app.get('/exam/degrees', (req, res) => {
    Exams.find({}, (err, found) => {
        if(err){
            console.log(err)
        } else {
            res.render('examDegrees', { exams: found })
        }
    })
})

//Profiles Page
app.get('/profiles', (req, res) => {
    User.find({}, (err, found) => {
        if(err){
            console.log(err)
        } else {
            res.render('profiles', { profiles: found })
        }
    })
})

//Server Listener

var port = 3000

app.listen(port, function() {
    console.log(`Server started at port ${port}`)
})