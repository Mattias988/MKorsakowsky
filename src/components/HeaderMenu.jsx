import {ReactComponent as HomeIcon} from "../assets/icons/homeIcon.svg"
 import {DropdownMenu} from "./DropdownMenu";
import {Link} from "react-router-dom";

const HeaderMenu = () => {
    return (
        <section className="flex items-center justify-end gap-2">
            <Link to={"/"}>
                <div className="flex items-center justify-center bg-grayCustom rounded-3xl w-[150px] h-[50px] gap-2 hover:bg-black transition ">
                    <HomeIcon />
                    <p className="text-white">Home</p>
                </div>
            </Link>
            <div className="flex items-center justify-center bg-grayCustom rounded-3xl h-[50px] w-[150px] gap-3 hover:bg-black transition">
                <DropdownMenu/>
            </div>
        </section>
    )
}
export default HeaderMenu;