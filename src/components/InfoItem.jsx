export const InfoItem = ({ Icon, text, href }) => {
    return (
        <li className="flex gap-4 items-center hover:bg-gray-200 p-2 rounded transition-all duration-300 ">
            <a
                className="flex gap-4 items-center"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
            >
        <span className="font-bold transition-transform duration-300 hover:scale-105">
          <Icon />
        </span>
                <span className="text-gray-700">{text}</span>
            </a>
        </li>
    );
};