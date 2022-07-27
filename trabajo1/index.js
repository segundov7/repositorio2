class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName(){
        return `Hola, yo soy ${this.nombre} ${this.apellido}`;
    }
    addMascotas(tortuga){
        return this.mascotas.push(tortuga);
    };
    countMascotas(){
        return this.mascotas.length;
    }
    addBook(nombre, autor){
        return this.libros.push({nombre: 'Harry Potter y el caliz de fuego', autor: 'J.K.Rowling'});
    };
    getBookNames(){
        return this.libros.map(nombreLibros =>{
            return nombreLibros.nombre
        })
    }

}
const usuario1 = new Usuario('Segundo', 'Vallejos', [{nombre:'The shining', autor:'Stephen King'}, {nombre:'Mentalidad de titan', autor:'Luis F. Soto'}], ['Perro','Gato']);

console.log(usuario1.getFullName());
console.log(usuario1.addMascotas());
console.log(usuario1.countMascotas());
console.log(usuario1.addBook());
console.log(usuario1.getBookNames());

