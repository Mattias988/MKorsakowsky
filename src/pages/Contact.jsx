import React from "react";
import { ReactComponent as InstagramIcon } from "../assets/icons/Instagramicon.svg";
import { ReactComponent as GithubIcon } from "../assets/icons/githubIcon.svg";
import { ReactComponent as LinkedinIcon } from "../assets/icons/linkedinIcon.svg";
import { ReactComponent as LocationIcon } from "../assets/icons/locationIcon.svg";
import { ReactComponent as EmailIcon } from "../assets/icons/emailIcon.svg";
import ConnectingWithPeople from "../assets/images/connectingWithPeople.jpg";
import { InfoItem } from "../components/InfoItem";
import { motion } from "framer-motion";

export const Contact = () => {
    return (
        <div className="flex flex-col items-center pt-5 min-h-screen px-4 md:px-8 lg:px-16">
            <motion.header
                initial={{ opacity: 0, y: -85 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
                <header className="text-xl sm:text-4xl font-bold mb-1 text-gray-800 text-center">
                    CONTACT ME
                </header>
            </motion.header>
            <motion.div
                initial={{ opacity: 0, y: -85 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="w-1/4 sm:w-1/6 flex self-center border-b-2 border-black"
            />
            <motion.div
                initial={{ opacity: 0, y: -85 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex justify-center"
            >
                <p className="text-gray-600 w-full sm:w-2/3 font-semibold sm:font-bold text-sm scale-90 sm:mt-0 sm:text-4lg text-center py-3">
                    Want to discuss something or get in touch? The easiest way is to send me
                    an email!
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 85 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <div
                    className="flex flex-col md:flex-row max-w-5xl w-full bg-white rounded-lg shadow-lg overflow-hidden"
                >
                    <div className="w-full p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">
                            INFO
                        </h2>
                        <ul className="space-y-1 sm:space-y-6">
                            <InfoItem Icon={LocationIcon} text="Kraków, Polska" href="https://www.google.com/maps/place/Kraków" />
                            <InfoItem Icon={LinkedinIcon} text="Maciej Korsakowski" href="https://www.linkedin.com/in/maciej-korsakowski-a65b0226a/" />
                            <InfoItem Icon={GithubIcon} text="Mattias988" href="https://github.com/Mattias988" />
                            <InfoItem Icon={InstagramIcon} text="MKorsakowsky" href="https://www.instagram.com/MKorsakowsky" />
                            <InfoItem Icon={EmailIcon} text="maciek.korsakowski@gmail.com" href="mailto:maciek.korsakowski@gmail.com" />
                        </ul>
                    </div>

                    <div className="hidden md:flex w-full md:w-1/2 p-6 flex-col items-center justify-center bg-gray-50">
                        <img
                            src={ConnectingWithPeople}
                            alt="connecting with people"
                            className="mb-4 w-36 h-36 sm:w-48 sm:h-48 object-cover rounded-full shadow-md"
                        />
                        <p className="text-gray-700 text-center mb-4 text-sm sm:text-base">
                            I love connecting with new people! Feel free to reach out on any of
                            my socials, or send me an email.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
