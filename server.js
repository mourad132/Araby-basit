//Node Modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

//Models
var Questions = require('./models/Questions.js');
var Exams = require('./models/Exam.js');
var User = require('./models/Profile.js');
var Lessons = require('./models/Cards.js')

// Connect To Database
mongoose.connect("mongodb+srv://mourad132:Momo2005@database.4gznf.mongodb.net/ArabyBasit?retryWrites=true&w=majority", { useUnifiedTopology: true })

//Configuring App
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.set('view engine', 'ejs')

//Landing Page
app.get('/', (req, res) => {
    res.render('landing', { page: 'صفحة الهبوط' })
});

//Home Page
app.get('/lessons', (req, res) => {
    Lessons.find({}, (err, lessons) => {
        if(err){
            console.log(err)
            res.sendStatus(500)
        } else {
			res.render('lessons', { lessons: lessons, page: "الدروس" })
		}
    })
})

//Exams Page
app.get('/exams', (req,  res) => {
    Exams.find({}, (err, exams) => {
        if(err){
            console.log(err)
            res.sendStatus(500)
        } else {
            res.render('exams', { exams: exams, page: "الامتحانات" })
        }
    })
})

//Exam Page
app.get('/exams/:id', (req, res) => {
    Exams.find({}, (err, found) => {
        if(err){
            console.log(err)
            res.sendStatus(500)
        } else {
            //found.passed.push(req.user)
            //found.save()
            res.render('exam', { exam: found, exam: "امتحان" })
        }
    })
})

//Questions Page
app.get('/questions', (req, res) => {
   Questions.find({}, (err, questions) => {
        if(err){
            console.log(err)
            res.sendStatus(500)
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
            console.log(err)
            res.sendStatus(500)
        } else {
            res.redirect(`/questions#${created._id}`)
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
            res.render('profiles', { profiles: profiles, page: "ملفات الطلبة" })
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
            res.render("profile", { profile: profile, page: "ملف" })
        }
    })
})

//New Lesson Page
app.get('/lessons/new', (req, res) => {
    res.render('newLesson.ejs', { page: "ارفع درس جديد" })
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
		type: {
			unit: req.body.unit,
			lesson: req.body.lesson,
			term: req.body.term,
		},
        homework: req.body.homework,
    }, (err, created) => {
        if(err){
            console.log(err)
            res.sendStatus(500)
        } else {
            res.redirect(`/lessons#${created._id}`)
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
            console.log(err)
            res.sendStatus(500)
        } else {
            res.redirect(`/exams#${created._id}`)
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