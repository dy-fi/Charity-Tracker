// mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model('Charity', {
        ratingImageUrl: String,
        charityname: String,
        charityMission: String,
        charityURL: String,
        charityRatingURL: String,
        charityOrgId: String,
        charityscore: {
            accountibilityRating: Number,
            financialRating: Number
        },
        charityTagLine: String
});
