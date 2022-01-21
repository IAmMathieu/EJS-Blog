const express = require('express');
const path = require('path')
const router = require('./router')
const port = process.env.PORT || 3000;
const app = express();


app.set('view engine', 'ejs');
const pathToViews = path.resolve(__dirname, '../views');
app.set('views', pathToViews);

app.use(express.static(path.resolve(__dirname, '../static')));
app.use(router);

app.listen(port, () => {
    console.log(`Server listening on: http://localhost:${port}`);
})