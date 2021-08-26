const Post = require("../model");


exports.updatePost = ( function (req, res) {
    Post.findOneAndUpdate({_id: req.params.id}, { $set: { title: req.body.title } },{ upsert: true },
        function (err, post) {
            if (err) {
                console.log("error occurred");
            } else {
                console.log(post);
                res.status(204);
        }
    });
});