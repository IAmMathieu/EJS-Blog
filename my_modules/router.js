const express = require('express');
const articles = require('../data/articles.json');
const router = express.Router()

const app = express();

router.get('/', (req, res) => {
    res.render('index', {
        articles: articles,
    });
})

router.get('/:category', (req, res) => {
    const askedCategory = req.params.category
    res.render('category', {
        articles: articles,
        category: askedCategory
    });
})


router.get('/article/:id', (req, res) => {
    const askedID = parseInt(req.params.id, 10);
    let foundArticle = null;
    for (const article of articles) {
        if (article.id === askedID) {
            foundArticle = article;
            break;
        }
    }

    if (foundArticle) {
        res.render('article', {
            article: foundArticle
        });
    }
})

module.exports = router;