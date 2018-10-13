const Comment = require('../models/comments')
commentRouter = express.Router()

// CREATE
commentRouter.post('/charities/:id', (req, res) => {
    Comment.create(req.body).then(comment => {
        res.redirect('/charities/:id');
    }).catch((e) => {
        console.log(e);
    });
});

// DELETE
commentRouter.delete('/charties/:id', function(req, res) {
    console.log("DELETE comment")
    Comment.findByIdAndRemove(req.params.id).then((comment) => {
        res.redirect('/charities/:id');
    }).catch((e) => {
        console.log(e);
    })
})
