const express = require('express')
const { Router } = express
const ProductosApi = require('./api/productos.js')

// router de productos

const productosApi = new ProductosApi()

const productosRouter = new Router()
productosRouter.use(express.json())
productosRouter.use(express.urlencoded({ extended: true }))


//middleware

const existProduct = (req, res, next) => {
    const { id } = req.params;
    if (!productosApi.listar(parseInt(id))) {
        res.status(500).json({error:"Producto no encontrado"});
    }
    next()
}

//rutas usando productosRouter

productosRouter.get('/', (req, res) => {
    res.json(productosApi.listarAll())
});

productosRouter.get('/:id', existProduct, (req, res) => {
    const { id } = req.params;
    res.json(productosApi.listar(id))
});
productosRouter.post('/', (req, res) => {
    console.log(req.body);
    //productosApi.save(newProduct)
    res.json(productosApi.listarAll())
});
productosRouter.put('/:id',existProduct, (req, res) => {
    const { id } = req.params;
    productosApi.actualizar(req.body, parseInt(id))
    console.log(req.body);
    //productosApi.save(newProduct)
    res.json(productosApi.listarAll())
});

productosRouter.delete('/:id',existProduct, (req, res) => {
    const { id } = req.params;
    productosApi.delete(parseInt(id))
    res.json(productosApi.listAll())
});



// servidor

const app = express()
app.use(express.static('public'))
app.use('/api/productos', productosRouter)

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))