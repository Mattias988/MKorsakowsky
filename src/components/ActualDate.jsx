import React from "react";

const ActualDate = ({monthTypeDisplay}) => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.toLocaleString('en-US', { month: monthTypeDisplay });

    return (
        <p className="text-sm sm:text-lg font-normal text-gray-600">{day} {month}</p>
    )
}
export default ActualDate;