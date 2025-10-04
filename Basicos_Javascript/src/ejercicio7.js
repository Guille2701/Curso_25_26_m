const usuario = {
    name: "Guillermo",
    email: "guille@gmail.com",
    active: true,
}

//paraa obtener las claves


const claves = Object.keys(usuario);//[name, email,active]

// utilidad verificar si las claves estan todas siguiendo un objeto de partida

// 1.- como compruebo que todas las claves existen.
function validarCamposRequeridos (objeto,camposRequeridos){
    const clavesObjeto = Object.keys(objeto);
    // retorno verdadero o falso
    return camposRequeridos.every((campo)=>{
        return clavesObjeto.includes(campo)
    })
}

const datosFormulario={name:"Carla",active:false};

const esValido = validarCamposRequeridos(datosFormulario,["name","email","active"]);

//para los valores

const producto = {
    nombre: "laptop",
    stock:100,
    precio:1000,
    destacad:true
}

const valores =Object.values(producto); // ["laptop","100","1100","true"]

// verificar si algún valor cumple una condicion:


const precipitaciones ={
    enero:110,
    febrero:98,
    marzo:120,
    abril:50
}

//algun mes la precipitacion fue superior a 100 litros??

const mesSuperiorCien = Object.values(precipitaciones)
    .some((precipitacion)=> precipitacion>100
)

// cuantos litros totales han caido en los meses enero-abril?

const totalPrecipitaciones = Object.values(precipitaciones)
    .reduce((total,precipitacion)=>total + precipitacion,0
)

// calcular la precipitacion maxima

const precipitacionMaxima = Math.max(...Object.values(precipitaciones))

// obtener pares [clave-valor] <-- entries()

const configuracion = {
    tema:"oscuro",
    idioma:"es",
    notificaciones:true,
    volumen:75
}

//obtener array de pares clave, valor

const entradas = Object.entries(configuracion);

/*
    [
        ["tema","oscuro"],
        ["idioma","es"],
        ["notificaciones",true],
        ["volumen",75]  
    ]

*/

const usuarioDB = {
    name: "Guillermo",
    pssword:"xfst20012",
    email: "guille@gmail.com",
    active: true,
}

//filtrar. Eliminar los campos sensibles de este objeto usuarioDB ("password")

// +++++++++++
Object.entries(usuarioDB).filter()

const {nombre, email} = usuarioDB; // -----> const nombre= usuarioDB.name
                                   // -----> const email = usuarioDB.email

const data = [1,2,3,4,5];

const [a,b,,c] = data;

function vData (array){
    const [v1,v2] = array;
    console.log("v1;",v1);
    console.log("v2:",v2);

}

vData(["data",66,99]);

// crear funcion llamada mostrar persona. Obtener el username, y las 2 primeras redes sociales que el usuario tenga

const usuario3 = {
    id:1,
    info: {
        username:"Guillermo",
        redes: ["twitter", "github", "linkedin"],
        edad:11,
    }
}

const {info:{username, redes:[r1,r2]}} = usuario3;
/*
    username -> Guillermo
    r1-> twitter
    r2-> github
*/

//obtener el nombre y la edad del siguiente objeto. si no existe edad que guarde el valor 0.

const data4 = {
    id:101,
    usuario: {
        perfil:{
            nombre2:"Lucia",
            edad:28,
            direccion:{
                ciudad: "Granada",
                pais: "España"
            },
        },
        activo:true
    },
}

const {usuario:{perfil:{nombre2,edad=0}}}=data4
/*
    nombre2 ->"Lucia"
    edad ->28 
*/

const productos = [
    {
    id:1,
    nombre:"Laptop",
    precio:1000,
    fabricante: {
        nombre:"HP",
        pais:"USA",
        contacto:{
            email:"info@hp.com",
            telefono: "123456789"
        }
    },
    especificaciones:{
        ram: "16GB",
        cpu:"Intel I7"
    }
},
{
    id: 2,
    nombre: "Smartphone",
    precio: 700,
    fabricante: {
        nombre: "Samsung",
        pais: "Corea del Sur",
        contacto: {
            email: "soporte@samsung.com",
            telefono: "987654321"
        }
    },
    especificaciones: {
        ram: "8GB",
        cpu: "Exynos 2200"
    }
},
{
    id: 3,
    nombre: "Laptop",
    precio: 300,
    fabricante: {
        nombre: "Dell",
        pais: "USA",
        contacto: {
            email: "support@dell.com",
            telefono: "555123456"
        }
    },
    especificaciones: {
        ram: "4GB",
        cpu: "Intel I5"
    }
}
]

//crear una funcion que extraiga los datos del objeto y me devuelva la siguiente estructura:
//  nombre, fabricante {nombre, contacto}, especificaciones (solo la ram)

//imaginemos un array de productos. Usando la nueva especificacion obtener el nombre del producto con mas ram

const extraerData=(products)=> {
    const {
        nombre,
        fabricante:{ nombre:nombreFabricante,contacto },
        especificaciones:{ ram }
    } = arrayProducts;
    return {
        nombre,
        nombreFabricante,
        especificaciones
    }
}

const newDataArray = (arrayProducts)=>arrayProducts
    .map((product)=>extraerData(product)
)
