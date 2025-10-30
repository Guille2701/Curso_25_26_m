// -------------- importaciones --------------------

import { dbTareas } from "./db/db";
import  getTareas, { saveTareas,addTarea } from "./helpers/tareas";


const TEXT_KEY=import.meta.env.VITE_TEXT_KEY;
console.log(TEXT_KEY);
 



// --------------------- INICIO DE LA APLICACION ----------------------------

saveTareas(dbTareas,TEXT_KEY);
getTareas(TEXT_KEY);
addTarea("Estudiar localStorage 4");
const tareasArray =getTareas(TEXT_KEY);
console.table(...tareasArray);