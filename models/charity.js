const mongoose = require('mongoose');
mongoose.connect('mongod://localhost/CharityTracker');

module.exports = mongoos.model('Charity', {
    name: String,
    
});
