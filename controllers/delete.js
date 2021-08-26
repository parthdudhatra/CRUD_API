const Post = require("../model")

exports.deletePost = ( function (req, res){
    Post.findOneAndDelete(
        {_id : req.params.id}, 
        function (err, post){
            if(err){
                res.send("error");
            }
            else{
                console.log(post);
                res.status(204)
            }
        })
})

