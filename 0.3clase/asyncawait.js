const dividir = (dividendo,divisor) =>{
    return new Promise((resolve, reject) => {
        if(divisor === 0){
            reject("No se puede dividir entre cero");
        } else{
            resolve(dividendo/divisor);
        }
    })
}

const calculo = async () => {
    try {   // el try es la ejecucion de la funcion
        const resultado = await dividir (5,2)
        console.log(`El resultado es: ${resultado}`);
    } catch (error) { // el catch me trae el error que me pueda llegar a surgir
        console.log(error);
    }
}

calculo()

// Es mucho mejor usar async y await en vez de then y catch