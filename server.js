var express = require('express');
var app = express()
var ejs = require('ejs');

app.use( express.static( "./views/components/public" ) );
app.set('view engine', 'ejs')

//Landing Page
app.get('/', (req, res) => res.render('landing', {page: 'Landing'}))

//Home Page
app.get('/home', (req, res) => res.render('home', { page: 'Home' }))

//Student Navbar Component
app.get('/navbar', (req, res) => res.render('components/lesson-card/lesson-card.ejs', {page: 'Navbar'}))

//Filter Component
app.get('/filter', (req, res) => res.render('components/filter/filter.ejs', { page: "filter" }))




//Server Port
let port = 3000;

//Server Listener
app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})