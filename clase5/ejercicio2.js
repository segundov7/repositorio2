const productos = [
    { id: 1, nombre: 'Escuadra', precio: 323.45 },
    { id: 2, nombre: 'Calculadora', precio: 234.56 },
    { id: 3, nombre: 'Globo Terráqueo', precio: 45.67 },
    { id: 4, nombre: 'Paleta Pintura', precio: 456.78 },
    { id: 5, nombre: 'Reloj', precio: 67.89 },
    { id: 6, nombre: 'Agenda', precio: 78.90 }
]
//nombres de los productos

function getNombres(productos){
    const nombres = productos.map(producto => producto.nombre);
    return nombres.join(', ')
}


//buscar el precio total

function getPrecioTotal(productos){
    let total = 0;
    for(const producto of productos){
        total += producto.precio;
    }
    return total;
}



//buscar el precio promedio

function getPrecioPromedio(productos){
    return getPrecioTotal(productos) / productos.length;
}



// buscar el precio minimo

function getProductMinPrice (productos){
    if(productos.length === 0){
        console.log('no se puede calcular el minimo de un array vacio')
    };

    let min = productos[0].precio;
    let prod = productos[0];

    for(const producto of productos){
        if(producto.precio < min){
            min = producto.precio;
            prod = producto;
        }
    }
    return prod;

}
//buscar el precio maximo


function getProductMaxPrice (productos){
    if(productos.length === 0){
        console.log('no se puede calcular el minimo de un array vacio')
    };

    let max = productos[0].precio;
    let prod = productos[0];

    for(const producto of productos){
        if(producto.precio > max){
            max = producto.precio;
            prod = producto;
        }
    }
    return prod;

}

const info ={
    nombreProducto: getNombres(productos),
    precioTotal: getPrecioTotal(productos),
    precioPromedio: getPrecioPromedio(productos),
    productoPrecioMinimo: getProductMinPrice(productos),
    productoPrecioMaximo: getProductMaxPrice(productos),
};

console.log(info);





