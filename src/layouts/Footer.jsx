import { useWeather } from "../contexts/WeatherContext";
import ActualDate from "../components/ActualDate";
import { motion } from "framer-motion";

export const Footer = () => {
    const { temperature } = useWeather();

    return (
        <motion.footer
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="fixed bottom-0 left-0 w-full px-8 pb-6 flex justify-end items-center bg-transparent"
        >
            {temperature !== null ? (
                <div className="text-sm sm:text-lg flex gap-2 font-normal text-gray-700">
                    <ActualDate monthTypeDisplay={"numeric"} />
                    {temperature}°C
                </div>
            ) : (
                <div className="text-sm sm:text-lg flex font-normal px-8 gap-x-5 text-gray-500">
                    <ActualDate monthTypeDisplay={"numeric"} />
                    <p>Ładowanie temperatury...</p>
                </div>
            )}
        </motion.footer>
    );
};
