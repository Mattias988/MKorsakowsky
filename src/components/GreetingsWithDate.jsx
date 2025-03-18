import React from 'react';
import ActualDate from "./ActualDate";

const GreetingWithDate = () => {

    return (
        <div className="flex flex-col justify-center sm:flex-row sm:items-center sm:space-x-4 text-black">
            <p className="text-sm sm:text-lg font-medium">Good morning</p>
            <ActualDate monthTypeDisplay={'short'}/>
        </div>
    );
};

export default GreetingWithDate;
