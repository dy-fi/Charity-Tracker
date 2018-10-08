// Declarations
const express = require('express')
const app = express();
const exphbs = require ('express-handlebars')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')

// controllers
const handleCharityRoutes = require('./controllers/charities');

// resources
const Charity = require ('./models/charities')
const port = process.env.PORT || 3000;

// Express handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Method Override
app.use(methodOverride('_method'));

// Body parser
app.use(bodyParser.urlencoded({ extended: true }));

// exports


// listen
app.listen(port, console.log('App listening on port ' + port));
