const Charity = require('../models/charities')
const Comment = require('../models/comments')
const request = require('request')

express = require('express')
charityRouter = express.Router()


// ROUTES

// Show all charities // READ
charityRouter.get('/', (req, res) => {
    request('https://api.data.charitynavigator.org/v2/Organizations?app_key=5b9735cccc4ca8f9c6f76b8eb2060734&app_id=99b5434c', (err, response, body) => {
        const resBody = JSON.parse(body)
        res.render('charities-index', {
            charities: resBody
        }).catch(e => {
            console.log(e)
        })
    })
})

// Show one charity // READ
charityRouter.get('./charities/:id', (req, res) => {
    request('https://api.data.charitynavigator.org/v2/' + req.params.id + '?app_key=5b9735cccc4ca8f9c6f76b8eb2060734&app_id=99b5434c', (err, response, body) => {
        Charity.findbyId(req.param.id).then(charity => {
            Comment.find({
                reviewID: req.params.id
            }).then(comments => {
                res.render('charities-show', {
                    charities: charities,
                    comments: comments
                })
            }).catch(e => {
                console.log(e);
            });
        })
    })
})

// CREATE/UPDATE
charityRouter.put('charities-show/:id', (req, res) => {
    request('https://api.data.charitynavigator.org/v2/' + req.params.id + '?app_key=5b9735cccc4ca8f9c6f76b8eb2060734&app_id=99b5434c', (err, response, body) => {
        Charity.findbyIdAndUpdate(req.param.id, req.body).then(charity => {
            res.redirect('/charities/${charity._id}')
        }).catch((e) => {
            console.log(e);
        })
    })
})

module.exports = charityRouter;
