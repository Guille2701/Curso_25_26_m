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
console.log(`La suma de 3 y 5 es: ${suma(3,5)}`);






function saludar(nombreUsuario){
    return `Bienvenid@ ${nombreUsuario ?? "Usuario"}`;
}


let nombre="Guillermo";

console.log(saludar(nombre)) 


//funcion aprobados que le pase por parametro un numero y diga si estoy aprobado o no aprobado.
// crear una version 2.o que si le paso un numero >=9 diga sobresaliente, 
// si esta entre 5-9 aprobado, si es <5 suspenso


//function aprobados(nota){
//    return nota>=5 ? console.log("Aprobado") : console.log("No aprobado");
//}

// const aprobados = (nota=0) =>  {
//     return nota >=5 ? "Aprobado" : "Suspenso";
// }

const aprobados = (nota=0) => nota >=5 ? "Aprobado" : "Suspenso";

const aprobadosV2 = (nota=0) => nota >=9 ? "Sobresaliente" : nota >=5 ? "Aprobado" : "Suspenso";

console.log(aprobadosV2(7));


// ----------------------TERNARIAS-----------------------------

// condicion ? si es true : si es false

//----------------------------NULLISH COALESCING----------------------------

//en caso de que esto sea null o undefined ?? hare esto otro


