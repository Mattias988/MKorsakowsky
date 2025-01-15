import React from "react";
// import About from '../assets/icons/about.svg';
// import Contact from '../assets/icons/contact.svg';
// import Computer from '../assets/icons/computer.svg';
// import Interests from '../assets/icons/interests.svg';
// import Jobs from '../assets/icons/jobs.svg';
// import Code from '../assets/icons/code.svg';
import MainPhoto from '../assets/images/MainPagePhoto.png'
import {Header} from "../layouts/Header";

export const Home = () => {
    return (
        <div className="min-h-screen w-full bg-gradient-radial from-white to-gray-300">
            <Header className="h-[10%] w-full"/>
            <div className="flex items-center justify-end  w-full">
                <div className="absolute w-[650px] h-[650px] inset-0 object-cover mx-auto top-[10%] bg-[#2D2D2D] rounded-full shadow-xl" />

                <img
                    src={MainPhoto}
                    alt=""
                    className="absolute inset-0 w-[600px] h-[850px] rounded-full object-cover m-auto"
                />
                <div className="text-[40px] pr-8 pt-8 animate-slide-in-right">
                    <p>
                        Hello, my name is
                    </p>
                    <p className="font-bold">
                        Maciej Korsakowski
                    </p>
                </div>
            </div>
        </div>
    );
};
