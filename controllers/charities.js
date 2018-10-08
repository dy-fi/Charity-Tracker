const Charity = require('../models/charities')

// Routes

module.export = (app) => {

    // Show all charities
    app.get('/charities', (req, res) => {
        Charity.find()
            .then(charities => {
                res.render('charities-index', {
                    charities: charities
                });
            })
            .catch(e => {
                console.log(e);
            })
    })

    //
}
