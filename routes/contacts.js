const express = require("express");
const contactsControllers = require("../controllers/contacts")

const router = express.Router();

// Get all contacts
router.get("/contacts", contactsControllers.list)

// Get one comment by id
router.get("/contacts/:id", contactsControllers.show);

// Create a comment
router.post("/contacts", contactsControllers.create);

module.exports = router;