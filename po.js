//______________________________________________IF, ELSE IF, ELSE_______________________________________________
/*
let dineroPedro = prompt("cunato dinero tenes pedro?");
parseInt(dineroPedro)                              //parseInt es para que me devuelva numeros

if(dineroPedro >= 10 && dineroPedro <20){
    document.write("comprate esta, que cuesta 10");
    document.write(" y te sobran " + (dineroPedro - 10 ));
}
else if(dineroPedro >= 20 && dineroPedro < 30){
    document.write("comprate esta otra, vale 20");
    document.write(" y te sobran " + (dineroPedro - 20 ));
}
else if(dineroPedro >= 30){
    document.write("comprate esto amigo que cuesta 30");
    document.write(" y te sobran " + (dineroPedro - 30 ));
}
else{
    document.write("no te alcanza para nada capo");
}
*/
//_____________________________________________________ARRAY____________________________________________________
/*

let caja = ["perro", "gato", "pajaro","conejo"];
document.write(caja [3]);


let caja = {
    animal: "gato",
    prenda: "remera",
    talle: 10,
    deporte : "futbol",
}

let animal = caja["animal"];
let prenda = caja["prenda"];
let talle = caja["talle"];
let deporte = caja["deporte"];

let frase = `mi ${animal} tiene una ${prenda} <br> del talle ${talle} y juega al ${deporte}`;

document.write(frase);
*/
//______________________________________________________WHILE_____________________________________________________
/*
let numero = 0;

while(numero < 10){
    numero ++;

    document.write(numero + "<br>");
}
*/
//___________________________________________________DO WHILE____________________________________________________
/*
let numero = 0;

do{
    document.write(numero + "<br>");
    numero ++;
}

while (numero < 10);
*/
//_____________________________________________________BREAK____________________________________________________
/*
let numero = 0;

while(numero < 1000){
    numero ++;
    document.write(numero);
    if(numero == 17){
        break;
    }
}

document.write(" fin");
*/
//______________________________________________________FOR_____________________________________________________
//FOR: 3 PARTES: CREAMOS LA VARIABLE, LE DAMOS LA CONDICION Y LA AUMENTAMOS(++) O LA DISMINUIMOS(--)
/*
for( let i = 1; i <= 10; i++){
    document.write(i + "<br>");
 
}
*/
//________________________________________________FOR IN, FOR OF ________________________________________________
// FOR IN ME MUESTRA LA POSICION Y FOR OF ME MUESTRA EL VALOR DE LA POSICION
/*
let animales = ["gato", "perro", "ardila", "elefante", "vaca"]

for(let animal in animales){
    document.write(animal + "<br>")
}
document.write("<br>")

for(let animal of animales){
    document.write(animal + "<br>")
}
*/
//_____________________________________________________LABEL______________________________________________________
// VOLVER A REPASAR PORQUE NO ENTENDI UNA MIERDA
/*
let array1 = ["pedro", "marcelo","carlos"];
let array2 = ["carla", "maria", array1 , "josefina"]

for( let array in array2){
    if(array == 2){
        for( array of array1){
            document.write(array + "<br>")
        }
    }
    else{
        document.write(array2[array] + "<br>")
    }

}
*/
//____________________________________________________FUNCIONES___________________________________________________
/*

//___FORMA 1____

function comida(){
    let comer = prompt("que queres comer pibe?");
    if (comer == "fideos"){
        alert("no tenemos fideos pibe");
    }else if( comer == "una hamburguer"){
        alert("dale tenemos la de chedar que es una deliciura pibe");
    }else{
        alert("te vas a tener que ir a otro lado pibe");

    }
}

comida();
comida();
comida();

// ___FORMA 2___

comida = function(){
    let comer = prompt("que queres comer pibe?");
    if (comer == "fideos"){
        alert("no tenemos fideos pibe");
    }else if( comer == "una hamburguer"){
        alert("dale tenemos la de chedar que es una deliciura pibe");
    }else{
        alert("te vas a tener que ir a otro lado pibe");

    }
    
}
comida();
comida();
comida();
*/
//__________________________________________________RETURN_______________________________________________________
/*
//REPASAR

function saludar(){
    alert("hola");
    return 8;
}

let saludo = saludar();
document.write(saludo);
*/
//________________________________________________PARAMETROS_____________________________________________________
/*
function sumar (num1, num2){
    let res = num1 + num2;
    document.write(res)
}
sumar(84,14)
*/
/*
//REPASAR
function sumar(num1, num2){
    let res = num1 + num2;
    return res;
}
let resultado = sumar(15,20)


document.write(resultado)
*/
/*
function saludar (nombre){
    let saludo = `¡Hola ${nombre}!, ¿Como estas?`;
    document.write(saludo)
}
saludar("mariano de la canal")
*/
//_______________________________________________FUNCION FLECHA__________________________________________________
//EN LA FUNCION FLECHA SI USAMOS UN SOLO PARAMETRO NO HACE FALTA PONERLE PARENTESIS
/*
const saludar = nombre=>{
    let saludo = `hola ${nombre}, como estas?`;
    document.write(saludo + "<br>");
}
 saludar("pedro")
 saludar("carlos")
 saludar("segundo")
 saludar("marcos")
 saludar("marcelo")
 saludar("pablo")
 */

/*
const saludar = nombre => document.write(`hola ${nombre} como estas?` +"<br>");

saludar("pedro")
saludar("carlos")
saludar("segundo")
saludar("marcos")
saludar("marcelo")
saludar("pablo")
*/
//________________________________________PROBLEMA DE FUNCTION FLECHA____________________________________________
// UNA PERSONA HACE UNA FIESTA Y SOLO DEJA PASAR A LOS MAYORES DE 18 AÑOS,Y EL PRIMERO QUE ENTRA DESPUES DE LAS 2 AM 
// PUEDE PASAR GRATIS, LA FIESTA TERMINA A LAS 7AM. 
// TENGO QUE APRENDER EL TEMA HORAS (EN ESTE EJERCICIO)
/*
let gratis = false;

const valiarCliente = (hora)=>{
    let edad = prompt("¿Cuantos años tenes?")
    if(edad >= 18){
        if(hora >= 2 && gratis == false){
            alert(` podes pasar gratis por ser la primer persona que viene despues de las 2am`);
            gratis = true;
        }else if(hora >= 7){
            alert(`son las ${hora}:00, ya cerramos`)
            
        }else{
                alert(`son las ${hora}:00, podes pasar pero tenes que pagar`)
        }
    }else{
        alert("sos menor no podes pasar")
    }
}


valiarCliente(00);
valiarCliente(1);
valiarCliente(2);
valiarCliente(3);
valiarCliente(4);
valiarCliente(8);
valiarCliente(9);
*/
//_____________________________________2DO PROBLEMA FUNCTION FLECHA______________________________________________
