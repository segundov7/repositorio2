class ProductosApi {
    constructor() {
        this.productos = [
            {
                title: "Calculadora",
                price: 123,
                thumbnail: 'gsgs.jpg',
                id: 1
            },
            {
                titletitle: "Escuadra",
                price: 321,
                thumbnail: 'gsgs.jpg',
                id: 2
            }
        ]
    }

    listar(id) {
        let productFinder = this.productos.find(p => p.id == id);
        return productFinder;
    }

    listarAll() {
        return this.productos;
    }

    guardar(prod) {
        if (this.productos.length > 0){
            let newLastItem  = this.productos[this.productos.length - 1].id + 1;
            prod.id = newLastItem;
            this.productos.push(prod)
        } else {
            prod.id = 1
            this.productos.push(prod)
        }

    }

    actualizar(prod, id) {
        let productToUpdate = this.productos.findIndex(p => p.id === id);
        if (productToUpdate) {
            this.productos[productToUpdate].title = prod.title;
            this.productos[productToUpdate].price = prod.price;
            this.productos[productToUpdate].thumbnail = prod.thumbnail;

        }else {
            return {error: "Producto no encontrado"}
        }
    }

    borrar(id) {
        let productToDelete = this.productos.findIndex(p => p.id === id);
        this.productos.splice(productToDelete,1);      
    }
}

module.exports = ProductosApi;