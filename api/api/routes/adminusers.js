const express = require('express');
const router = express.Router();
const adminusersController = require('../controllers/adminusers');

router.post("/signup", adminusersController.adminuser_signup);
router.post("/login", adminusersController.adminuser_login);
// router.patch("/:adminuserId", adminusersController.update_adminuser);
router.delete("/:adminUserId", adminusersController.adminuser_delete);

module.exports = router;