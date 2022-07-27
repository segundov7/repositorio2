function dividir(dividendo, divisor){
    return new Promise((resolve, reject) =>{
        if(divisor === 0){
            reject('no se puede dividir por 0')
        }
        resolve(dividendo / divisor);
    })
}

dividir(10 ,3)
    .then(resultado => {
        console.log(`resultado: ${resultado}`)
    })
    .catch(error => {
        console.error(`error: ${error}`)
    })
    
dividir(10 ,0)
    .then(resultado => {
        console.log(`resultado: ${resultado}`)
    })
    .catch(error => {
        console.error(`error: ${error}`)
    })




