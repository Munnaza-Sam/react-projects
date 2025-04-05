import React, { useEffect, useState } from 'react'
import styles from './Weather.module.css'
import search from '../../assets/search.png'
import humidity from '../../assets/humidity.png'
import wind from '../../assets/wind.png'
import clear from '../../assets/clear.png'
import cloud from '../../assets/cloud.png'
import drizzle from '../../assets/drizzle.png'
import rain from '../../assets/rain.png'
import snow from '../../assets/snow.png'

const Weather = () => {
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState('Lahore');
    const API_KEY = import.meta.env.VITE_APP_ID;

    const getWeather = async () => {
        if (!city) return;
        try {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );
            const data = await res.json();
            if (data.cod === "404") {
                alert("City not found.");
                return;
            }
            setWeather(data);
            console.log(data);
            setCity('');
        } catch (error) {
            console.error('Error fetching weather:', error);
        }
    };
    useEffect(() => {
        getWeather();
    }, [])
    const getWeatherImage = (weatherCondition) => {
        switch (weatherCondition) {
            case 'Clear':
                return clear;
            case 'Clouds':
                return cloud;
            case '"Smoke"':
                return drizzle;
            case 'Rain':
                return rain;
            case 'Snow':
                return snow;
            default:
                return clear; // fallback image
        }
    };
    
    return (
        <>
            <div className={styles.weather}>
                <h1>WEATHER APP</h1>
                <div className={styles.inputArea}>
                    <input type="text" value={city} placeholder='enter city ' onChange={(e) => setCity(e.target.value)} />
                    <button onClick={getWeather}>
                        <img src={search} />
                    </button>
                </div>
                {weather ? <>
                    <div className={styles.detail_weather}>
                    <img src={getWeatherImage(weather.weather[0].main)} alt="" width={'100px'}/>
                        <p className={styles.temperature}>{weather.main.temp}°c</p>
                        <p className={styles.location}>{weather.name}</p>
                    </div>
                    <div className={styles.weather_data}>
                        <div className={styles.colum}>
                            <img src={humidity} alt="" />
                            <div>
                                <p>{weather.main.humidity}%</p>
                                <span>humidity</span>
                            </div>
                        </div>

                        <div className={styles.colum}>
                            <img src={wind} alt="" />
                            <div>
                                <p>{weather.wind.speed} m/s</p>
                                <span>wind</span>
                            </div>
                        </div>
                    </div>
                </> :
                <>
                <h1>enter city name to see weather</h1>
                </>}
            </div>
        </>
    )
}

export default Weather