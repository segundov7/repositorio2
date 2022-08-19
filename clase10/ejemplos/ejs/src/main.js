const express = require('express');

const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('pages/index', {})
});

app.listen(8080);