import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ReactComponent as ArrowDown } from "../assets/icons/arrowDown.svg";

export const TimelineEvent = ({ event }) => {
    const [expanded, setExpanded] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [openTechIndex, setOpenTechIndex] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setExpanded(false);
                setOpenTechIndex(null);
            }
        };

        if (expanded) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [expanded]);
    return (
        <div className="relative flex-1 w-full text-center">
            {isMobile && (
                <p className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 text-xs text-gray-500">
                    Click me
                </p>
            )}
            <div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() => isMobile && setIsExpanded(prev => !prev)}
            >
                <div className="w-4 h-4 bg-gray-700 rounded-full animate-ping"></div>
                <div className="w-4 h-4 bg-gray-700 rounded-full absolute top-0 left-0"></div>
            </div>

            {(isExpanded || !isMobile) && (
                <>
                    <p className="mt-5 w-20 sm:w-full font-medium text-xs sm:text-base sm:font-semibold text-gray-900">{event.date}</p>
                    <p className="text-[10px] sm:text-base text-gray-800">{event.title}</p>

                    <button
                        className="text-xs font-medium text-white bg-[#ABABAB] px-2 py-1 rounded-full hover:bg-[#909090] transition-all duration-300"
                        onClick={() => setExpanded(prev => !prev)}
                    >
                        {expanded ? "Roll up" : event.expand}
                    </button>

                    <AnimatePresence>
                        {expanded && (
                            <motion.div
                                ref={dropdownRef}
                                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className="absolute top-20 left-0 transform -translate-x-1/2 -translate-y-1/2 mt-2 bg-transparent shadow-lg rounded-xl backdrop-blur-lg border border-gray-400 p-4 text-left w-30 text-xs sm:text-lg sm:w-64 lg:w-96 z-10"
                            >
                                <ul className="pl-5 text-gray-800 font-medium list-none">
                                    {event.technologies.map((tech, idx) => (
                                        <li key={idx} className="hover:text-gray-400 transition-all duration-200">
                                            <div
                                                className="flex justify-between items-center cursor-pointer"
                                                onClick={() => {if(!isMobile) setOpenTechIndex(prev => prev === idx ? null : idx)}}
                                            >
                                                {tech}
                                                {!isMobile ? <ArrowDown className={`${openTechIndex === idx ? "rotate-180" : "rotate-0"} transition-transform duration-200`} /> : null}
                                            </div>
                                            {openTechIndex === idx && !isMobile && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                                    transition={{ duration: 0.3 }}
                                                    >
                                                    <p className="mt-2 text-gray-600 bg-gradient-to-r from-grayCustom to-whiteMain rounded-lg p-2 backdrop-blur-lg text-sm">
                                                        Tutaj możesz dodać info o technologii: <strong>{tech}</strong>
                                                    </p>
                                                </motion.div>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </>
            )}
        </div>
    );
};