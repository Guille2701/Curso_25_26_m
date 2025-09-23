// primer ejercicio de JavaScript

/// -------------------------------- declarar variables ------------------------------



/// -------------------------- declarar funciones -------------------------

/**
 * Suma dos numeros y devuelve el resultado
 * @param {number} [a=0] - primer numero a sumar con valor por defecto 0
 * @param {number} [b=0] - segundo numero a sumar con valor por defecto 0
 * @returns {number} - la suma de a y b
 */
function suma(a=0, b=0){
    return a+b;
}




/// ------------------------ inicializar la aplicacion -------------------------

// test de la aplicacion
console.log(suma(3,5));
console.log(suma(10,15));
console.log(suma(7));
console.log(suma());


