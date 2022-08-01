
const express = require("express");
const contenedor = require("./contenedor");




const app = express();
const PORT = process.env.PORT || 8081;
let lista = [];
let element = [];
const productos = new contenedor.Contenedor("productos");



const getAll = async () => {
  let data = await productos.getAll();
  lista = [];
  for (let item of data) {
    lista.push(item);
  }
};


const getRandom = async () => {
  let data = await productos.getAll();
  let random = data[data.length - 1].id;
  let value = getRandomInt(random);
  let result = await productos.getById(value);
  element = [];
  element.push(result);
};



function getRandomInt(max) {
  let value = Math.floor(Math.random() * max) + 1;
  return value;
};




const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));




app.get("/productos", (req, res) => {
  getAll();
  res.send(lista);
});




app.get("/productoRandom", (req, res) => {
  getRandom();
  res.send(element);
});
