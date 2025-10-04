/**
 * 
 * @param {Object} products - Objeto Data
 * @returns {Object} Object Products - Objeto con informacion extraida
 */
export const extraerData=(products)=> {
    console.log(products)
    const {
        nombre,
        fabricante:{ nombre:nombreFabricante,contacto },
        especificaciones:{ ram }
    } = products;

    return {
        nombre,
        nombreFabricante,
        contacto,
        ram
    };
};

// añadir una funcion a helpers llamada maxRam que le pase como parametro
// un array de productos y devuelva el nombre del producto que tiene la maxima ram

export const maxRam = (arrayProducts)=> {
    arrayProductos.map(extraerData).reduce((max, product)=>{
        ram.slice()

    }, 0)
}


