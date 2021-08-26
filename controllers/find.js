const Post = require("../model")

exports.findPost = ( function (req, res){
    Post.find({})
        .exec(function (err, posts) {
            if (err) {
                res.send("error genereted")
            }
            else {
                res.send(posts)
            }
        });
});