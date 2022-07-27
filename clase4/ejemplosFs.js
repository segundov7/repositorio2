const fs = require('fs')

const data = fs.readFileSync('./test.txt','utf8')
console.log(data)

fs.writeFileSync('./testWrite.txt', 'esto es una prueba de escritura');

fs.appendFileSync('./testWrite.txt','\nesto es una prueba de texto agregado');

//fs.unlinkSync('./testWrite.txt')

try{
    const data = fs.readFileSync('./cfcfchcghc.txt')
}catch(error){
    console.log('ingresa aca')
    console.error(error)
}