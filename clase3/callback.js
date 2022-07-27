/*
const ejecutar = unaFuncion => unaFuncion()
const saludar = () => console.log('hola')
ejecutar(saludar)


const ejecutar2 = (unaFuncion2, params) => unaFuncion2(params)
const saludar2 = nombre => console.log(`hola ${nombre}`)
ejecutar2(saludar2, 'pepe')
*/

function escribirYLogear(texto, callbackParaLogear){
    //simulacion de escribir un archivo
    console.log(texto);
    //cuando finalice ejecutamos el callback
    callbackParaLogear('archivo procesado con exito');
};
escribirYLogear('hola estoy usando callbacks', (mensajeParaLogear)=>{
    const fecha = new Date().toLocaleDateString();
    console.log(`${fecha}: ${mensajeParaLogear}`);
})