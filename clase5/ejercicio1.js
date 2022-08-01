const obj = {};

for(let i = 0; i<10000; i++){
    let randomNumber = parseInt(Math.random() *20);
    obj [randomNumber] ? obj[randomNumber]++ : obj[randomNumber] =1;

}
console.log(obj)

