import { weatherApi, locationApi } from "./axios";

const weatherKey = import.meta.env.VITE_WEATHER_API
const addressKey = import.meta.env.VITE_MAPBOX_API


export const getWeatherReport = async (lat, lon) =>{
    const {data} = await weatherApi.get(
        `data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${weatherKey}&units=imperial`
        );
    return data;
}

export const getCityWeather = async (lat, lon) =>{
    const {data} = await weatherApi.get(
        `data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherKey}&units=imperial`
        );
    return data;
}

export const getAddress = async (searchQuery) => {
    const {data}= await locationApi.get(`mapbox.places/${searchQuery}.json?access_token=${addressKey}&types=place`)
    return data;
}