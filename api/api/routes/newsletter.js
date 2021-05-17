const express = require('express');
const router = express.Router();
const newsletterController = require('../controllers/newsletter');
const authorize = require('../middleware/auth')

router.get("/", newsletterController.get_all_newsletter);
router.post("/", authorize, newsletterController.create_newsletter);
router.delete("/:newsletterId", authorize, newsletterController.delete_newsletter);

module.exports = router;