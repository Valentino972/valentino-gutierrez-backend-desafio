let variable = 0;
let valor1 = variable??'Vino null'
let valor2 = variable||'Vino null'


// console.log('Valor 1:', valor1);
// console.log('Valor 2:', valor2);


class Persona{
    #mayorEdad = 18;
    static otraEdad = 19;

    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    obtenerNombre(){
        return this.nombre;
    }
    mostrarNombre(){
        console.log(this.nombre);
    }

    esMayor(){
        if(parseInt(this.edad) >= parseInt(this.#mayorEdad)){
            console.log('Es mayor');
        } else{
            console.log(`No es mayor`);
        }
        console.log(object)
    }
}

// console.log(Persona.otraEdad);
// console.log(Persona.mayorEdad);

const luis = new Persona('Luis', 17);
luis.esMayor()