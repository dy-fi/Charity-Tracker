const Charity = require('../models/charities')

// Routes

module.export = (app) => {

    // Show all charities
    app.get('/', (req, res) => {
        Charity.find()
            .then((charities) => {
                res.render('charities-index', {
                    charities: charities
                })
            }).catch((e) => {
                console.log(e);
            });
    })

    // Show one charity
    app.get('./charities/:id', (req, res) => {
        Charity.findbyId(req.param.id).then((charity) => {
            res.render('charities-show', {
                charity: charity
            });
        })
    }).catch((e) => {
        console.log(e);
    });
}
