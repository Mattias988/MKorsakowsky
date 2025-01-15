import GreetingsWithDate from "../components/GreetingsWithDate";


export const Header = () => {
    return (
        <header className="w-full px-8 pt-6 flex justify-between">
            <GreetingsWithDate />
            <GreetingsWithDate />
        </header>
    )
}
