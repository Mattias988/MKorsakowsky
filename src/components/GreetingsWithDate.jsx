import React from 'react';

const GreetingWithDate = () => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.toLocaleString('en-US', { month: 'short' });

    return (
        <div className="flex items-center space-x-4 text-black">
            <p className="text-lg font-normal">Good morning</p>

            <p className="text-lg font-light text-gray-600">{day} {month}</p>
        </div>
    );
};

export default GreetingWithDate;
