import GreetingsWithDate from "../components/GreetingsWithDate";
import HeaderMenu from "../components/HeaderMenu";
import { motion } from "framer-motion";

export const Header = () => {
    return (
        <motion.header
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full px-8 pt-6 flex bg-transparent justify-between"
        >
            <GreetingsWithDate />
            <HeaderMenu />
        </motion.header>
    );
};
