const http = require('http');

const getMensaje = () => {
    
    const horaActual = new Date().getHours()

    if(horaActual >=6 && horaActual <= 12){
        return('buenos dias')
    } else if(horaActual >= 13 && horaActual <=19){
        return('buenas tardes')
    }else{
        return('buenas noches')
    }
}

const server = http.createServer((peticion, respuesta)=>{
    respuesta.end(getMensaje());
})

const connectServer = server.listen(8080, () => {
    console.log(`server http escuchando en el puerto ${connectServer.address().port}`)
})

