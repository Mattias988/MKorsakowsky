import { useEffect, useState } from "react";
import ActualDate from "../components/ActualDate";

const Footer = () => {
    const [temperature, setTemperature] = useState(null);
    const [location, setLocation] = useState("Kraków");

    useEffect(() => {
        const fetchWeather = async (query) => {
            try {
                const response = await fetch(`https://wttr.in/${query}?format=j1`);
                const data = await response.json();
                const tempC = data.current_condition[0].temp_C;
                const areaName = data.nearest_area[0].areaName[0].value;
                setTemperature(tempC);
                setLocation(areaName);
            } catch (error) {
                console.error("Error fetching weather:", error);
            }
        };

        const fetchWeatherForKrakow = () => {
            fetchWeather("Krakow");
        };

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    fetchWeather(`${latitude},${longitude}`);
                },
                (error) => {
                    console.warn("Geolocation not available or denied. Showing Kraków weather.", error);
                    fetchWeatherForKrakow();
                }
            );
        } else {
            console.warn("Geolocation not supported by this browser. Showing Kraków weather.");
            fetchWeatherForKrakow();
        }
    }, []);

    return (
        <footer className="w-full px-8 pb-6 flex justify-end items-center bg-transparent">
            {temperature !== null ? (
                <div className="text-lg flex gap-2 font-normal text-gray-700">
                    <ActualDate monthTypeDisplay={'numeric'}/>
                    {temperature}°C
                </div>
            ) : (
                <div className="text-lg flex font-normal px-8 gap-x-5 text-gray-500">
                    <ActualDate monthTypeDisplay={'numeric'}/>

                    <p>Ładowanie temperatury...</p>
                </div>
            )}
        </footer>
    );
};

export default Footer;
