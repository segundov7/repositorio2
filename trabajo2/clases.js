const fs = require('fs');



class Contenedor {
    constructor(path) {
        this.name = path
    }

    async save(objet) {
        if (fileExists(this.name)) {
            try {
                let products = await this.getAll()
                let newLastItem = products[products.length - 1].id + 1;
                objet.id = newLastItem;
                products.push(objet)
                await fs.promises.writeFile(this.name, JSON.stringify(products))
                return newLastItem;
            } catch (error) {
                throw new Error('Error de guardado')
            }



        } else {
            objet.id = 1;
            let newProduct = [];
            newProduct.push(objet)
            try {
                await fs.promises.writeFile(this.name, JSON.stringify(newProduct))
                return objet.id

            } catch (error) {
                throw new Error('Error de guardado')
            }
        }
    }

    async getById(id) {
        if (fileExists(this.name)) {
            const products = await this.getAll();
            let foundById = products.find(product => product.id == id);
            return foundById;
        } else {
            console.log('El archivo buscado no esxiste');
        }
    }



    async getAll() {
        if (fileExists(this.name)) {
            try {
                let products = await fs.promises.readFile(this.name, 'utf-8');
                return JSON.parse(products);
            } catch (error) {
                return [];
            }
        } else {
            console.log('El archivo buscado no existe');
        }
    }



    async deleteById(id) {
        if (fileExists(this.name)) {
            let products = await this.getAll()
            let productToDelete = products.findIndex(product => product.id === id);
            products.splice(productToDelete, 1);
            await fs.promises.writeFile(this.name,  JSON.stringify(products));
        } else {
            console.log('El archivo buscado no existe');
        }
    }

    async deleteAll() {
        if (fileExists(this.name)) {
            await fs.promises.unlink(this.name);
        } else {
            console.log('El archivo buscado no existe');
        }
    }
}




const fileExists = (path) => {
    try {
        return fs.statSync(path).isFile();
    } catch (err) {
        return false;
    }
}


module.exports = Contenedor;