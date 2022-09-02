const express = require("express");
const {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/posts.js");

const router = express.Router();
router.get("/posts", getPosts);
router.post("/post", createPost);
router.put("/post/:postId", updatePost);
router.delete("/post/:postId", deletePost);

module.exports = router;
