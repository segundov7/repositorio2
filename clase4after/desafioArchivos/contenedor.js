const {promises: fs} = require('fs');

class Contenedor{
    constructor(ruta){
        this.ruta = ruta;

    }

    async save(obj){

    }

    async getById(id){

    }

    async getAll(){
        try {
            const products = await fs.readFile(this.ruta, 'utf-8');
            return JSON.parse(products)
        } catch (error) {
            return[];
        }
    }

    async deleteyId(id){
        
    }

    async deleteAll(){
        
    }
}

module.exports = Contenedor;