import { createContext, useContext, useEffect, useState } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [temperature, setTemperature] = useState(null);
    const [location, setLocation] = useState("Kraków");

    useEffect(() => {
        const savedWeather = localStorage.getItem("weatherData");
        if (savedWeather) {
            const { temp, loc } = JSON.parse(savedWeather);
            setTemperature(temp);
            setLocation(loc);
            return;
        }

        const fetchWeather = async (query) => {
            try {
                const response = await fetch(`https://wttr.in/${query}?format=j1`);
                const data = await response.json();
                const tempC = data.current_condition[0].temp_C;
                const areaName = data.nearest_area[0].areaName[0].value;
                setTemperature(tempC);
                setLocation(areaName);

                localStorage.setItem(
                    "weatherData",
                    JSON.stringify({ temp: tempC, loc: areaName })
                );
            } catch (error) {
                console.error("Błąd pobierania pogody:", error);
            }
        };

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    fetchWeather(`${latitude},${longitude}`);
                },
                () => {
                    console.warn("Geolokalizacja niedostępna. Pobieranie Krakowa.");
                    fetchWeather("Krakow");
                }
            );
        } else {
            console.warn("Geolokalizacja nieobsługiwana. Pobieranie Krakowa.");
            fetchWeather("Krakow");
        }
    }, []);

    return (
        <WeatherContext.Provider value={{ temperature, location }}>
            {children}
        </WeatherContext.Provider>
    );
};

export const useWeather = () => useContext(WeatherContext);
