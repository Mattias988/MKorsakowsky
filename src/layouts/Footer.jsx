import { useWeather } from "../contexts/WeatherContext";
import ActualDate from "../components/ActualDate";

export const Footer = () => {
    const { temperature } = useWeather();

    return (
        <footer className="fixed bottom-0 left-0 w-full px-8 pb-6 flex justify-end items-center bg-transparent">
            {temperature !== null ? (
                <div className="text-lg flex gap-2 font-normal text-gray-700">
                    <ActualDate monthTypeDisplay={"numeric"} />
                    {temperature}°C
                </div>
            ) : (
                <div className="text-lg flex font-normal px-8 gap-x-5 text-gray-500">
                    <ActualDate monthTypeDisplay={"numeric"} />
                    <p>Ładowanie temperatury...</p>
                </div>
            )}
        </footer>
    );
};
