import GreetingsWithDate from "../components/GreetingsWithDate";
import HeaderMenu from "../components/HeaderMenu";


export const Header = () => {
    return (
        <header className="w-full px-8 pt-6 flex bg-transparent justify-between">
            <GreetingsWithDate />
            <HeaderMenu />
        </header>
    )
}
