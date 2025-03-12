import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export const Home = () => {
    return (
        <div className="h-screen flex flex-col w-full bg-transparent">
            <section className="w-full h-full flex flex-1 justify-center items-center">
                <motion.h1
                    initial={{ opacity: 0, y: 85 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="font-black pb-36 text-6xl"
                >
                    <motion.span
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        Hello, I'm Maciek.
                    </motion.span>{" "}
                    I'm{" "}
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                    >
                        <Typewriter
                            words={[
                                "fullstack developer.",
                                "frontend developer.",
                                "backend developer.",
                                "freelancer.",
                                "intern.",
                            ]}
                            loop={0}
                            cursor
                            cursorStyle="|"
                            typeSpeed={80}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </motion.span>
                </motion.h1>
            </section>
        </div>
    );
};
