import React from "react";
import frontendSkillImg from '../assets/images/frontendCodeSkill.png'
import {SkillComponent} from "../components/SkillComponent";

export const Skills = () => {
    const frontendDesc = "Bardzo lubie fronta bo jest mega spoko, a jak go pisze to czuje sie jak sztywny gitcior takze nie ma co gadac fajna sprawa taki froncik porobic bla bla  bla bla  bla bla  bla bla  bla bla  bla bla  bla bla  bla bla "

    return (
        <div className="h-screen flex flex-col w-full bg-transparent items-center pt-5">
            <div className="flex flex-col gap-5">
                <header className="w-full flex justify-center items-center font-semibold text-4xl">
                    MY SKILLS
                </header>
                <span className="w-[10%] flex self-center border-b-2 border-black"></span>
                <p className="text-gray-600 font-bold text-4lg flex justify-center">
                    I really like experiment and invest my free time to extend my experience and knowledge about computer science, this is some of my area of interest ans skills
                </p>
                <SkillComponent title={"frontend"} desc={frontendDesc} img={frontendSkillImg} reverse={false}/>
                <SkillComponent title={"frontend"} desc={"Test description"} img={frontendSkillImg} reverse={true}/>
                <SkillComponent title={"frontend"} desc={"Test description"} img={frontendSkillImg} reverse={false}/>
                <SkillComponent title={"frontend"} desc={"Test description"} img={frontendSkillImg} reverse={true}/>
            </div>
        </div>
    )
}