const express = require("express");
const commentsControllers = require("../controllers/comments")

const router = express.Router();

// Get all comments
router.get("/comments", commentsControllers.list)

// Get one comment by id
router.get("/comments/comment/:id", commentsControllers.show);

// Create a comment
router.post("/comments", commentsControllers.create);

module.exports = router;