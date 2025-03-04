import React from 'react';
import ActualDate from "./ActualDate";

const GreetingWithDate = () => {

    return (
        <div className="flex items-center space-x-4 text-black">
            <p className="text-lg font-medium">Good morning</p>
            <ActualDate monthTypeDisplay={'short'}/>
        </div>
    );
};

export default GreetingWithDate;
