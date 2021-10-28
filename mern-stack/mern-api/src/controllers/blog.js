const { validationResult } = require("express-validator");
const BlogPost = require("../models/blog");
const path = require("path");
const fs = require("fs");

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
  const currentPage = req.query.page || 1;
  const perPage = req.query.perPage || 5;
  let totalItems;

  BlogPost.find()
    .countDocuments()
    .then((count) => {
      totalItems = count;
      return BlogPost.find()
        .skip((parseInt(currentPage) - 1) * parseInt(perPage))
        .limit(parseInt(perPage));
    })
    .then((result) => {
      res.status(200).json({
        message: "Blog Posts successfully called",
        data: result,
        total_data: totalItems,
        per_page: parseInt(perPage),
        current_page: parseInt(currentPage),
      });
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

exports.deleteBlogPost = (req, res, next) => {
  const postId = req.params.postId;

  BlogPost.findById(postId)
    .then((post) => {
      if (!post) {
        const error = new Error("Blog post not found");
        error.errorStatus = 404;
        throw error;
      }

      removeImage(post.image);
      return BlogPost.findByIdAndRemove(postId);
    })
    .then((result) => {
      res
        .status(200)
        .json({ message: "Delete blog post success", data: result });
    })
    .catch((error) => {
      next(error);
    });
};

const removeImage = (filePath) => {
  console.log("file path", filePath);
  console.log("dir name:", __dirname);

  filePath = path.join(__dirname, "../..", filePath);
  fs.unlink(filePath, (error) => console.log(error));
};
