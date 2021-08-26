const express = require("express");
const { createPost } = require("./controllers/create");
const { findPost } = require("./controllers/find");
const { updatePost } = require("./controllers/upadate");
const { deletePost } = require("./controllers/delete");


const router = express.Router();

router.post("/post", createPost);
router.get("/get", findPost);
router.put("/put/:id", updatePost);
router.delete("/delete/:id", deletePost);

module.exports = router;