import {ReactComponent as HomeIcon} from "../assets/icons/homeIcon.svg"
 import {DropdownMenu} from "./DropdownMenu";
import {Link} from "react-router-dom";

const HeaderMenu = () => {
    return (
        <section className="flex flex-col w-full h-full sm:flex-row items-end justify-center sm:justify-end gap-2">
            <Link to={"/"} className="flex items-center justify-center bg-grayCustom rounded-3xl w-full h-full px-3 py-2 sm:w-[150px] sm:h-[50px] gap-2 hover:bg-black transition ">
                    <HomeIcon className="scale-75 sm:scale-100"/>
                    <p className="text-white">Home</p>
            </Link>
            <div className="flex items-center justify-center bg-grayCustom rounded-3xl w-full h-full sm:w-[150px] sm:h-[50px] hover:bg-black transition">
                <DropdownMenu/>
            </div>
        </section>
    )
}
export default HeaderMenu;