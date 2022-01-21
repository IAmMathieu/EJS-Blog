const express = require('express');
const searchArticle = require('./searchArticles')
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
    const foundArticle = searchArticle(askedID);

    if (foundArticle) {
        res.render('article', {
            article: foundArticle
        });
    } else {
        res.write('<h1>Not found noob.</h1>');
    }
    
})

module.exports = router;