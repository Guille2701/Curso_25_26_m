// ----------- IMPORTACIONES ---------------

import { uid } from "uid";
import { dbTareas } from "../db/db";

const TEXT_KEY=import.meta.env.VITE_TEXT_KEY;

// aqui van las funciones helpers para las tareas.

export const saveTareas = (arrayTareas=[],tareas="Tareas") => {
    
    try {
        if(!Array.isArray(arrayTareas)){
            throw new Error(`Error, la data ${arrayTareas} no es un array`)
        };
        // SERIALIZAR --> convierto a string
        const json = JSON.stringify(arrayTareas)
        localStorage.setItem(TEXT_KEY,json);
        console.info("💾 Array guardado con exito");
    }catch (error) {
        throw new Error("❌ Error guardando en localStorage");
    }
}



const getTareas = (clave) => {
    const dataSinParsear = localStorage.getItem(TEXT_KEY);
    const dataParseada = safeJSONParse(dataSinParsear);
    if(!Array.isArray(dataParseada)){
        console.error(`Error, la data ${dataParseada} no es un array`);
        return [];
    }
    return dataParseada;
}

export const addTarea = (nombreTarea)=>{
    
    const nombre = String(nombreTarea ?? "").trim();
    try {
        const nuevaTarea = {
            id:uid(5),
            nombre,
            fechaCreacion:new Date().toISOString(),
            completada:false
        }

        
    }catch (error){

    }
}
/*
export const deleteTareaId = (idTarea)=>{
    if(localStorage.hasOwnPorperty(idTarea)){
        const arrayTareas = getTareas("Tareas");
        arrayTareas.find(tarea=>tarea.id===idTarea);
        
    }
}*/
    
function safeJSONParse(text){
    try {
        if(typeof text !== "string"){
            throw new Error(`Error, la data ${text} no es un string`)
        };
        return JSON.parse(text);
    }catch (error) {
        console.error("Error parseando la data");
        throw new Error("Error parseando la data");
    }
}





export default getTareas;