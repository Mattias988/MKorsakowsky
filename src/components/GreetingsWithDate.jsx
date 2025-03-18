import React from 'react';
import ActualDate from "./ActualDate";

const GreetingWithDate = () => {

    return (
        <div className="w-full flex flex-col justify-center sm:justify-start sm:flex-row sm:items-center sm:space-x-4 text-black">
            <p className="text-sm sm:text-lg font-medium">Good morning</p>
            <ActualDate monthTypeDisplay={'short'}/>
        </div>
    );
};

export default GreetingWithDate;
