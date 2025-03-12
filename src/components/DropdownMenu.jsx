import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as ArrowDown } from "../assets/icons/arrowDown.svg";

export const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const pathMap = {
        "/": "Home",
        "/skills": "Skills",
        "/experience": "Experience",
        "/contact": "Contact",
    };

    const currentLocation = pathMap[location.pathname] || "Home";
    const filteredOptions = Object.entries(pathMap).filter(([path, name]) => name !== currentLocation);

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    return (
        <div className="relative inline-block">
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="flex items-center text-white px-4 py-2 gap-3 rounded-full"
            >
                {currentLocation}
                <div className="rounded-full bg-white w-[35px] h-[35px] flex justify-center items-center">
                    <ArrowDown className={`${isOpen ? "rotate-180" : ""}`} />
                </div>
            </button>

            {isOpen && (
                <ul className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 opacity-100">
                    {filteredOptions.map(([path, name]) => (
                        <li key={path} onClick={() => setIsOpen(false)} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                            <Link to={path} replace>{name}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
