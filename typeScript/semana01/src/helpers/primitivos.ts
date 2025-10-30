// primitivos en typescript

// 1. String
let nombre: string = 'Guillermo BD';
let cp: string = '18003';

let mensaje: string = `Bienvenido D/Dña ${nombre} --> cp: ${cp}}`;

function procesarTexto(texto: string): string{
    return texto.trim().toUpperCase();
}

console.log(procesarTexto(mensaje));
let saludo="Que tal todo"; //declaracion con inferencia de tipos
procesarTexto(saludo);

// 2. Number

//crear una funcion calcular precio final que se le pase un precio, un impuesto y un descuento y devuelva el precio total con el impuesto y el descuento aplicado

function calcularPrecioFinal(precio: number, impuesto: number, descuento: number): number{
    return (precio*(1+(impuesto/100 )) * (1-(descuento/100 )));
}

console.log(calcularPrecioFinal(80,21,3));

// cualquier tipo ( SOLO USAR SI NO HAY MAS REMEDIO)
// funcion qu verifique q lo que pase como parametro es un numero
// NO es infinito, !isNaN

function esNumero(numero: any): boolean{
    return typeof numero === "number" && isFinite(numero) && !isNaN(numero);
}

esNumero("7");


// calcular el promedio de los elementos de un array de numeros

function calcularPromedio(numeros:number[]):number {
    if(numeros.length===0){
        throw new Error("No se puede calcular el promedio de un array vacio");
    }

    const suma:number = numeros.reduce((acc,numero)=>acc+numero,0);
    return suma/numeros.length;
}


function calcularExtremos(numeros:number[]):{max:number, min:number}{
    if(numeros.length===0){
        throw new Error("No se puede calcular el promedio de un array vacio");
    }

    const min:number = Math.min(...numeros);
    const max:number=Math.max(...numeros);

    return { max, min };
}


// comprobar si un email es correcto o no

// esValidoEmail que se le pase un string y diga si es correcto o no

function esEmailValido(email:string):boolean {

    // guille@gmail.com "." y espacio son caracteres especiales, hay que escaparlos con \: \s \.
    const emailRegEx : RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegEx.test(email);
}

esEmailValido("aaa@gmail.com");


// interface --> Tipo de dato generado por el usuario para una determinada situacion

interface permisosUsuario{
    puedeLeer: boolean,
    puedeEscribir:boolean,
                puedeBorrar:boolean,
}


// crear una funcion llamada obtenerPermisos que dependiendo de si el usuario es administrador, usuario o invitado, cambie los permisos de la interfaz

type tipoUsuario = "invitado" | "usuario" | "administrador";

//type permite crear un tipo de dato entre unos valores dados

function obtenerPermisos(usuario:tipoUsuario):permisosUsuario{
    switch (usuario) {
        case "invitado":
            return {
                puedeLeer: true,
                puedeEscribir:false,
                puedeBorrar:false,
            }
            
        case "usuario":
            return {
                puedeLeer: true,
                puedeEscribir:true,
                puedeBorrar:false,
            }
            
        case "administrador":
            return {
                puedeLeer: true,
                puedeEscribir:true,
                puedeBorrar:true,
            }
            
    
        default:
            return {
                puedeLeer: false,
                puedeEscribir:false,
                puedeBorrar:false
            }
            
    }
}

obtenerPermisos("usuario");


// NULL UNDEFINED permiten ser asignados como posibles valores

let posibleNombre : string | null = "Invitado";
let posibleNombreIndefinido : string | undefined = undefined;


// arrow function

const duplicar = (numero:number):number => {
    return numero*2;
};

// crear una funcion que le pase como parametro un array de objetos y me devuelva los usuarios que son mayores de edad.

const usuarios = [
    {nombre:"Ana", edad:34},
    {nombre:"Sara", edad:14},
    {nombre:"Mario", edad:24},
    {nombre:"Carlos", edad:18},
]

const mayorEdad = (usuarios:any[])=>{
    return usuarios.map((usuario)=>{
        if(usuario.edad>=18){
            return usuario;
        }
    })
} 

const misNumeros: number[]=[1,-3,4,54,2,4,9,-23,64,12,-76,32];
// funcion procesarNumeros que devuelva un array de numeros solo positivos, multiplocados por 2  y ordenados de menor a mayor

const procesarNumeros = (numeros:number[])=>{
    return numeros
    .filter(numero=>numero>0)
    .map(numero=>numero*2)
    .sort((a,b)=>b-a)
}


//ejercicio:

interface Cliente{
    id:number;
    nombre:string;
    email:string;
    telefono:string;
}
/*
crear una funcion que genere un map con la siguiente estructura
{
 idUsuario:{
    nombre:string,
    email:string,
    telefono:string,
    }
}
*/
const clientes:Cliente[]= [
        {id:1, nombre:"Ana", email:"ana@gmail.com", telefono:"1111111"},
        {id:2, nombre:"Juan", email:"juan@gmail.com", telefono:"2222222"},
        {id:3, nombre:"Pedro", email:"pedro@gmail.com", telefono:"3333333"},
        {id:4, nombre:"Maria", email:"maria@gmail.com", telefono:"4444444"},
        {id:5, nombre:"Luis", email:"luis@gmail.com", telefono:"5555555"},
        {id:6, nombre:"Laura", email:"laura@gmail.com", telefono:"6666666"},
        {id:7, nombre:"Carlos", email:"carlos@gmail.com", telefono:"7777777"},
        {id:8, nombre:"Sofia", email:"sofia@gmail.com", telefono:"8888888"},
        {id:9, nombre:"Diego", email:"diego@gmail.com", telefono:"9999999"},
    ];
    /*
function createMap(clientes:Cliente[]):Map<number,{nombre:string,email:string,telefono:string}>{
    const map:Map<number,Cliente> = new Map();
    clientes.forEach((cliente)=>{
        map.set(cliente.id,{
            cliente.nombre,
            cliente.email,
            cliente.telefono,
        });
    })
    return map;


}

createMap(clientes); 
*/

// calculadora simple: crear una calculadora tipada que realice operaciones basicas. 
// para ello partimos de una interfaz llamada operacion formada por: primer elemento-> tipo(sumar, restar,multiplicar,dividir)
//segundo elemento-> operando1 y tercer elemento-> operando2
//crear una funcion calculadora que le pasaremos como parametro una operacion de tipo operacion
//  y devolvera segun el tipo el calculo de los dos operandos. probar con 10 , 5 y 10 , 0.
//se podria ampliarr a otras operaciones

interface Operacion{
    tipo:"sumar" | "restar" | "multiplicar" | "dividir";
    operando1:number;
    operando2:number;
}

function calculadoraSimple(operacion:Operacion):number{
    switch (operacion.tipo) {
        case "sumar":
            return operacion.operando1 + operacion.operando2;
        case "restar":
            return operacion.operando1 - operacion.operando2;
        case "multiplicar":
            /*if(operacion.operando1===0 || operacion.operando2===0){
                throw new Error("No se puede multiplicar por 0");
            }*/
            return operacion.operando1 * operacion.operando2;
        case "dividir":
            if(operacion.operando1===0 || operacion.operando2===0){
                throw new Error("No se puede dividir por 0");
            }
            return operacion.operando1 / operacion.operando2;
        default:
            return 0
    }
}

calculadoraSimple({tipo:"sumar", operando1:10, operando2:5});
calculadoraSimple({tipo:"restar", operando1:10, operando2:5});
calculadoraSimple({tipo:"multiplicar", operando1:10, operando2:5});
calculadoraSimple({tipo:"dividir", operando1:10, operando2:5});

calculadoraSimple({tipo:"sumar", operando1:10, operando2:0});
calculadoraSimple({tipo:"restar", operando1:10, operando2:0});
calculadoraSimple({tipo:"multiplicar", operando1:10, operando2:0});
calculadoraSimple({tipo:"dividir", operando1:10, operando2:0});

calculadoraSimple({tipo:"sumar", operando1:0, operando2:5});
calculadoraSimple({tipo:"restar", operando1:0, operando2:5});
calculadoraSimple({tipo:"multiplicar", operando1:0, operando2:5});
calculadoraSimple({tipo:"dividir", operando1:0, operando2:5});



//funcion con valores opcionales
/*
function sumaVarios(n1:number=0, n2:number=0, n3?:number):number{

}*/

interface Usuarios{ 
    nombre:string
}
/*
type Datos ={
    nombreEmpresa:string
}
*/

// MAP Y SET

const edades= new Map<string,number>();

edades.set("Antonio",56);
edades.has("Antonio"); // true

interface Datos{
    nombre:string;
    email:string;
    cp:number;
};

const misUsuarios = new Map<string, Datos[]>();

misUsuarios.set("Antonio",[{
    nombre:"Antonio",
    email:"antonio@gmail.com",
    cp:18003,
}])


const mySet = new Set<number>();
mySet.add(19);



