const persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 28
}

//spread o destructuring
/* Permite tomar lo que yo necesito del objeto */

/*Necesito la edad y el nombre de la persona*/

const {edad, nombre} = persona;

// console.log('Edad', edad);
// console.log('Nombre', nombre);


// Rest

const persona2 = {...persona}
persona2.nombre = 'Camilo'

// console.log('persona', persona);
// console.log('persona2', persona2);

