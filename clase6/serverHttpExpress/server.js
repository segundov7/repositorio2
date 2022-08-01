const express = require('express');

const app = express();

let visitas = 0;

app.get('/', (req, res) =>{
    res.send('<h1 style = "color: blue;">Hola mundo</h1')
})

app.get('/visitas', (req, res) =>{
    visitas +=1;
    res.send(`Visitas: ${visitas}`)
})

app.get('/fyh', (req, res) =>{
    const fechaYHora = new Date
    res.send(fechaYHora.toLocaleString())
})


const server = app.listen(8080, () => {
    console.log(`servidor http escuchando en el puerto ${server.address().port}`);
})  

server.on('error', error => console.log(`error en el servidor ${error}`));