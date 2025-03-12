import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const TimelineEvent = ({ event }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="relative flex-1 text-center">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 bg-gray-700 rounded-full animate-ping"></div>
                <div className="w-4 h-4 bg-gray-700 rounded-full absolute top-0 left-0"></div>
            </div>

            <p className="mt-5 font-semibold text-gray-900">{event.date}</p>
            <p className="text-sm text-gray-800">{event.title}</p>

            <button
                className="text-xs font-medium text-black bg-[#ABABAB] px-2 py-1 rounded-full hover:bg-[#909090] transition-all duration-300"
                onClick={() => setExpanded(!expanded)}
            >
                {event.expand}
            </button>

            <AnimatePresence>
                {expanded && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-lg rounded-xl backdrop-blur-md border border-gray-300 p-4 text-left w-64 z-10"
                    >
                        <ul className="list-disc pl-5 text-gray-700 font-medium">
                            {event.technologies.map((tech, idx) => (
                                <li key={idx} className="hover:text-black transition-all duration-200">
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
