const express = require("express");
const { getPosts, createPost, updatePost } = require("../controllers/posts.js");

const router = express.Router();
router.get("/posts", getPosts);
router.post("/post", createPost);
router.put("/post", updatePost);

module.exports = router;
