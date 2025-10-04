// Ejercicio: Destructuring profundo

import { productos } from "./data/data"
import { extraerData } from "./helpers/myFunctions";

/// --------------------- INICIO DE LA APLICACION ---------------------------

const newDataArray = (arrayProducts)=>arrayProducts
    .map((product)=>extraerData(product)
)

console.log(newDataArray(productos));

