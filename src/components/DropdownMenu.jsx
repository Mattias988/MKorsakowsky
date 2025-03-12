import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as ArrowDown } from "../assets/icons/arrowDown.svg";
import { motion, AnimatePresence } from "framer-motion";

export const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const pathMap = {
        "/": "Home",
        "/skills": "Skills",
        "/experience": "Experience",
        "/contact": "Contact",
    };

    const currentLocation = pathMap[location.pathname] || "Home";
    const filteredOptions = Object.entries(pathMap).filter(([path, name]) => name !== currentLocation);

    const handleNavigation = (event, path) => {
        event.preventDefault();
        setIsOpen(false);
        window.location.pathname = path;
    };

    return (
        <div className="relative inline-block">
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="flex items-center text-white px-5 py-2 transition-all duration-300 gap-3 rounded-full"
            >
                {currentLocation}
                <div className="rounded-full bg-white w-[35px] h-[35px] flex justify-center items-center ">
                    <ArrowDown className={`transition-transform  ease-in-out ${isOpen ? "rotate-180" : "rotate-0"}`} />
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute left-0 mt-2 w-44 bg-white shadow-lg rounded-xl backdrop-blur-md border border-gray-300"
                    >
                        {filteredOptions.map(([path, name]) => (
                            <li
                                key={path}
                                onClick={(event) => handleNavigation(event, path)}
                                className="px-5 py-3 text-gray-900 font-medium cursor-pointer hover:bg-gradient-to-r from-[#ABABAB] to-[#909090] hover:text-white hover:rounded-xl transition-all duration-100"
                            >
                                <Link to={path}>{name}</Link>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
};
