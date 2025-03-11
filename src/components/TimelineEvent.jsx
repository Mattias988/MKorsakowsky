import React, {useState} from "react";

export const TimelineEvent = ({ event }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="relative flex-1 text-center">
            <div
                className="
          absolute
          top-0
          left-1/2
          transform
          -translate-x-1/2
          -translate-y-1/2
          w-4
          h-4
          bg-gray-700
          rounded-full
        "
            />

            <p className="mt-5 font-semibold">{event.date}</p>
            <p className="text-sm">{event.title}</p>

            <button
                className="text-xs cursor-pointer hover:underline focus:outline-none"
                onClick={() => setExpanded(!expanded)}
            >
                {event.expand}
            </button>

            {expanded && (
                <div
                    className="
            absolute
            top-full
            left-1/2
            transform
            -translate-x-1/2
            mt-2
            bg-gray-100
            p-3
            rounded
            shadow
            z-10
            text-left
            w-64
          "
                >
                    <ul className="list-disc pl-5">
                        {event.technologies.map((tech, idx) => (
                            <li key={idx}>{tech}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
