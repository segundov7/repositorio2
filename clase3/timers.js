//_______________________ejemplo de setTimeout__________________________

function fun (param){
    console.log(`parametro: ${param}` );
}
setTimeout(fun, 1500, 'pepe');



//_______________________ejemplo de setInterval__________________________

let count = 0;

let interval = setInterval(()=>{
    count ++ ;
    console.log('pepe');
    if(count === 3){
        clearInterval(interval);
    }

}, 1000);