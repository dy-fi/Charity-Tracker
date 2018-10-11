const mongoose = require('mongoose')
const Schema = mongoose.Schema

// comments model and id schema
module.exports = mongoose.model('Comment', {
    contents: String,
    charityId: {
        type: Schema.Types.ObjectId,
        ref: 'Charity'
    }
});
