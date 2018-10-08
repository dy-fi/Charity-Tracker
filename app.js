// Declarations
const express = require('express');
const app = express();
const exphbs = require ('express-handlebars')
const port = process.env.PORT || 3000;

// controllers
const handleCharityRoutes = require('./controllers/charities')

// resources
const Charity = require ('./models/charity')

// Express handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// exports
handleCharityRoutes(app)

// listen
app.listen(port, console.log('App listening on port ' + port));
