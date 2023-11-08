const usuario = {
    name: 'Luis',
    email: 'luis@correo.com',
    age: 43
};

// //object.entries
// const obEntries = Object.entries(usuario);

// console.log(obEntries);

// //object.keys
// const obKeys = Object.keys(usuario);

// console.log(obKeys);

// //object.values
// const obValues = Object.values(usuario);

// console.log(obValues);

const valores = [10, 30, 40];

const suma = valores.reduce(
    function(a,b) {
        return a + b
    })


console.log(suma)