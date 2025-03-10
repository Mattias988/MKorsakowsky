import React from "react";
import {ReactComponent as InstagramIcon} from "../assets/icons/Instagramicon.svg";
import {ReactComponent as GithubIcon} from "../assets/icons/githubIcon.svg";
import {ReactComponent as LinkedinIcon} from "../assets/icons/linkedinIcon.svg";
import {ReactComponent as LocationIcon} from "../assets/icons/locationIcon.svg";
import {ReactComponent as EmailIcon} from "../assets/icons/emailIcon.svg";
import ConnectingWithPeople from "../assets/images/connectingWithPeople.jpg";
import {InfoItem} from "../components/InfoItem";

export const Contact = () => {
    return (
        <div className="flex flex-col items-center pt-5 min-h-screen">
            <h1 className="text-4xl mb-3 font-bold text-gray-800 ">
                CONTACT ME
            </h1>
            <span className="w-[10%] flex self-center border-b-2 border-black mb-4"></span>
            <p className="text-gray-600 font-bold text-lg md:text-xl flex justify-center pb-10 mt-3 mx-4 text-center">
                Want to discuss something or get in touch? The easiest way is to send me
                an email!
            </p>

            <div className="flex flex-col md:flex-row max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="w-full md:w-1/2 p-6">
                    <h2 className="text-2xl w-full font-semibold mb-4 text-gray-800">
                        INFO
                    </h2>
                    <ul className="space-y-6">
                        <InfoItem
                            Icon={LocationIcon}
                            text="Kraków, Polska"
                            href="https://www.google.com/maps/place/Kraków"
                            className="scale-90"
                        />
                        <InfoItem
                            Icon={LinkedinIcon}
                            text="Maciej Korsakowski"
                            href="https://www.linkedin.com/in/maciej-korsakowski-a65b0226a/"
                        />
                        <InfoItem
                            Icon={GithubIcon}
                            text="Mattias988"
                            href="https://github.com/Mattias988"
                        />
                        <InfoItem
                            Icon={InstagramIcon}
                            text="MKorsakowsky"
                            href="https://www.instagram.com/MKorsakowsky"
                        />
                        <InfoItem
                            Icon={EmailIcon}
                            text="maciek.korsakowski@gmail.com"
                            href="mailto:maciek.korsakowski@gmail.com"
                        />
                    </ul>
                </div>

                <div className="w-full md:w-1/2 p-6 flex flex-col items-center justify-center bg-gray-50">
                    <img
                        src={ConnectingWithPeople}
                        alt="connecting with people"
                        className="mb-4 w-48 h-48 object-cover rounded-full shadow-md"
                    />
                    <p className="text-gray-700 text-center mb-4">
                        I love connecting with new people! Feel free to reach out on any of
                        my socials, or send me an email.
                    </p>
                </div>
            </div>
        </div>
    );
}