import React, { useState } from "react";
import frontendSkillImg from '../assets/images/frontendCodeSkill.png';
import backendSkillImg from '../assets/images/backendCodeSkill.png';
import databasesSkillImg from '../assets/images/databasesCodeSkill.png';
import dockerSkillImg from '../assets/images/dockerCodeSkill.png';
import { SkillComponent } from "../components/SkillComponent";
import { motion } from "framer-motion";

export const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState("Frontend");

    const skills = [
        {
            name: "Frontend",
            img: frontendSkillImg,
            desc: "I have extensive experience in developing modern user interfaces using TypeScript and React. My expertise lies in building dynamic and responsive applications with React.js and Tailwind CSS, ensuring a seamless balance between aesthetics and usability. Additionally, I am highly proficient in HTML and CSS, allowing me to craft well-structured and visually appealing designs. I am also experienced in using Figma for UI/UX design, which enables me to create intuitive and user-friendly interfaces tailored to the needs of end users.",
            reverse: false
        },
        {
            name: "Backend",
            img: backendSkillImg,
            desc: "I possess a solid foundation in Java and object-oriented programming, with practical experience working with the Spring Boot framework to develop scalable microservices. My knowledge extends to Hibernate, enabling efficient object-relational mapping and database interactions. Additionally, I am proficient in writing SQL queries and have hands-on experience managing and optimizing PostgreSQL databases, ensuring efficient data handling and retrieval.",
            reverse: true
        },
        {
            name: "Databases",
            img: databasesSkillImg,
            desc: "I have a deep understanding of database management, particularly with PostgreSQL. I am proficient in writing complex SQL queries and leveraging Hibernate for effective object-relational mapping. My expertise includes designing efficient database schemas, optimizing queries for performance, and ensuring data consistency and security. I am also familiar with best practices in database normalization and indexing, allowing me to create scalable and high-performing database solutions.",
            reverse: false
        },
        {
            name: "Docker",
            img: dockerSkillImg,
            desc: "I have a fundamental understanding of application containerization using Docker, which allows me to streamline the deployment process and enhance the scalability of applications. I am experienced in creating and managing containers, ensuring seamless development and production workflows. By utilizing Docker, I can efficiently package applications along with their dependencies, making it easier to deploy and maintain software across different environments.",
            reverse: true
        }
    ];
    const activeSkill = skills.find(skill => skill.name === selectedSkill);

    return (
        <div className="h-full flex flex-col w-full bg-transparent items-center pt-5 px-4">
            <div className="flex flex-col gap-5">
                <motion.header
                    initial={{opacity: 0, y: -85}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, ease: "easeOut", delay: 0.4}}
                >
                    <header className="w-full flex justify-center items-center mb-[-10px] font-semibold text-xl sm:text-4xl">
                        MY SKILLS
                    </header>
                </motion.header>
                <motion.div
                    initial={{opacity: 0, y: -85}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, ease: "easeOut", delay: 0.2}}
                    className="w-1/4 md:w-[10%] flex self-center border-b-2 border-black"
                />
                <motion.div
                    initial={{opacity: 0, y: -85}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, ease: "easeOut"}}
                    className="flex justify-center"
                >
                    <p className="text-gray-600 w-full sm:w-2/3 font-semibold sm:font-bold text-xs scale-90 mt-[-16px] sm:mt-0 sm:text-xl text-center pb-3">
                        I really like to experiment and invest my free time to extend my experience and knowledge about
                        computer science. This is some of my area of interest and skills.
                    </p>
                </motion.div>
            </div>

            <motion.div
                initial={{opacity: 0, y: -85}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8, ease: "easeOut", delay: 0.2}}
                className="flex gap-4 mb-6"
            >
                {skills.map((skill) => (
                    <button
                        key={skill.name}
                        onClick={() => setSelectedSkill(skill.name)}
                        className={`flex flex-col items-center cursor-pointer text-xs sm:text-base focus:outline-none ${selectedSkill === skill.name ? "text-gray-800" : "text-gray-600"}`}
                    >
                        <div
                            className={`w-3 h-3 sm:w-6 sm:h-6 rounded-full border-2 ${selectedSkill === skill.name ? "bg-gray-700 border-gray-700" : "border-gray-500"}`}></div>
                        <span className="text-sm mt-1">{skill.name}</span>
                    </button>
                ))}
            </motion.div>

            <SkillComponent title={activeSkill.name} desc={activeSkill.desc} img={activeSkill.img}
                            reverse={activeSkill.reverse}/>
        </div>
    );
};