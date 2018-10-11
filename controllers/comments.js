const Comment = require('../models/comments')

module.exports = (app) => {

    // CREATE Comment
    app.post('/charities/comments', (req, res) => {
        Comment.create(req.body).then(comment => {
            res.redirect(`/charities/${comment.charityId}`);
        }).catch((e) => {
            console.log(e);
        });
    });

    // DELETE
    app.delete('/charties/comments/:id', function(req, res) {
        console.log("DELETE comment")
        Comment.findByIdAndRemove(req.params.id).then((comment) => {
            res.redirect(`/charities/${comment.charityId}`);
        }).catch((e) => {
            console.log(e);
        })
    })

}
