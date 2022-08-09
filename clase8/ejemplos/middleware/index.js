const express = require('express');

const { Router } = express

const app = express();

function mdl1(req, res ,next){
    req.miAporte1 = 'dato por mi mdl1'
    next();
}

function mdl2(req, res, next){
    req.miAporte2 = 'dato por mi mdl2'
    next();
}

app.get('/ruta1', mdl1, (req, res)=>{
    let miAporte1 = req.miAporte1;
    res.send({miAporte1});
})

app.get('/ruta2', mdl1, mdl2,(req, res)=>{
    let{miAporte1, miAporte2} = req;
    res.send({miAporte1, miAporte2})
})

app.listen(8080);