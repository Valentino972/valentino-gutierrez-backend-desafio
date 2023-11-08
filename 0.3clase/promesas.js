const dividir = (dividendo,divisor) =>{
    return new Promise((resolve, reject) => {
        if(divisor === 0){
            reject("No se puede dividir entre cero");
        } else{
            resolve(dividendo/divisor);
        }
    })
}

dividir(5,2)
    .then(resultado=>{
        console.log(resultado)
    })
    .catch(error=>{
        console.log(error)
    });

const data = new Promise (function(resolve,reject){
    setTimeout(async () =>resolve(1), 1000)
})
.then(resultado =>{
    console.log(resultado);
    return resultado;
})
.then(resultado2 =>{
    console.log(resultado2+10)
    return resultado2+10
})
.then(resultado30=>{
    console.log(resultado30*2)
})
.catch(err=>{
    console.log(err())
})