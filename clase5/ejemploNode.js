const personas = [
    {
        nombre: 'alex',
        edad: 27
    },
    {
        nombre: 'fernando',
        edad: 24
    },
    {
        nombre: 'facundo',
        edad: 18
    },
]

// const regresarNombre = (persona) =>{
//     return persona.nombre;
// }

const nombrePersonas = personas.map(persona => persona.nombre);
console.log(nombrePersonas)

