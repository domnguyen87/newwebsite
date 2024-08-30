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
        const fetchWeather = async (latitude: number, longitude: number) => {
            console.log("Fetching weather for coordinates:", latitude, longitude);
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
                );
                console.log("API Response:", response);

                if (!response.ok) {
                    throw new Error("Failed to fetch weather data");
                }

                const data = await response.json();
                console.log("Weather Data:", data);
                setWeatherData(data);
            } catch (error) {
                console.error("Error fetching weather data:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };


        const getLocation = () => {
            console.log("getLocation function called");

            if (navigator.geolocation) {
                console.log("Geolocation is supported by this browser.");

                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        console.log("Geolocation success:");
                        console.log("Latitude:", latitude);
                        console.log("Longitude:", longitude);

                        fetchWeather(latitude, longitude);  // Assuming fetchWeather is already defined and working
                    },
                    (error) => {
                        console.error("Geolocation error:", error.message);
                        setError("Geolocation is not supported by this browser or permission denied.");
                        setLoading(false);
                    }
                );
            } else {
                console.error("Geolocation is not supported by this browser.");
                setError("Geolocation is not supported by this browser.");
                setLoading(false);
            }
        };



        getLocation();
    }, []);

    if (loading) return <div>Loading weather...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="weather">
            {weatherData && (
                <div>
                    <h3>{weatherData.name}</h3>
                    <p>
                        Temperature: {Math.round(weatherData.main.temp)}°F
                    </p>
                </div>
            )}
        </div>
    );
};

export default Weather;
