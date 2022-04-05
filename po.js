//______________________________________________IF, ELSE IF, ELSE_______________________________________________
/*let dineroPedro = prompt("cunato dinero tenes pedro?");
parseInt(dineroPedro)

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
let deporte = caja["deporte"]

let frase = `mi ${animal} tiene una ${prenda} <br> del talle ${talle} y juega al ${deporte}`;

document.write(frase)
*/
//______________________________________________________WHILE_____________________________________________________
/*
let numero = 0;

while(numero < 10){
    numero ++;

    document.write(numero + "<br>")
}
*/
//___________________________________________________DO WHILE____________________________________________________
/*
let numero = 0

do{
    document.write(numero + "<br>");
    numero ++;
}

while (numero < 10);
*/
//_____________________________________________________BREAK____________________________________________________
let numero = 0

while(numero < 1000){
    numero ++;
    document.write(numero)
    if(numero == 17){
        break;
    }
}

document.write(" fin")
