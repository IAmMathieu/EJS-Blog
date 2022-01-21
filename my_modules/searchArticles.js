const articles = require('../data/articles.json');

function searchArticle(askedID) {
    let foundArticle = null;
    for (const article of articles) {
        if (article.id === askedID) {
            foundArticle = article;
            break;
        }
    }
    return foundArticle
}

module.exports = searchArticle;