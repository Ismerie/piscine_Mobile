import React from 'react';
import axios from 'axios';

import { getWeatherDescription, getWeatherImage } from './codeWeather';
const WeatherAPI = "https://api.open-meteo.com/v1/forecast"

const fillCurrentWeather = (setCurrentWeather, current_weather) => {
    const { temperature, weathercode, windspeed } = current_weather;
    const weatherDescription = getWeatherDescription(weathercode);
    const weatherImage = getWeatherImage(weathercode)
    setCurrentWeather({
            temp: temperature,
            weatherDescription: weatherDescription,
            windSpeed: windspeed,
            weatherImage: weatherImage
    })
}

const fillTodayWeather = (setTodayWeather, data) => {
    const { hourly } = data;
    const { time, temperature_2m, weathercode, windspeed_10m } = hourly;

    const todayTime = time.slice(0, 24);
    const todayTemperature = temperature_2m.slice(0, 24);
    const todayWeatherCode = weathercode.slice(0, 24);
    const todayWindspeed = windspeed_10m.slice(0, 24);
    const dailyWeather = todayTime.map((hour, index) => ({
        hour: todayTime[index].split('T')[1],
        temperature: todayTemperature[index],
        weatherDescription: getWeatherDescription(todayWeatherCode[index]),
        windspeed: todayWindspeed[index],
        weatherImage: getWeatherImage(todayWeatherCode[index])
    }));
    
    setTodayWeather(dailyWeather);

} 

const fillWeeklyWeather = (setWeeklyWeather, data) => {
    const { daily } = data;
    const { time, temperature_2m_min, temperature_2m_max, weathercode } = daily;

    console.log(time)
    const weeklyWeather = time.map((date, index) => ({
        date: date.split('-').reverse().slice(0, 2).join('/'),
        minTemp: temperature_2m_min[index],
        maxTemp: temperature_2m_max[index],
        weatherDescription: getWeatherDescription(weathercode[index]),
        weatherImage: getWeatherImage(weathercode[index])
    }));

    setWeeklyWeather(weeklyWeather);
}

export async function getWeather(city, setCurrentWeather, setTodayWeather, setWeeklyWeather, setError) {
    try {
        const res = await axios.get(WeatherAPI, {
            params: {
                latitude: city.latitude,
                longitude: city.longitude,
                current_weather: true,
                hourly: ["temperature_2m", "weathercode", "windspeed_10m"],
                daily: ["temperature_2m_min", "temperature_2m_max", "weathercode"]
            }
        });

        fillCurrentWeather(setCurrentWeather, res.data.current_weather);
        fillTodayWeather(setTodayWeather, res.data)
        fillWeeklyWeather(setWeeklyWeather, res.data);
    }
    catch (error) {
        console.log(error);
        setError("The service conection is lost, please check your internet connection or try again later")
    }
} 