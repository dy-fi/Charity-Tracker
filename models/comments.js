const mongoose = require('mongoose')
const Schema = mongoose.Schema

// user schema model
module.exports = mongoose.model('Comment', {
    contents: String,
    charityId: {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }
});
