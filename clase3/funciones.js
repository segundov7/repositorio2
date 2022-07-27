//funcion normal
const mostrar = function (params){
    console.log(params)
}

mostrar('hola mundo')

//funcion flecha
const mostrarFlecha = (param1, param2)=>{
    console.log(`${param1} ${param2}`)
}

mostrarFlecha('hola','mundo')

//funcion con un solo parametro

const funcionConUnSoloParametro = params =>{
    console.log(params)
}

funcionConUnSoloParametro(90)

//funcion una sola linea de ejecucion
const funcionUnaLineaEjecucion = (num1, num2) => (num1 * num2)

console.log(funcionUnaLineaEjecucion(3,4))