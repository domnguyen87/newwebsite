import React, { useState, useEffect } from 'react';
import './Weather.css';

interface WeatherData {
    main: {
        temp: number;
    };
    weather: {
        description: string;
        icon: string;
    }[];
    name: string;
}

const Weather: React.FC = () => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=New York&units=imperial&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch weather data");
                }

                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, []);

    if (loading) return <div>Loading weather...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="weather">
            {weatherData && (
                <div>
                    <h3>Your Weather in {weatherData.name}</h3>
                    <p>
                        Temperature: {Math.round(weatherData.main.temp)}°F
                    </p>
                </div>
            )}
        </div>
    );
};

export default Weather;
