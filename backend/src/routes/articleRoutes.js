const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articles');

router.get('/articles', articleController.getAllArticles);
router.post('/articles', articleController.createArticle);

module.exports = router;
