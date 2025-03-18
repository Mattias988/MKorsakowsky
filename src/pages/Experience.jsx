import React from "react";
import {TimelineEvent} from "../components/TimelineEvent";
import {motion} from "framer-motion";

const events2023 = [
    {
        date: "VII.2023 – IX.2023",
        title: "Prognosis Sp. z o.o. (Backend Developer Intern)",
        expand: "Expand",
        technologies: [
            "Java",
            "Spring Boot",
            "Hibernate",
            "PostgreSQL",
            "Git",
            "IntelliJ",
            "Postman"
        ],
    },
];

const events2024 = [
    {
        date: "X.2023 – V.2024",
        title: "Prognosis Sp. z o.o. (Frontend Developer Intern)",
        expand: "Expand",
        technologies: [
            "TypeScript",
            "React",
            "Tailwind CSS",
            "HTML5",
            "CSS3",
            "Git",
            "WebStorm",
            "Visual Studio Code"
        ],
    },
    {
        date: "VII.2024",
        title: "Freelancer",
        expand: "Expand",
        technologies: [
            "WordPress",
            "Elementor",
            "Custom Code",
            "Responsive Design",
            "Polylang",
            "Hostinger"
        ],
    },
];

export const Experience = () => {
    return (
        <div className="h-screen w-full bg-transparent flex flex-col pt-5">
            <div className="flex flex-col gap-5">
                <motion.header
                    initial={{opacity: 0, y: -85}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, ease: "easeOut", delay: 0.4}}
                >
                    <header className="w-full flex justify-center items-center font-semibold text-xl sm:text-4xl">
                        Experience
                    </header>
                </motion.header>
                <motion.div
                    initial={{opacity: 0, y: -85}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, ease: "easeOut", delay: 0.2}}
                    className="w-1/4 md:w-[10%] flex self-center border-b-2 mt-[-10px] border-black"
                />
                <motion.div
                    initial={{opacity: 0, y: -85}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, ease: "easeOut"}}
                    className="flex justify-center"
                >
                    <p className="text-gray-600 w-full sm:w-2/3 font-semibold sm:font-bold text-xs scale-90 mt-[-16px] sm:mt-0 sm:text-xl text-center pb-3">
                        Below, I present my professional journey that I have built over the years. Each role has enabled
                        me to develop my skills, acquire valuable competencies, and broaden my industry knowledge. As a
                        result, I am well-prepared for new challenges and eager to take on exciting projects.
                    </p>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, y: 85}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1, ease: "easeOut"}}
                >
                    <div className="w-full flex flex-col items-center mt-4 sm:mt-10">
                        <div className="w-full sm:w-3/4 flex items-start border-t-2 border-gray-300 relative h-24">

                            <div className="flex-1 text-center text-gray-600 text-sm sm:text-lg font-medium">
                                2023
                            </div>

                            {events2023.map((event, index) => (
                                <TimelineEvent key={index} event={event}/>
                            ))}

                            <div className="flex-1 text-center text-gray-600 text-sm sm:text-lg font-medium">
                                2024
                            </div>

                            {events2024.map((event, index) => (
                                <TimelineEvent key={index} event={event}/>
                            ))}

                            <div className="flex-1 text-center text-gray-600 text-sm sm:text-lg font-medium">
                                Present
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
);
};
