const numeros = [1,2,3,4,5];
//generar un objeto resumen de mi array que tenga los siguientes campos:

/*
    {
        valor: numero_correspondiente,
        posicion: posicion_dentro_del_array,
        esUltimo:array_que_me_diga_si_es_el_ultimo (true|false)
    }
*/

const  resumenNumeros = numeros.map((numero,indice,miArray)=>{
    return {
        valor : numero,
        posicion : indice,
        esUltimo : indice===miArray.length-1
    }
})

console.log(resumenNumeros); //array de objetos mapeados a una estructura dada.

const productos = [
    {
        name: "laptop", price: 1000, stock: 5, active: true
    },
    {
        name: "mouse", price: 28.56, stock: 0, active: false
    },
    {
        name: "Monitor MSI", price: 158, stock: 1, active: true
    }
];

// estructura de datos que devuelva lo siguiente:

/*
    {
        nombre
        precio_original
        precio_con_iva
        hay_stock
    }
*/

const resumenProductos = productos.map((producto)=>{
    return{
        name: producto.name,
        originalPrice: producto.price,
        priceIva: producto.price*1.21,
        available: producto.stock>0
    }

    
});

//filtrame los productos que tienen stock y estan activos

const productsWithVat = productos.filter(producto=>producto.stock>0 && producto.active);

// buscar todos los datos de todos los laptop de tipo case insenitive

const laptops = productos.filter(producto=> producto.name.toLowerCase().includes("laptop".toLowerCase()));

/**
 * 
 * @param {String} text - word or text used to filter.
 * @param {Array} arrayObjects - Array with objects to search for the text.
 * @returns {Array} - Array with all the matches.
 */


function search(text, arrayObjects=[]){
    return arrayObjects.filter(arrayObject=>arrayObject.name.toLowerCase().includes(text.toLowerCase()));
}

/**
 * 
 * @param {*} products 
 * @param {*} wordToFind 
 * @returns 
 */
const findProducts = (products,wordToFind) => products
    .filter((product)=>product.name.toLowerCase()
        .includes(wordToFind.toLowerCase())
);

// crear una funcion filterPrice que le pase como parametro un array de productos, precio_inicial, precio_final y me devuelva 
// los productos cuyo precio está en ese rango de valores (sin incluirlos).

const filterPrice = (productArray=[], initialPrice=0, finalPrice=0)=>productos
    .filter((producto)=>Number(producto.price)>Number(initialPrice) && Number(producto.price)<Number(finalPrice)
);

const filterPrize2 = (productArray=[], initialPrice=0, finalPrize=0)=>{
    return 
}


//carrito de la compra

const carritos = [
    {
        name: "Laptop", price: 1000, count: 5, category:"Electronica"
    },
    {
        name: "Mouse Logitech", price: 28.56, count: 0, category:"Electronica"
    },
    {
        name: "Monitor MSI 24", price: 210.6, count: 10, category:"Electronica"
    },
    {
        name: "Teclado Mecanico", price: 150, count: 2, category:"Electronica"
    },
    {
        name: "Polo Scalper", price: 150, count: 2, category:"Ropa"
    },
    {
        name: "Pantalon Stradivarius", price: 45, count: 5, category:"Ropa"
    }
];

// funcion que le pase un carrito de la compra y me retorne cuanto tengo que pagar iva incluido



/**
 * @author Guillermo Bazan Diaz
 * xxxxxx
 * @param {Object[]} carritoProductos - carrito de objetos
 * @param {Number} vat - IVA a aplicar
 * @returns {Number} - Total del carrito IVA incluido
 */
const carritoTotal = (carritoProductos=[], vat=1.21, )=> carritoProductos
.reduce((total,product)=>
        product.count>5
        ?(total+product.price*vat)*0.95
        :total+product.price*vat
    ,0);

// Agrupar el carrito por categorías

/*
    {
        Electronica: [
            {},
            {},
            {}
        ],
        
        Ropa: [
            {},
            {},
            {}
        ]
    }

*/

const groupCart = (carrito=[]) => carrito
    .reduce((groups,product)=>{
            const categoryFilter = product.category;
            if(!groups[categoryFilter]){
                groups[categoryFilter]=[];
            }else{
                groups[categoryFilter].push(product)
            }
        return groups;
        
    },{});

const votos = ["Ana","Carlos","Ana","Beatriz","Carlos","Ana"];

//crear una funcion que le pase un array de votos y que cuente cuantos votos tiene cada uno de los usuarios

const countVotos = (arrayVotos=[])=> arrayVotos
    .reduce((counts,voto)=>{
            counts[voto]=(counts[voto] ||0)+1;
            return counts;
    },{});

const users = [
    {id:1,nombre:"Ana",rol:"admin"},
    {id:2,nombre:"Caarlos",rol:"usuario"},
    {id:3,nombre:"Beatriz",rol:"admin"},
]

// buscar el usuario cuyo id es 2 y obtener el rol que tiene

const findUsers = (users=[], id=1)=>{
    return users.find((user)=>{
        return Number(user.id) === Number(id)?? user.rol;
    })
};

// buscar el indice del array donde se encuentra el usuario con id buscado

const findUserIndex = (users)=>{
    return users.findIndex((user)=>Number(user.id) === Number(id))
}
// devuelve -1 si findIndex devuelve error o no encuentra la accion requerida

//*************** some() --------------->devuelve true si algun elemento cumple la condicion *******

const numerosPares = [4,5,6,7,8];

// hay numeros pares en este array?

const hayPares = numerosPares.some((numero)=>numero%2 === 0); // devuelve true o false si hay algun numero par