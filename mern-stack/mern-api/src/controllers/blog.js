const { validationResult } = require("express-validator");
const BlogPost = require("../models/blog");

exports.createBlogPost = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = new Error("Invalid value");
    error.errorStatus = 400;
    error.data = errors.array();
    throw error;
  }

  if (!req.file) {
    const error = new Error("Image not uploaded and should be uploaded");
    error.errorStatus = 422;
    throw error;
  }

  const title = req.body.title;
  const image = req.file.path;
  const body = req.body.body;

  const Posting = new BlogPost({
    title: title,
    body: body,
    image: image,
    author: { uid: 1, name: "Wildan Hakim" },
  });

  Posting.save()
    .then((result) => {
      res.status(201).json({
        message: "Create Blog Post Success",
        data: result,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.getAllBlogPosts = (req, res, next) => {
  BlogPost.find()
    .then((result) => {
      res
        .status(200)
        .json({ message: "Blog Posts successfully called", data: result });
    })
    .catch((error) => {
      next(error);
    });
};

exports.getBlogPostById = (req, res, next) => {
  const postId = req.params.postId;
  BlogPost.findById(postId)
    .then((result) => {
      if (!result) {
        const error = new Error("Blog Post not found");
        error.errorStatus = 404;
        throw error;
      }
      res.status(200).json({
        message: "Blog Post data successfully called",
        data: result,
      });
    })
    .catch((error) => {
      next(error);
    });
};

exports.updateBlogPost = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = new Error("Invalid value");
    error.errorStatus = 400;
    error.data = errors.array();
    throw error;
  }

  if (!req.file) {
    const error = new Error("Image not uploaded and should be uploaded");
    error.errorStatus = 422;
    throw error;
  }

  const title = req.body.title;
  const image = req.file.path;
  const body = req.body.body;
  const postId = req.params.postId;

  BlogPost.findById(postId)
    .then((post) => {
      if (!post) {
        const error = new Error("Blog post not found");
        error.errorStatus = 404;
        throw error;
      }

      post.title = title;
      post.body = body;
      post.image = image;

      return post.save();
    })
    .then((result) => {
      res.status(200).json({ message: "Update success", data: result });
    })
    .catch((error) => {
      next(error);
    });
};
