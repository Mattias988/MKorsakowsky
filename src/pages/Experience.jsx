import React from "react";
import {TimelineEvent} from "../components/TimelineEvent";

const events2023 = [
    {
        date: "VII.2023 – IX.2023",
        title: "Prognosis Sp. z o.o. (Backend Developer Intern)",
        expand: "Rozwiń",
        technologies: [
            "Java",
            "Spring Boot",
            "Hibernate",
            "PostgreSQL",
            "Git",
        ],
    },
];

const events2024 = [
    {
        date: "X.2023 – V.2024",
        title: "Prognosis Sp. z o.o. (Frontend Developer Intern)",
        expand: "Rozwiń",
        technologies: [
            "TypeScript",
            "React",
            "Tailwind CSS",
            "HTML",
            "CSS",
            "Git",
        ],
    },
    {
        date: "VII.2024",
        title: "Freelancer",
        expand: "Rozwiń",
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
                <header className="w-full flex justify-center items-center mb-[-10px] font-semibold text-4xl">
                    Experience
                </header>
                <span className="w-[10%] flex self-center border-b-2 border-black"></span>
                <p className="text-gray-600 font-bold text-4lg w-full flex text-center pb-3">
                    Below, I present my professional journey that I have built over the years. Each role has enabled me to develop my skills, acquire valuable competencies, and broaden my industry knowledge. As a result, I am well-prepared for new challenges and eager to take on exciting projects.
                </p>
                <div className="w-full flex flex-col items-center mt-10">
                    <div className="w-full flex items-start border-t-2 border-gray-300 relative h-24">

                        <div className="flex-1 text-center text-gray-600 text-lg font-medium">
                            2023
                        </div>

                        {events2023.map((event, index) => (
                            <TimelineEvent key={index} event={event} />
                        ))}

                        <div className="flex-1 text-center text-gray-600 text-lg font-medium">
                            2024
                        </div>

                        {events2024.map((event, index) => (
                            <TimelineEvent key={index} event={event} />
                        ))}

                        <div className="flex-1 text-center text-gray-600 text-lg font-medium">
                            Present
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
