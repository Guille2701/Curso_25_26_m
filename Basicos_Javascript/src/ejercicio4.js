// //usos de los arrays

// //declaracion: 

// const edades=[];
// const frutas=["pera", "manzana", "platano"];

// //usando el constructor

// const cp = new Array();
// const cc = new Array("dsfwjksdf","sdkfjgwdfg","sdfgdfg");

// // añadir:

// edades.push(10); //añadiendo al final
// edades.unshift(100); //añadiendo al principio

// // eliminar

// edades.pop(); //elimina el ultimo y retorna el valor eliminado
// edades.shift(); //elimina el primero y retorna el valor eliminado

// // ******* slice extraer partes de un array *********

// //edades.slice();

// // ************************ MAP *******************************

// edades.map( (edad)=> edad*2);

// // ********************* FILTER **************************** */

//edades.filter( (edad) => edad>=18);
//------------------------------------------------------------


//dado un array de nombres crear una funcion llamada mayusculas que ponga en mayusculas todos 
// los elementos de ese array que paso como parametro

/**
 * 
 * @param {Array} nombres - array de nombres 
 * @returns {Array} - array de nombres en mayusculas
 */
function mayus(nombres){
    return nombres.map( (nombre) => nombre.toUpperCase() );
}

console.log(mayus(["jaime","ramon","pepe"]));

//crea una funcion llamada preciosconIVA que al pasarle un array de precios 
//me los devuelva con el iva incluido (21%)

/**
 * 
 * @param {Array} precios - Array con los precios
 * @returns {Array} - Array con los precios con IVA
 */
function preciosConIva(precios){
    return precios.map( (precio)=> precio*1.21);
}

console.log(preciosConIva([100,200,300]));

// crear una funcion llamada impares cuadrado que le pase un 
// array de numeros y me devuelva solo los impares elevados al cuadrado

/**
 * 
 * @param {Array} numeros - Array con los numeros que se van a filtrar
 * @returns {Array} - Array con los numeros impares al cuadrado
 */
function imparesCuadrado(numeros){
    return numeros.filter( (numero)=> numero%2!==0).map ( (numero)=> numero*numero);
}

console.log(imparesCuadrado([1,2,3,4,5]));

//crear una funcion llamada normalizar email q le 
// pase un array de emails que pueden llevar espacios 
// al principio o al final del emai y que los devuelva sin espacios

/**
 * 
 * @param {Array} emails - Array con los emails a los que se le va a quitar el espacio al inicio o al final
 * @returns {Array} - Array con los emails sin espacios
 */
function normalizarEmail(emails){
    return emails.map( (email)=> email.trim());
}

console.log(normalizarEmail([" guille@prueba.com ", "  gilberto@prueba.com  "]));

// crea una funcion llamada filtrar longitud que le pase como parametro una array de nombres 
// y un tamaño y devuelva solo un array con los nombres cuya longitud es mayor o igual que el parametro de longitud

/**
 * 
 * @param {Array} nombres - array con los nombres usados para ver la longitud
 * @param {number} longitud - longitud que se va a coger como mínimo
 * @returns {Array} - Array con los nombres que tienen una longitud mayor o igual al parametro longitud
 */
function filtrarLongitud(nombres, longitud){
    return nombres.filter( (nombre)=>nombre.length>=longitud);
}

console.log(filtrarLongitud(["Guille","pepe","ana"],5));

// crea una funcion llamada normalizar nombres propios que le pase como parametro un array de nombres y me los
// devuelva con la letra inicial del nombre y apellidos en mayuscula


/**
 * 
 * @param {Array} nombres - Array con los nombres que se van a normalizar
 * @returns {Array} - Array con los nombres normalizados
 */
function normalizarNombresPropios(nombres){
    return nombres.map((nombre)=> 
        (nombre
            .toLowerCase()
            .split(" ")
            .filter((palabra)=>palabra.trim()!=="")
            .map((palabra)=>
                palabra.charAt(0).toUpperCase() + palabra.slice(1)
            )
            .join(" ")
        )
    );
}
console.log(normalizarNombresPropios(["jUaNa","PEpe","ROdrIGo","joSe lUIS"]));