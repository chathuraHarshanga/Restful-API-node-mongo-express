import express from "express";
import Post from "../models/Post.js";

const router = express.Router();

//get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//submit posts
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const postSave = post.save();
    res.status(200).json(postSave);
  } catch (err) {
    res.json({ message: err });
  }
});

//get a spesific post
router.get("/:postID", async (req, res) => {
  const post = await Post.findById(req.params.postID);
  try {
    res.status(200).json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete a post
router.delete("/:postID", async (req, res) => {
  try {
    const deletedPost = await Post.deleteOne({ _id: req.params.postID });
    res.status(200).json(deletedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//update posts
router.patch("/:postID", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postID },
      { $set: { title: req.body.title } }
    );
    res.status(200).json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

export default router;
