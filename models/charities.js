// mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model('Charity', {
        name: String,
});
