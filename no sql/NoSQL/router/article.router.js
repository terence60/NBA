// Importation du module express
const express = require('express');
// Creation d'un router express
const router = express.Router();

const ArticleController = require('../controllers/article.controller')

router.post("/add", ArticleController.postArticle)
router.get("/all", ArticleController.getAllArticles)
router.get("/detail/:id", ArticleController.getArticle)
router.put("/update/:id", ArticleController.updateArticle)
router.delete("/delete/:id", ArticleController.deleteArticle)
router.get('/asc', ArticleController.ascArticle)
router.get('/desc', ArticleController.descArticle)

module.exports = router;