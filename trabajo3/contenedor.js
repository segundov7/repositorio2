const fs = require('fs');

class Contenedor {
    constructor(nombre) {
        this.path = `./${nombre}.txt`
    }


    save(producto) {
        if (fileExists(this.path)) {
            fs.promises.readFile(this.path, 'utf-8')
                .then(contenido => {
                    let data = JSON.parse(contenido);
                    let lastItem = data[data.length - 1].id + 1;
                    producto.id = lastItem;
                    data.push(producto);
                    fs.promises.writeFile(this.path, JSON.stringify(data))
                        .then(console.log(`Producto guardado medainte el id: ${producto.id}`))
                        .catch(err => (console.log(err)));
                })
                .catch(err => (console.log(err)))
        } else {
            producto.id = 1;
            let newProduct = [];
            newProduct.push(producto);
            fs.promises.writeFile(this.path, JSON.stringify(newProduct))
                .then(console.log(`Se crea archivo y se guarda medainte el id: ${producto.id}`))
                .catch(err => (console.log(err)));
        }

    };
    async getById(id) {
        if (fileExists(this.path)) {
            try {
                let response = await fs.promises.readFile(this.path, 'utf-8');
                if (response) {
                    let data = JSON.parse(response);
                    return data.find((elemento) => elemento.id == id);
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log('No existe el archico que esta buscando');
        }
    }
    async getAll() {
        if (fileExists(this.path)) {
            try {
                let response = await fs.promises.readFile(this.path, 'utf-8');
                if (response) {
                    let data = JSON.parse(response);
                    return data;
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log('No existe el archico que esta buscando');
        }
    };


    deleteById(id) {
        if (fileExists(this.path)) {
            fs.promises.readFile(this.path, 'utf-8')
                .then(contenido => {
                    const data = JSON.parse(contenido)
                    let productDeleted = data.findIndex(producto => producto.id == id);
                    data.splice(productDeleted, 1);
                    fs.promises.writeFile(this.path, JSON.stringify(data))
                        .then(console.log('Se elimino el id indicado'))
                        .catch(err => (console.log(err)));
                })
                .catch(err => (console.log(err)))
        } else {
            console.log('No existe el archico que esta buscando');
        }
    };

    deleteAll() {
        if (fileExists(this.path)) {
            fs.promises.unlink(this.path)
                .then(console.log('Datos borrados'))
                .catch(err => (console.log(err)))
        } else {
            console.log('No existe el archico que esta buscando');
        }
    }

;}



function fileExists(path) {
    try {
        return fs.statSync(path).isFile();
    } catch (e) {
        return false;
    }
;}

exports.Contenedor = Contenedor;