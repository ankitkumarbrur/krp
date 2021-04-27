const express = require('express');
const router = express.Router();
const multer = require('multer');
const articlesController = require('../controllers/articles');
const authorize = require('../middleware/auth')

// const upload = multer({dest:'uploads/'})
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/articles');
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

router.get("/", articlesController.get_all_articles);
router.get("/:articleId", authorize, articlesController.get_one_article);
router.post("/", authorize, upload.single('articleImage'), articlesController.create_article);
router.patch("/:articleId", authorize, upload.single('articleImage'), articlesController.update_article);
router.delete("/:articleId", authorize, articlesController.delete_article);

module.exports = router;