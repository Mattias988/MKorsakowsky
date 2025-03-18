import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const TimelineEvent = ({ event }) => {
    const [expanded, setExpanded] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="relative flex-1 text-center">
            {isMobile && (
                <p className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 text-xs text-gray-500">
                    Click me
                </p>
            )}
            <div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() => isMobile && setIsOpen(prev => !prev)}
            >
                <div className="w-4 h-4 bg-gray-700 rounded-full animate-ping"></div>
                <div className="w-4 h-4 bg-gray-700 rounded-full absolute top-0 left-0"></div>
            </div>

            {(isOpen || !isMobile) && (
                <>
                    <p className="mt-5 font-semibold text-gray-900">{event.date}</p>
                    <p className="text-sm text-gray-800">{event.title}</p>

                    <button
                        className="text-xs font-medium text-white bg-[#ABABAB] px-2 py-1 rounded-full hover:bg-[#909090] transition-all duration-300"
                        onClick={() => setExpanded(prev => !prev)}
                    >
                        {expanded ? "Roll up" : event.expand}
                    </button>

                    <AnimatePresence>
                        {expanded && (
                            <motion.div
                                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className="absolute top-full left-[-80px] transform -translate-x-1/2 mt-2 bg-grayCustom  shadow-lg rounded-xl backdrop-blur-md border border-gray-400 p-4 text-left w-64 z-10"
                            >
                                <ul className="list-disc pl-5 text-white font-medium">
                                    {event.technologies.map((tech, idx) => (
                                        <li key={idx} className="hover:text-black transition-all duration-200">
                                            {tech}
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