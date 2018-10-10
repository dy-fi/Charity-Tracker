// mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model('Charity', {
        charityname: String,
        charityscore: {
            accountibilityRating: Number,
            financialRating: Number
        }
});
