const Post = require("../model");

exports.createPost = ( function (req, res) {
    var newPost = new Post();
    
    newPost.title = req.body.title;
    newPost.description = req.body.description;
    newPost.save(function (err, post){
        if(err){
             console.log(err);
        }
        else{
             res.send(newPost);
        }
    });
});