//ACTIVIDAD EN CLASE

//array q contenga todos los tipos de productos
//object.keys
//object.values
//object.entries

const objetos = [
    {
        manzanas: 3,
        peras:2,
        carne: 1,
        jugos:5,
        dulces:2
    },
    {
        manzanas: 1,
        sandias:1,
        huevos:6,
        jugos:1,
        panes:4
    }
]

const productos = []; // nuestro acumulador
objetos.forEach(e => {
    const obKeys = Object.keys(e)
    productos.push(...obKeys)
})
// console.log(productos);

const productosUnicos = productos.reduce ( (acc, item)=> {
    if(!acc.includes(item)){
        acc.push(item)
    }
    return acc;
}, [])
// console.log(productosUnicos);

//Total de prods vendidos
const cantProductos = [];
objetos.forEach(e => {
    cantProductos.push(...Object.values(e));
})
console.log(cantProductos);

//Sumar total
const total = cantProductos.reduce(function(a, b){
    return a + b;
}, 0)
console.log(`El total es ${total}`);
