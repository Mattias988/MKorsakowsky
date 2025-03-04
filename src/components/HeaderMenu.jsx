import {ReactComponent as HomeIcon} from "../assets/icons/homeIcon.svg"
import {ReactComponent as ArrowDown} from "../assets/icons/arrowDown.svg"
import {ReactComponent as SearchIcon} from "../assets/icons/searchIcon.svg"

const HeaderMenu = () => {
    return (
        <section className="flex items-center justify-end gap-2">
            <div className="flex items-center justify-center bg-grayCustom rounded-3xl w-[150px] h-[50px] gap-2">
                <HomeIcon />
                <p className="text-white">Home</p>
            </div>
            <div className="flex items-center justify-center bg-grayCustom rounded-3xl h-[50px] w-[150px] gap-3">
                {/* here wil be display by location */}
                <p className="text-white">Home</p>
                <div className="rounded-full bg-white w-[35px] h-[35px] flex justify-center items-center">
                    <ArrowDown className = "" />
                </div>
            </div>
            <div className="flex items-center justify-center bg-grayCustom rounded-full h-[50px] w-[50px]">
                {/* here will be searching by words and letters */}
                <SearchIcon />
            </div>
        </section>
    )
}
export default HeaderMenu;