// Declarations
const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const session = require('express-session')
const mongoose = require('mongoose')
const mongoDBStore = require('connect-mongodb-session')(session);

// app
const app = express();

// mongoose connect
const db = mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/app.js', {
    useNewUrlParser: true
})

// mongo session store
const store = mongoDBStore({
    uri: process.env.MONGODB_STORE || 'mongodb://localhost/app.js',
    databaseName: db,
    collection: "sessions"
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

// express session
app.use(session({
    secret: 'terces',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 // an hour
    },
    store: store
}))

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
