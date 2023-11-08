function funcionDerivadora(valor, funcionCallBack) {
    funcionCallBack(valor)
}

const contarLetras = (letras) => {
    let cantLetras = letras.trim().length;
    // console.log(cantLetras);
}

const contarElementos = (arr) => {
    let cantElementos = arr.length
    // console.log(cantElementos);
}

funcionDerivadora(' El camino es el estudio', contarLetras)
funcionDerivadora([10, 20, 30], contarElementos)

//EJEMPLO DE CALLBACK CON OPERACIONES

const sumar = (numero1,numero2) => numero1+numero2;
const restar = (numero1,numero2) => numero1-numero2;
const multiplicar = (numero1,numero2) => numero1*numero2;
const dividir = (numero1,numero2) => numero1/numero2;

const realizarOperacion = (numero1,numero2, funcionCallBack) =>{
    console.log('Realizo la op Callback')
    const resultado = funcionCallBack(numero1,numero2);
    console.log(`El resultado de la operacion enviada es: ${resultado}`);
}

realizarOperacion(1,22,sumar);
realizarOperacion(10,3,restar);

/**
*El Callback siempre es el ultimo param
*El Callback suele ser una funcion que recibe dos params
*La funcion llamada al callback al terminar de ejecutar todas sus operaciones
*Si la operacion fue exitosa, la funcion llamará al callback pasando null como primer param y si generó algun resultado este se pasará como segundo param
*Si la operacion resultó en un error, la funcion llamará al callback pasando el error obtenido como primer param.
 */

const ejemploCallback = (error, resultado) =>{
    if (error) {
        //hacer algo con el error!
    } else {
        // hacer algo con el resultado!
    }
}