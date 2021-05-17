const express = require('express');
const router = express.Router();
const multer = require('multer');
const testomonialsController = require('../controllers/testimonials');
const authorize = require('../middleware/auth')

// const upload = multer({dest:'uploads/'})
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/testimonials');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
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

router.get("/", testomonialsController.get_all_testimonials);
router.get("/:testimonialId", authorize, testomonialsController.get_one_testimonial);
router.post("/", authorize, upload.single('testimonialImage'), testomonialsController.create_testimonial);
router.patch("/:testimonialId", authorize, upload.single('testimonialImage'), testomonialsController.update_testimonial);
router.delete("/:testimonialId", authorize, testomonialsController.delete_testimonial);

module.exports = router;