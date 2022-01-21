const express = require('express');
const path = require('path')
const port = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, './static')));

app.get('/', (req, res) => {
    res.sendFile('integration/index.html', {
        root: __dirname
    });
})


app.listen(port, () => {
    console.log(`Server listening on: http://localhost:${port}`);
})