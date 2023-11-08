const dividir = (dividendo,divisor) =>{
    return new Promise((resolve, reject) => {
        if(divisor === 0){
            reject("No se puede dividir entre cero");
        } else{
            resolve(dividendo/divisor);
        }
    })
}


const suma = (numero1, numero2) =>{
    return new Promise((resolve,reject) =>{
        if(numero1 === 0 || numero2 === 0){
            reject('Operacion innecesaria')
        }
        if(numero1 + numero2 < 0){
            reject('La calculadora sólo debe devolver valores positivos.')
        }
        const total = numero1 + numero2;

        resolve(total);
    })
}

const resta = (numero1, numero2) =>{
    return new Promise((resolve,reject) =>{

        if(numero1 === 0 || numero2 === 0){
            reject('Operacion inválida')
        }
        if(numero1 - numero2 < 0){
            reject('La calculadora sólo debe devolver valores positivos.')
        }
        const total = numero1 - numero2;

        resolve(total);
    })
}

const multiplicar = (numero1, numero2) =>{
    return new Promise((resolve,reject) =>{

        if(numero1 < 0 || numero2 < 0){
            reject('Operacion inválida')
        }
        if(numero1 * numero2 < 0){
            reject('La calculadora sólo debe devolver valores positivos.')
        }

        const total = numero1 * numero2;

        resolve(total);
    })
}

calculo = async (numero1, numero2, operacion) => { //El ASYNC solo se pone si tambien se utiliza el await
    try {
        const resultado = await operacion (numero1, numero2);
        console.log(`El resultado es ${resultado}`);
    } catch (error) {
    console.log(error);       
    }
}

//calculo(1,1, resta)
calculo(1,11, resta)
calculo(1,1, multiplicar)
//calculo(1,1, suma)
calculo(1,0, suma)
