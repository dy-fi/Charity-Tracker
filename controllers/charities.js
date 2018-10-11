const Charity = require('../models/charities')
const Comment = require('../models/comments')
express = require('express')
app = express.Router()

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
        Charity.findbyId(req.param.id).then(charity => {
            Comment.find({
                reviewID: req.params.id
            }).then(comments => {
                res.render('charities-show', {
                    charities, charities,
                    comments, comments
                })
            }).catch((e) => {
                console.log(e);
            });
        })
    })
}
