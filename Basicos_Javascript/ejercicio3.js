/*
    #Gestion bancaria REVOLUT

    - Se pretende llevar la gestion de un pequeño sistema bancario que permita crear cuentas bancarias con titular (string) y saldo (number), 
    - depositar dinero en una cuenta, 
    - retirar dinero de una cuenta (siempre que no tenga saldo negativo), 
    - consultar el saldo de una cuenta
    - transferir dinero entre dos cuentas, 
    - validando si tienes saldo para transferir, 
    - mantener un listado de cuentas y buscar cuentas por un titular.

    - cuando creemos una cuenta se debe de generar un numero de cuenta con una longitud (real).
    - documentar todas las funciones
    - hacer el test de todos los casos (llamando a una funcion test que llame a las demas funciones).

*/

//[] -> creas cuenta [cuenta 1]-> [cuenta 2]

let listadoCuentas=[];


/**
 * 
 * @param {Text} titular - Nombre del titular de la cuenta
 * @param {number} saldo - Saldio inicial de la cuenta. Por defecto es 0
 * @returns {numCuenta: number, titular: string, saldo: number} - Objeto con los datos de la cuenta creada
 */
function generarCuenta(titular, saldo=0){
    const numCuenta=Math.floor(Math.random()*10000000000);
    let cuenta={numCuenta, titular, saldo};
    console.log(`Cuenta creada: ${numCuenta}, Titular: ${titular}, Saldo: ${saldo}`);
    listadoCuentas = [... listadoCuentas, cuenta];
    return {numCuenta, titular, saldo};
}


/**
 * 
 * @param {cuenta} cuenta - Objeto cuenta donde se va a depositar el dinero
 * @param {number} cantidadDepositar - Cantidad a depositar en la cuenta
 * @returns {numCuenta: number, titular: string, saldo: number} - Objeto con los datos de la cuenta actualizados
 */
function depositarDinero(cuenta,cantidadDepositar){
    if(cantidadDepositar>0){
        cuenta.saldo+=cantidadDepositar;
    }
    console.log(`Se han depositado ${cantidadDepositar} en la cuenta de ${cuenta.titular}. Saldo actual: ${cuenta.saldo}`);
    return cuenta;
}


/**
 * 
 * @param {cuenta} cuenta - Objeto cuenta de donde se va a retirar el dinero
 * @param {null} cantidadRetirar - Cantidad a retirar de la cuenta
 * @returns {numCuenta: number, titular: string, saldo: number} - Objeto con los datos de la cuenta actualizados
 */
function retirarDinero(cuenta, cantidadRetirar){
    if(cantidadRetirar>0 && cantidadRetirar<=cuenta.saldo){
        cuenta.saldo-=cantidadRetirar;
    }else{
        console.log("No se puede retirar esa cantidad");
    }
    return cuenta;
}



/**
 * 
 * @param {cuenta} cuenta - Objeto cuenta de la que se va a consultar el saldo
 * @returns {numCuenta: number, titular: string, saldo: number} - Objeto con los datos de la cuenta
 */
function consultarSaldo(cuenta){
    console.log("El saldo de la cuenta es: ",cuenta.saldo);
    return cuenta;
}


/**
 * 
 * @param {cuenta} cuentaOrigen - Cuenta de la que se va a retirar el dinero
 * @param {cuenta} cuentaDestino - Cuenta a la que se va a ingresar el dinero
 * @param {number} cantidadTransferida - Cantidad a transferir
 * @returns {cuentaOrigen: {numCuenta: number, titular: string, saldo: number}, cuentaDestino: {numCuenta: number, titular: string, saldo: number}} - Objeto con los datos de las cuentas actualizados
 */
function transferirDinero(cuentaOrigen, cuentaDestino, cantidadTransferida){
    cuentaOrigen=retirarDinero(cuentaOrigen, cantidadTransferida);
    cuentaDestino=depositarDinero(cuentaDestino, cantidadTransferida);
    return {cuentaOrigen, cuentaDestino};
}


/**
 * 
 * @param {cuenta.titular} titularBuscado - Nombre del titular a buscar
 * @returns {numCuenta: number, titular: string, saldo: number}[] - Array con las cuentas que coinciden con el titular buscado
 */
function buscarCuenta(titularBuscado){
    let resultado=[];
    for(let cuenta of listadoCuentas){
        if(cuenta.titular===titularBuscado){
            resultado= [... resultado,cuenta];
        }else{
            console.log("No se ha encontrado ninguna cuenta con ese titular");
            break;
        }
    }
    return resultado;
} 

function test(){
    let cuenta1=generarCuenta("Pepe", 100);
    let cuenta2=generarCuenta("Ana", 200);
    let cuenta3=generarCuenta("Luis", 300);
    let cuenta4=generarCuenta("Ana",600);
    console.log(listadoCuentas);
    depositarDinero(cuenta1,50);
    retirarDinero(cuenta2,100);
    consultarSaldo(cuenta3);
    transferirDinero(cuenta3, cuenta1, 150);
    console.log(buscarCuenta("Ana"));
}

test();
