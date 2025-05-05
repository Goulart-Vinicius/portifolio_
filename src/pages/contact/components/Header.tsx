import {FC} from "react";

const Header: FC = () => {
    return (
        <header className="flex flex-col justify-center items-center h-[50vh] p-4 gap-4">
            <h2 className="text-heading-1-mobile md:text-heading-1-desktop font-bold text-center">Vamos construir algo juntos?</h2>
            <p className="text-heading-4-mobile mt-4 md:text-heading-4-desktop ">Entre em contato comigo e vamos tirar sua ideia do papel.</p>
        </header>

    )
}

export default Header;