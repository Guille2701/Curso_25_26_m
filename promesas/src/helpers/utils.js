//crear una funcion utilizando promise y otra utilizando async/await que se traiga 
// de jsonplaceholder.typicode.com/photos el title y la imagen (thumbnailURL). HAY QUE PROBARLO

import dotenv from 'dotenv';
dotenv.config();
import { exec } from 'child_process';



VITE_API_URL = process.env.VITE_API_URL

//Funcion asincrona usando promise

export function dataJSONPromise(){
    const comando = "curl -s https://jsonplaceholder.typicode.com/photos | jq '.[] | {title: .title, url: .url}'"
    new Promise(()=>{
        exec() 
    })
}


// funcion asincrona usando async/await

export function dataJSONAsync(){

}

