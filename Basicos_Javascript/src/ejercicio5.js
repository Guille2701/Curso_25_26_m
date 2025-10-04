// .at ----> acceso con indices negativos

const frutas = ["manzana","banana","naranja","uva"];
console.log(frutas.at(-2)) // saca naranja
console.log(frutas.slice(-2)) // saca naranja y uva

// .splice ----> exraer o eliminar partes de un array sin mutar el original

// frutas.splice(1,2) ----> elimina 2 elementos desde la posicion 1

// concat ----> concatenar dos o mas arrays

frutas.concat([1,2,3,4,5,6]);

const edades = [1,2,3,4,5,6];

const ArrayConcat = [...frutas,"oso",...edades,"gato" ] //ESTA ES LA QUE HAY QUE USAR Spread Operator

// *********  SET ********  ----> OTRO TIPO DE DATOS (datos únicos)

const pesos = [2,4,5,6,9,5,2,5,7,4,6];

const sinDuplicado = [...new Set(pesos)]; // nuevo array sin duplicados


// .reduce ----> reducir un array a un único valor
// pesos.reduce((acumulador,elemento,indice, array ) =>aqui va la logica, valor inicial);
// acumulador, elemento ----> no son opcionales
// el resto son opcionales
// no muta el array

pesos.reduce( (suma,peso)=> suma+peso , 0 )


// realiza la multiplicacion de todos los elementos de un array
pesos.reduce( (multiplicacion,peso)=> multiplicacion*peso, 1 )
// encontrar el maximo y el minimo

pesos.reduce( ( maximo, peso)=> peso> max ? peso : max , pesos[0]);

pesos.reduce( (min,peso)=> peso< min ? peso:min,pesos[0]);

// dado un array que sea manzana, platano, naranja, manzana, manzana, platano, pera, pera devolver un objeto clave:valor que me diga 
// nombre de la fruta, cuantas veces aparece esa fruta

const frutas2 =["manzana", "platano", "naranja", "manzana", "manzana", "platano","pera","pera"];
/*{
    manzana: 3,
    platano: 2,
    naranja: 1,
    pera:2
}
*/

frutas2.reduce( ( acc,fruta )=> {
    acc[fruta]=(acc[fruta] || 0) +1
    return acc;

} , {} )

//dado el siguiente array bidimensional [[1,2],[3,4],[5,6]] aplanar dicho array en uno unidimensional (para casa)

const arrays = [[1,2],[3,4],[5,6]];

arrays.reduce( (acc , array)=> {



} , [] )

// array de objetos y find

const usuarios= [
    {id:1, nombre:"Ana", edad:25,data: {books:100}},
    {id:2, nombre:"Juan",edad:30, data: {books:50}},
    {id:3, nombre:"María",edad:28, data: {books:20}},
    {id:4, nombre:"Sara",edad:28, data: {books:20}},
    {id:5, nombre:"Carlos",edad:20, data: {books:10}},
    {id:5, nombre:"Mario",edad:38, data: {books:0}},

];

// dame la informacion del usuario que se llama juan

usuarios.find(usuario => usuario.nombre.toLowerCase === "juan");

//dame todos los usuarios cuya edad es >= 28
let resultado = usuarios.find(usuario=>Number(usuario.edad) > 30) ?? {};


// dado el array usuarios devolver un array con solo los nombres de los usuarios que tienen en su biblioteca mas de 20 libros

const usuariosLibros= [];
usuariosLibros = usuarios.filter(usuario=>usuario.data.books>20).map(usuario=>usuario.nombre);

// obtener el valor promedio total de todos los libros si suponemos un precio medio de 28€

const valorLibros = usuarios.map(usuario=>usuario.data.books*28).reduce((suma,precio)=>suma+precio, 0);

// que usuarios no tienen libros 

const usuariosSinLibros = usuarios.filter(usuario=> Number(usuario.data.books)===0);