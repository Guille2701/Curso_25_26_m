// Crear un juego de un dado que utilizando una funcion tirar dado permita tirar un dado de 6 caras con valores 1-6. 
// crear una funcion llamada simular que pase como parametro el numero de tiradas y diga que numero se ha repetido mas veces.

/**
 * 
 * @returns - un numero aleatorio entre 1 y 6
 */
function tirarDado(){
    return Math.floor(Math.random(1,6)*6+1);
}


/**
 * 
 * @param {number} tiradas - numero de tiradas del dado
 * @returns {number} - el numero que más ha salido
 */
function simular(tiradas){
    const cuentaNumeros=[0,0,0,0,0,0,0];
    
    for(let i=0;i<tiradas;i++){
        let resultado=tirarDado();
        cuentaNumeros[resultado]+=1;
    }
    console.log(...cuentaNumeros);
    for(let i=1;i<7;i++){
        if(Math.max(...cuentaNumeros)===cuentaNumeros[i]){
            console.log("El numero que más ha aparecido es: ", i);
        }
    }
    
    return Math.max(...cuentaNumeros);
    
}


console.log("El numero ha aparecido", simular(2), "veces");

 