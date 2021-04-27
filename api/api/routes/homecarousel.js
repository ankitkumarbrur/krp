const express = require('express');
const router = express.Router();
const multer = require('multer');
const homecarouselController = require('../controllers/homecarousel');
const authorize = require('../middleware/auth')

// const upload = multer({dest:'uploads/'})
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/homecarousel');
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
});

const fileFilter = (req, file, cb) =>{
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/webp')
    {
        cb(null, true);
    }
    else
    {
        cb(null, false);
    }
};

const upload = multer({
    storage:storage,
    fileFilter:fileFilter,
    limits:{
        fileSize: 1024* 1024 * 5
    }
})

router.get("/", homecarouselController.get_all_homecarousel);
router.post("/", authorize, upload.single("carouselImg"), homecarouselController.create_homecarousel);
router.delete("/:homecarouselId", authorize, homecarouselController.delete_homecarousel);

module.exports = router;