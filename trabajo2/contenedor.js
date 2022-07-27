const Contenedor = require('./clases');




const main = async () => {
    const products = new Contenedor('ropa.txt');



    console.log('Cargamos el primer producto');
    let newProduct = await products.save(({title: 'Remera',price: 1000, thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIzbsUgYfrJ2vfybeBEZdiW4zFl-dOKXDqHw&usqp=CAU'}))
    console.log(newProduct);


    console.log('Cargamos el segundo producto');
    let newProduct2 = await products.save(({title: 'Pantalon', price: 2000, thumbnail: 'https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw22765517/products/LO_LOPHS22001/LO_LOPHS22001-1.JPG?sw=400&sh=400'}))
    console.log(newProduct2);


    console.log('Cargamos el tercer producto');
    let newProduct3 = await products.save(({title: 'Camisa', price: 1500, thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_822877-MLA46374685703_062021-W.jpg'}))
    console.log(newProduct3);


    console.log('Mostramos todos los productos');
    let allProducts = await products.getAll();
    console.log(allProducts);


    let searchById = 1
    console.log(`Mostamos el producto del id: ${searchById}`);
    let productById = await products.getById(searchById);
    console.log(productById);


    let productToDeleteById = 2
    console.log(`Eliminamos el producto del id: ${productToDeleteById}`);
    await products.deleteById(productToDeleteById);


    console.log('Eliminamos todo el archivo');
    await products.deleteAll();
};


main();
