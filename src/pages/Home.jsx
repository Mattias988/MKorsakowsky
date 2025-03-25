import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export const Home = () => {
    return (
        <div className="min-h-full flex flex-col w-full bg-transparent px-4 sm:px-8">
            <section className="w-full flex flex-1 justify-center items-center text-center flex-col">
                <motion.h1
                    initial={{ opacity: 0, y: 85 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
                >
                    <motion.span
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="block"
                    >
                        Hello, I'm Maciek.
                    </motion.span>
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="font-black text-xl sm:text-3xl md:text-4xl lg:text-5xl mt-4 text-primary"
                >
                    I'm <Typewriter
                    words={["fullstack developer.", "frontend developer.", "backend developer.", "freelancer."]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={1500}
                />
                </motion.h2>
            </section>
        </div>
    );
};
