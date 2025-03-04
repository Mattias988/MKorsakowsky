import React from "react";
import { Header } from "../layouts/Header";
import Footer from "../layouts/Footer";

export const Home = () => {
    return (
        <div className="h-screen flex flex-col w-full bg-transparent ">
            <Header className=" w-full bg-transparent" />
            <section className="w-screen h-full flex flex-1 justify-center items-center">
                <h1 className="font-black pb-36 text-6xl capitalize">Hello, I'm Maciek. I'm fullstack developer.</h1>
            </section>
            <Footer className="w-full  "/>
        </div>
    );
};