import React from "react";
import frontendSkillImg from '../assets/images/frontendCodeSkill.png'
import backendSkillImg from '../assets/images/backendCodeSkill.png'
import databasesSkillImg from '../assets/images/databasesCodeSkill.png'
import dockerSkillImg from '../assets/images/dockerCodeSkill.png'
import {SkillComponent} from "../components/SkillComponent";

export const Skills = () => {
    const frontendDesc = "I have extensive experience in developing modern user interfaces using TypeScript and React. My expertise lies in building dynamic and responsive applications with React.js and Tailwind CSS, ensuring a seamless balance between aesthetics and usability. Additionally, I am highly proficient in HTML and CSS, allowing me to craft well-structured and visually appealing designs. I am also experienced in using Figma for UI/UX design, which enables me to create intuitive and user-friendly interfaces tailored to the needs of end users.";
    const backendDesc = "I possess a solid foundation in Java and object-oriented programming, with practical experience working with the Spring Boot framework to develop scalable microservices. My knowledge extends to Hibernate, enabling efficient object-relational mapping and database interactions. Additionally, I am proficient in writing SQL queries and have hands-on experience managing and optimizing PostgreSQL databases, ensuring efficient data handling and retrieval.";
    const databasesDesc = "I have a deep understanding of database management, particularly with PostgreSQL. I am proficient in writing complex SQL queries and leveraging Hibernate for effective object-relational mapping. My expertise includes designing efficient database schemas, optimizing queries for performance, and ensuring data consistency and security. I am also familiar with best practices in database normalization and indexing, allowing me to create scalable and high-performing database solutions.";
    const dockerDesc = "I have a fundamental understanding of application containerization using Docker, which allows me to streamline the deployment process and enhance the scalability of applications. I am experienced in creating and managing containers, ensuring seamless development and production workflows. By utilizing Docker, I can efficiently package applications along with their dependencies, making it easier to deploy and maintain software across different environments.";

    return (
        <div className="h-screen flex flex-col w-full bg-transparent items-center pt-5">
            <div className="flex flex-col gap-5">
                <header className="w-full flex justify-center items-center mb-[-10px] font-semibold text-4xl">
                    MY SKILLS
                </header>
                <span className="w-[10%] flex self-center border-b-2 border-black"></span>
                <p className="text-gray-600 font-bold text-4lg flex justify-center pb-3">
                    I really like experiment and invest my free time to extend my experience and knowledge about computer science, this is some of my area of interest ans skills
                </p>
                <SkillComponent title={"Frontend"} desc={frontendDesc} img={frontendSkillImg} reverse={false}/>
                <SkillComponent title={"Backend"} desc={backendDesc} img={backendSkillImg} reverse={true}/>
                <SkillComponent title={"Databases"} desc={databasesDesc} img={databasesSkillImg} reverse={false}/>
                <SkillComponent title={"Docker"} desc={dockerDesc} img={dockerSkillImg} reverse={true}/>
            </div>
        </div>
    )
}