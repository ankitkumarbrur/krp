const express = require('express');
const router = express.Router();
const contactusController = require('../controllers/contactus');
const authorize = require('../middleware/auth')

router.get("/", contactusController.get_all_contactus);
router.post("/", contactusController.create_contactus);
router.delete("/:contactusId", authorize, contactusController.delete_contactus);

module.exports = router;