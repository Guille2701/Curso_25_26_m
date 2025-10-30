//------------------------------------------------
// OpenWeatherMap Helper Functions
//------------------------------------------------

const API_KEY = import.meta.env.VITE_API_KEY;
const VITE_API_OPENWEATHER= import.meta.env.VITE_API_OPENWEATHER;


export function getWeatherPromise(city="Granada"){
    const URL =`${VITE_API_OPENWEATHER}?q=${city}&units=metric&lang=es&appid=${API_KEY}`;

    return fetch(URL)
        .then(response => {
            if(!response.ok) throw new Error("Error al obtener los datos de la api")
            return response.json()
        })
        .then(data=>{
            console.log(`-----------------CLIMA DE LA CIUDAD ${city}--------------------`);
            console.log(` 🌡${data.main.temp}-- Temperatura: ºC`);
            const arrayImg=['☁','⛈','⛅','☀'];
            const weather = data.weather[0].main;
            switch (weather) {
                case 'Clouds':
                    console.log(` ☁${weather}`);
                    break;
                case 'Sunny':
                    console.log(` ☀${weather}`);
                    break;
                case 'Rain':
                    console.log(` ⛈${weather}`);
                    break;
                case 'Sun and Clouds':
                    console.log(` ⛅${weather}`);
                    break;
                default:
                    break;
            }
            return data;
        })
        .catch(error => console.log("Error ..."))
        .finally(()=>console.log("cerrando getWeatherPromise API"));
    }

    export async function getWeatherPromise2(city="Granada"){
        const URL = `${VITE_API_OPENWEATHER}?q=${city}&units=metric&lang=es&appid=${API_KEY}`;

        try {
            const response = await fetch(URL);
            if(!response.ok) throw new Error("Error aal consultar el tiempo");
            const data = await response.json();
            console.log(`-----------------CLIMA DE LA CIUDAD ${city}--------------------`);
            console.log(` 🌡${data.main.temp}-- Temperatura: ºC`);
            const arrayImg=['☁','⛈','⛅','☀'];
            const weather = data.weather[0].main;
            switch (weather) {
                case 'Clouds':
                    if(data.weather[0].description==="nubes dispersas"){
                        console.log(` ${arrayImg[2]}${weather}`);
                    }else{
                        console.log(` ${arrayImg[0]}${weather}`);   
                    }    
                    break;
                case 'Sunny':
                    console.log(` ${arrayImg[3]}${weather}`);
                    break;
                case 'Rain':
                    console.log(` ${arrayImg[1]}${weather}`);
                    break;
                default:
                    break;
            }
            return data;

        } catch (error) {
            throw new Error(error.message);
        }
    }
