import React from 'react';

const IconBox = ({ icon, label, bgColor }) => {
    return (
        <div className={`flex flex-col items-center justify-center w-24 h-24 rounded-lg shadow-lg ${bgColor}`}>
            {icon}
            <p className="mt-2 text-sm font-medium text-gray-700">{label}</p>
        </div>
    );
};

export default IconBox;
