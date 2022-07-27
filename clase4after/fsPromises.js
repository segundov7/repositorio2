const fs = require('fs');

fs.promises.readFile('info.txt', 'utf-8')
    .then(contenido =>{
        const info = JSON.parse(contenido);
        console.log(info); 
        const packageJsonOjet = info.contenidoObj;
        packageJsonOjet.author = 'Coderhouse'
        //console.log(packageJsonOjet)

        fs.promises.writeFile('package.json.coder', JSON.stringify(packageJsonOjet, null, 2))
            .then(() => console.log('escritura exitosa'))
            .catch(error => {
                console.error(error)
            })
             
        
    })
    .catch(error => {
        console.error(error)
    })

 