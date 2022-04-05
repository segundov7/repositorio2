let dineroPedro = prompt("cunato dinero tenes pedro?");
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
    document.write("no te alcanza para nada crack");
}