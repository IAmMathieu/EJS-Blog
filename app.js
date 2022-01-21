const express = require('express');
const path = require('path')
const articles = require('./data/articles.json');
const port = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');
const pathToViews = path.resolve(__dirname, 'views');
app.set('views', pathToViews);

app.use(express.static(path.resolve(__dirname, './static')));

app.get('/', (req, res) => {
    res.render('index', {
        articles: articles
    });
})


app.listen(port, () => {
    console.log(`Server listening on: http://localhost:${port}`);
})