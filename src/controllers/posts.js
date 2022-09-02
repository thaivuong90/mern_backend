const { PostModel } = require("../models/PostModel.js");

exports.getPosts = async (req, res) => {
  try {
    const posts = await PostModel.find();
    console.log("posts", posts);
    res.status(200).json(posts);
  } catch (err) {}
};

exports.createPost = async (req, res) => {
  try {
    const newPost = req.body;
    const post = new PostModel(newPost);
    await post.save();
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const updatePost = req.body;
    const postId = req.params.postId;
    const post = await PostModel.findOneAndUpdate({ _id: postId }, updatePost, {
      new: true,
    });
    res.status(200).json(post);
  } catch (err) {
    console.log(err);
  }
};

exports.deletePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const post = await PostModel.deleteOne({ _id: postId });
    res.status(200).json(post);
  } catch (err) {
    console.log(err);
  }
};
