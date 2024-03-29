const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const blogController = require("../controllers/blog");

//[POST]: /v1/blog/post
router.post(
  "/post",
  [
    body("title")
      .isLength({ min: 5 })
      .withMessage("Input Title is not valid, required minimum 5 characters"),
    body("body")
      .isLength({ min: 5 })
      .withMessage("Input Body is not valid, required minimum 5 characters"),
  ],
  blogController.createBlogPost
);

router.get("/posts", blogController.getAllBlogPosts);
router.get("/post/:postId", blogController.getBlogPostById);
router.put(
  "/post/:postId",
  [
    body("title")
      .isLength({ min: 5 })
      .withMessage("Input Title is not valid, required minimum 5 characters"),
    body("body")
      .isLength({ min: 5 })
      .withMessage("Input Body is not valid, required minimum 5 characters"),
  ],
  blogController.updateBlogPost
);

router.delete("/post/:postId", blogController.deleteBlogPost);

module.exports = router;
