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
      .withMessage("Input Title anda tidak sesuai, minimum 5 karakter"),
    body("body")
      .isLength({ min: 5 })
      .withMessage("Input Body anda tidak sesuai, minimum 5 karakter"),
  ],
  blogController.createBlogPost
);

router.get("/posts", blogController.getAllBlogPosts);

module.exports = router;
