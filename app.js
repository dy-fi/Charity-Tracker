// Declarations
const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const session = require('express-session')
const mongoose = require('mongoose')

// app
const app = express();

// mongoose connect
const db = mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/app', {
    useNewUrlParser: true
})


// controllers
const handleCharityRoutes = require('./controllers/charities');

// resources
const Charity = require('./models/charities')
const port = process.env.PORT || 3000;

// Express handlebars
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

// Method Override
app.use(methodOverride('_method'));

// Body parser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())

// session middleware
app.use(function (req, res, next) {
    res.locals.session = req.session;
    next();
});

// controllers
app.use(handleCharityRoutes)

// listen
app.listen(port, console.log('App listening on port ' + port));
