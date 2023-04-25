// // esta es mi función que suma dos números
 const sum = (a,b) => {
     return a + b
}

// // solo un registro en consola para nosotros.
console.log(sum(7,3))

// // exporta la función para usarla en otros archivos 
// // (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromEuroToDollar};

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
